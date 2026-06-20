/**
 * browser-pane.ts — WebPaneExtension for an interactive browser tab.
 *
 * Follows the same synthetic-path pattern as the terminal tab pane and VNC pane.
 * The browser renders as a tab in the editor content area with an address bar,
 * navigation controls, and a sandboxed iframe.
 */

import type { PaneCapability, PaneContext, PaneInstance, WebPaneExtension } from './pane-types.js';

export const BROWSER_TAB_PATH = 'piclaw://browser';

const STORAGE_KEY = 'browserPreviewUrl';
const BLANK = 'about:blank';

function normaliseUrl(raw: string): string {
  const trimmed = (raw || '').trim();
  if (!trimmed) return BLANK;
  if (trimmed === 'about:blank') return BLANK;
  if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(trimmed)) {
    return `http://${trimmed}`;
  }
  return trimmed;
}

function readStoredUrl(): string {
  try { return localStorage.getItem(STORAGE_KEY) || BLANK; } catch { return BLANK; }
}

function writeStoredUrl(url: string): void {
  try { localStorage.setItem(STORAGE_KEY, url); } catch { /* noop */ }
}

function createToolbarButton(text: string, title: string, onClick: () => void): HTMLButtonElement {
  const btn = document.createElement('button');
  btn.className = 'browser-btn';
  btn.textContent = text;
  btn.title = title;
  btn.setAttribute('aria-label', title);
  btn.addEventListener('click', onClick);
  return btn;
}

class BrowserPaneInstance implements PaneInstance {
  private container: HTMLElement;
  private disposed = false;
  private iframe: HTMLIFrameElement | null = null;
  private urlInput: HTMLInputElement | null = null;
  private currentUrl: string;

  constructor(container: HTMLElement, _context: PaneContext) {
    this.container = container;
    this.currentUrl = readStoredUrl();

    container.innerHTML = '';
    container.style.cssText =
      'display:flex;flex-direction:column;height:100%;background:var(--bg-primary,#0f1117);';

    // ── Toolbar ──────────────────────────────────────────────────
    const toolbar = document.createElement('div');
    toolbar.className = 'browser-preview-toolbar';

    const navigateTo = (target?: string): void => {
      const raw = target ?? (this.urlInput?.value ?? '');
      const next = normaliseUrl(raw);
      this.currentUrl = next;
      if (this.urlInput) this.urlInput.value = next === BLANK ? '' : next;
      writeStoredUrl(next);
      if (this.iframe) this.iframe.src = next;
    };

    const backBtn = createToolbarButton('◀', 'Back', () => {
      try { this.iframe?.contentWindow?.history?.back?.(); } catch { /* cross-origin */ }
    });
    const fwdBtn = createToolbarButton('▶', 'Forward', () => {
      try { this.iframe?.contentWindow?.history?.forward?.(); } catch { /* cross-origin */ }
    });
    const refreshBtn = createToolbarButton('↻', 'Refresh', () => {
      if (this.iframe) this.iframe.src = this.iframe.src;
    });

    // URL input
    this.urlInput = document.createElement('input');
    this.urlInput.className = 'browser-url-input';
    this.urlInput.type = 'text';
    this.urlInput.value = this.currentUrl === BLANK ? '' : this.currentUrl;
    this.urlInput.placeholder = 'http://localhost:3000';
    this.urlInput.spellcheck = false;
    this.urlInput.autocomplete = 'off';
    (this.urlInput as any).enterKeyHint = 'go';
    this.urlInput.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        navigateTo();
      }
    });

    const goBtn = createToolbarButton('Go', 'Go', () => navigateTo());
    goBtn.classList.add('browser-go-btn');

    toolbar.appendChild(backBtn);
    toolbar.appendChild(fwdBtn);
    toolbar.appendChild(refreshBtn);
    toolbar.appendChild(this.urlInput);
    toolbar.appendChild(goBtn);

    // ── Iframe ───────────────────────────────────────────────────
    this.iframe = document.createElement('iframe');
    this.iframe.className = 'browser-iframe';
    this.iframe.src = this.currentUrl;
    this.iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups');
    this.iframe.setAttribute('title', 'Browser preview');

    container.appendChild(toolbar);
    container.appendChild(this.iframe);
  }

  getContent(): string | undefined {
    return undefined;
  }

  isDirty(): boolean {
    return false;
  }

  focus(): void {
    this.urlInput?.focus();
  }

  resize(): void {
    /* noop — CSS flex handles layout */
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    if (this.iframe) {
      this.iframe.src = 'about:blank';
      this.iframe = null;
    }
    this.urlInput = null;
    this.container.innerHTML = '';
  }
}

export const browserTabPaneExtension: WebPaneExtension = {
  id: 'browser-tab',
  label: 'Browser',
  icon: 'globe',
  capabilities: ['preview'] as PaneCapability[],
  placement: 'tabs',

  canHandle(context: PaneContext): boolean | number {
    if (context?.path === BROWSER_TAB_PATH) return 100;
    return false;
  },

  mount(container: HTMLElement, context: PaneContext): PaneInstance {
    return new BrowserPaneInstance(container, context);
  },
};
