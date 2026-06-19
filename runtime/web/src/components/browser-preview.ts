/**
 * browser-preview.ts — Sidebar browser pane with address bar and iframe.
 *
 * Lets the user enter an arbitrary URL and view the page inside a sandboxed
 * iframe. The primary use case is previewing container-localhost services
 * from the PiClaw sidebar when the host has port-mapped those services.
 *
 * URL persists to localStorage so it survives sidebar close/reopen.
 */

import { html, useCallback, useEffect, useRef, useState } from '../vendor/preact-htm.js';
import { getLocalStorageItem, setLocalStorageItem } from '../utils/storage.js';

const STORAGE_KEY = 'browserPreviewUrl';
const BLANK = 'about:blank';

function normaliseUrl(raw: string): string {
  const trimmed = (raw || '').trim();
  if (!trimmed) return BLANK;
  if (trimmed === 'about:blank') return BLANK;
  // If it looks like a scheme-less host:port or host/path, prepend http://
  if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed)) {
    return `http://${trimmed}`;
  }
  return trimmed;
}

export function BrowserPreview({ visible }: { visible: boolean }) {
  const [url, setUrl] = useState<string>(() =>
    getLocalStorageItem(STORAGE_KEY) || BLANK,
  );
  const [inputValue, setInputValue] = useState<string>(url);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Sync input when url changes externally (e.g. initial load from localStorage)
  useEffect(() => {
    setInputValue(url);
  }, [url]);

  const goBack = useCallback(() => {
    try { iframeRef.current?.contentWindow?.history?.back?.(); } catch { /* cross-origin */ }
  }, []);

  const goForward = useCallback(() => {
    try { iframeRef.current?.contentWindow?.history?.forward?.(); } catch { /* cross-origin */ }
  }, []);

  const refresh = useCallback(() => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  }, []);

  const navigate = useCallback((target?: string) => {
    const next = normaliseUrl(target ?? inputValue);
    setUrl(next);
    setInputValue(next);
    setLocalStorageItem(STORAGE_KEY, next);
  }, [inputValue]);

  const handleInput = useCallback((e: Event) => {
    setInputValue((e.target as HTMLInputElement).value);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      navigate();
    }
  }, [navigate]);

  if (!visible) return null;

  return html`
    <div class="browser-preview">
      <div class="browser-preview-toolbar">
        <button class="browser-btn" onClick=${goBack} title="Back" aria-label="Back">◀</button>
        <button class="browser-btn" onClick=${goForward} title="Forward" aria-label="Forward">▶</button>
        <button class="browser-btn" onClick=${refresh} title="Refresh" aria-label="Refresh">↻</button>
        <input
          class="browser-url-input"
          type="text"
          value=${inputValue}
          onInput=${handleInput}
          onKeyDown=${handleKeyDown}
          placeholder="http://localhost:3000"
          spellcheck=${false}
          autocomplete="off"
          enterkeyhint="go"
        />
        <button class="browser-btn browser-go-btn" onClick=${() => navigate()} title="Go">Go</button>
      </div>
      <iframe
        ref=${iframeRef}
        class="browser-iframe"
        src=${url}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        title="Browser preview"
      />
    </div>
  `;
}
