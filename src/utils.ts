export const isFullObject = (item: unknown): item is Record<string, any> =>
  typeof item === "object" &&
  !Array.isArray(item) &&
  item !== null &&
  Object.keys(item).length > 0;

export const isFullArray = (item: unknown): item is unknown[] =>
  Array.isArray(item) && item.length > 0;

export const ARRAY_BRACES = ["[", "]"];
export const OBJECT_BRACES = ["{", "}"];
export const RIGHT = "▶";
export const DOWN = "▼";
export const collapsedObject = (len: number): string =>
  `{${".".repeat(Math.min(len, 3))}}`;
export const collapsedArray = (len: number): string =>
  `[${".".repeat(Math.min(len, 3))}]`;
export const NEW_LINE = "\n";

const INDENT_SIZE = 2;
export const indent = (n: number): string => " ".repeat(n * INDENT_SIZE);
export const stringifyKey = (key: string): string => `${JSON.stringify(key)}: `;
