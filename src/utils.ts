export const isObjectWithKeys = (item: unknown): item is Record<string, any> =>
  typeof item === "object" &&
  !Array.isArray(item) &&
  item !== null &&
  Object.keys(item).length > 0;

export const isArrayWithValues = (item: unknown): item is unknown[] =>
  Array.isArray(item) && item.length > 0;

export const ARRAY_BRACES = ["[", "]"];
export const OBJECT_BRACES = ["{", "}"];
export const RIGHT_ARROW = "▶";
export const DOWN_ARROW = "▼";
export const NEW_LINE = "\n";

export const INDENT_SIZE = 2;
export const indent = (n: number): string => " ".repeat(n * INDENT_SIZE);
