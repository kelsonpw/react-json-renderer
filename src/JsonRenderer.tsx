import { Fragment } from "react";
import { CollapseArrow } from "./CollapseArrow";
import {
  collapsedObject,
  collapsedArray,
  isFullArray,
  isFullObject,
  NEW_LINE,
  indent,
  ARRAY_BRACES,
  OBJECT_BRACES,
} from "./utils";

type Props = {
  json: Record<string, any> | unknown[];
  level?: number;
};

export function JsonRenderer(props: Props) {
  const { json, level = 1 } = props;

  if (!isFullObject(json) && !isFullArray(json)) {
    return <>{JSON.stringify(json)}</>;
  }

  return <JsonObjectOrArray json={json} level={level + 1} />;
}

function JsonObjectOrArray(props: Props & { level: number }) {
  const { json, level } = props;

  const isArray = Array.isArray(json);
  const keys = isArray
    ? json.map((_, i) => JSON.stringify(i))
    : Object.keys(json);

  const [openBrace, closeBrace] = isArray ? ARRAY_BRACES : OBJECT_BRACES;

  const renderKey = (key: string) => `${JSON.stringify(key)}: `;

  const renderMaybeComma = (key: string) =>
    keys.indexOf(key) < keys.length - 1 ? "," : "";

  const fallback = isArray
    ? collapsedArray(keys.length)
    : collapsedObject(keys.length);

  return (
    <CollapseArrow fallback={fallback}>
      {openBrace}
      {NEW_LINE}
      {keys.map((key, i) => (
        <Fragment key={i}>
          {indent(level)}
          {renderKey(key)}
          <JsonRenderer
            json={isArray ? json.at(Number(key)) : json[key]}
            level={level + 1}
          />
          {renderMaybeComma(key)}
          {NEW_LINE}
        </Fragment>
      ))}
      {indent(Math.max(0, level - 2))}
      {closeBrace}
    </CollapseArrow>
  );
}
