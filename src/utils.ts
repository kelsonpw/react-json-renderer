export const isFullObject = (item: unknown): item is Record<string, any> =>
  typeof item === "object" &&
  !Array.isArray(item) &&
  item !== null &&
  Object.keys(item).length > 0;

export const isFullArray = (item: unknown): item is unknown[] =>
  Array.isArray(item) && item.length > 0;

export const RIGHT = "▶";
export const DOWN = "▼";
export const EMPTY_OBJ = (len: number): string =>
  `{${".".repeat(Math.min(len, 3))}}`;
export const EMPTY_ARR = (len: number): string =>
  `[${".".repeat(Math.min(len, 3))}]`;
export const NEW_LINE = "\n";

export const spaces = (n: number): string => " ".repeat(n);
