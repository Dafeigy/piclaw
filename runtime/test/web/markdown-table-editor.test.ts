import { expect, test } from "bun:test";
import {
  deleteTableColumn,
  deleteTableRow,
  escapeMarkdownTableCell,
  insertTableColumn,
  insertTableRow,
  normalizeTableModel,
  parseMarkdownTableLines,
  parseTableAlignments,
  serializeMarkdownTable,
  setTableColumnAlignment,
  splitMarkdownTableRow,
} from "../../extensions/viewers/editor/markdown/table-editor.ts";

test("editable table parser preserves escaped pipes as cell text", () => {
  expect(splitMarkdownTableRow("| Alpha | a\\|b | tail |")).toEqual(["Alpha", "a|b", "tail"]);
});

test("editable table parser detects delimiter alignment", () => {
  expect(parseTableAlignments("| :--- | :---: | ---: |")).toEqual(["left", "center", "right"]);
});

test("editable table parser normalizes uneven rows", () => {
  const model = parseMarkdownTableLines([
    "| Name | Count | Notes |",
    "| --- | ---: | :--- |",
    "| Alpha | 10 | a\\|b |",
    "| Short | only two |",
  ]);

  expect(model).toEqual({
    header: ["Name", "Count", "Notes"],
    alignments: ["left", "right", "left"],
    rows: [
      ["Alpha", "10", "a|b"],
      ["Short", "only two", ""],
    ],
  });
});

test("editable table serializer escapes pipes and normalizes markdown", () => {
  expect(serializeMarkdownTable({
    header: ["Name", "Notes"],
    alignments: ["left", "right"],
    rows: [["Alpha", "a|b"], ["Beta", "multi\nline"]],
  })).toBe([
    "| Name | Notes |",
    "| --- | ---: |",
    "| Alpha | a\\|b |",
    "| Beta | multi line |",
  ].join("\n"));
});

test("editable table normalization pads headers and rows to the widest row", () => {
  expect(normalizeTableModel({
    header: ["A"],
    alignments: ["center"],
    rows: [["1", "2", "3"]],
  })).toEqual({
    header: ["A", "Column 2", "Column 3"],
    alignments: ["center", "left", "left"],
    rows: [["1", "2", "3"]],
  });
});

test("editable table cell escaping is idempotent for plain cells", () => {
  expect(escapeMarkdownTableCell(" plain ")).toBe("plain");
  expect(escapeMarkdownTableCell("a|b")).toBe("a\\|b");
});

test("editable table row mutation preserves width", () => {
  const model = normalizeTableModel({
    header: ["A", "B"],
    alignments: ["left", "right"],
    rows: [["1", "2"], ["3", "4"]],
  });

  expect(insertTableRow(model, 0).rows).toEqual([["1", "2"], ["", ""], ["3", "4"]]);
  expect(deleteTableRow(model, 0).rows).toEqual([["3", "4"]]);
  expect(deleteTableRow({ ...model, rows: [["1", "2"]] }).rows).toEqual([["1", "2"]]);
});

test("editable table column alignment mutation updates delimiter serialization", () => {
  const model = setTableColumnAlignment({
    header: ["A", "B"],
    alignments: ["left", "right"],
    rows: [["1", "2"]],
  }, 0, "center");

  expect(model.alignments).toEqual(["center", "right"]);
  expect(serializeMarkdownTable(model).split("\n")[1]).toBe("| :---: | ---: |");
});

test("editable table column mutation preserves alignment and rows", () => {
  const model = normalizeTableModel({
    header: ["A", "B"],
    alignments: ["left", "right"],
    rows: [["1", "2"]],
  });

  expect(insertTableColumn(model, 0)).toEqual({
    header: ["A", "Column 2", "B"],
    alignments: ["left", "left", "right"],
    rows: [["1", "", "2"]],
  });
  expect(deleteTableColumn(model, 0)).toEqual({
    header: ["B"],
    alignments: ["right"],
    rows: [["2"]],
  });
  expect(deleteTableColumn({ header: ["A"], alignments: ["center"], rows: [["1"]] })).toEqual({
    header: ["A"],
    alignments: ["center"],
    rows: [["1"]],
  });
});
