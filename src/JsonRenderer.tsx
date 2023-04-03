import { Fragment } from "react";
import { CollapseArrow } from "./CollapseArrow";
import {
  isArrayWithValues,
  isObjectWithKeys,
  NEW_LINE,
  indent,
  ARRAY_BRACES,
  OBJECT_BRACES,
} from "./utils";

type Props = {
  json: any;
  level?: number;
};

/**
 * Main JSON rendering component that handles rendering JSON data in a collapsible tree structure.
 * Automatically detects whether the given JSON data is an object or an array and delegates the rendering
 * to the appropriate component.
 * @param props - The component properties.
 * @param props.json - The JSON data to render.
 * @param props.level - The indentation level.
 * @returns {JSX.Element} The rendered JSON data in a collapsible tree structure.
 */
export function JsonRenderer(props: Props): JSX.Element {
  const { json, level = 1 } = props;

  if (isArrayWithValues(json) || isObjectWithKeys(json)) {
    return <JsonObjectOrArray json={json} level={level + 1} />;
  }

  return <>{JSON.stringify(json)}</>;
}

type JsonObjectOrArrayProps = {
  json: Record<string, unknown> | unknown[];
  level: number;
};
/**
 * Internal component responsible for rendering either a JSON object or a JSON array with the appropriate
 * formatting and indentation. Utilizes the CollapseArrow component to enable collapsing and expanding of
 * nested structures.
 * @param props.json - The JSON data to render.
 * @param props.level - The indentation level.
 * @returns {JSX.Element} The rendered JSON object or array.
 */
function JsonObjectOrArray(props: JsonObjectOrArrayProps): JSX.Element {
  const { json, level } = props;

  const isArray = Array.isArray(json);
  const keys = isArray
    ? json.map((_, i) => JSON.stringify(i))
    : Object.keys(json);

  const [openBrace, closeBrace] = isArray ? ARRAY_BRACES : OBJECT_BRACES;

  const renderMaybeComma = (key: string) =>
    keys.indexOf(key) < keys.length - 1 ? "," : "";

  return (
    <CollapseArrow fallback={`${openBrace}${".".repeat(Math.min(keys.length, 3))}${closeBrace}`}>
      {openBrace}
      {NEW_LINE}
      {keys.map((key, i) => (
        <Fragment key={i}>
          {indent(level)}
          {`${JSON.stringify(key)}: `}
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
