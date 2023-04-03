import { Fragment } from "react";
import { CollapseArrow } from "./CollapseArrow";
import {
  EMPTY_ARR,
  EMPTY_OBJ,
  isFullArray,
  isFullObject,
  NEW_LINE,
  spaces
} from "./utils";

const JsonObjectOrArray = ({
  json,
  level
}: {
  json: Record<string, any> | unknown[];
  level: number;
}) => {
  const isArray = Array.isArray(json);
  const keys = isArray
    ? json.map((_, i) => JSON.stringify(i))
    : Object.keys(json);

  const [openBrace, closeBrace] = isArray ? ["[", "]"] : ["{", "}"];

  return (
    <CollapseArrow
      fallback={isArray ? EMPTY_ARR(keys.length) : EMPTY_OBJ(keys.length)}
    >
      {openBrace}
      {NEW_LINE}
      {keys.map((key, i) => (
        <Fragment key={i}>
          {spaces(level * 2)}
          {JSON.stringify(key)}:{" "}
          {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
          <JsonRenderer json={json[key]} level={level + 1} />
          {keys.indexOf(key) < keys.length - 1 ? "," : ""}
          {NEW_LINE}
        </Fragment>
      ))}
      {spaces((level - 2) * 2)}
      {closeBrace}
    </CollapseArrow>
  );
};

export const JsonRenderer = ({
  json,
  level = 1
}: {
  json: Record<string, any> | unknown;
  level?: number;
}): JSX.Element =>
  isFullObject(json) || isFullArray(json) ? (
    <JsonObjectOrArray json={json} level={level + 1} />
  ) : (
    <>{JSON.stringify(json)}</>
  );
