import { JsonRenderer } from "./JsonRenderer";
import "./styles.css";

const block1 = {
  prop1: "hello",
  prop2: "there",
  prop3: true,
  prop4: 12.4,
};

const block2 = {
  prop1: "hello",
  prop2: "there",
  prop3: true,
  prop4: 12.4,
  prop5: block1,
  prop6: {
    block1,
    prop7: {
      hello: "hi",
      there: 7,
    },
  },
};

const block3 = {
  prop1: "hello",
  prop2: "there",
  prop3: {},
  prop4: 12.4,
  prop5: block1,
  blal: [1],
  prop6: ["cat", "dog"],
  prop62: ["cat", "dog"],
  prop7: [],
  prop8: {
    prop5: block1,
    prop6: ["cat", "dog", "bear", 168.01, block1, [block1]],
  },
};

export default function App() {
  return (
    <div className="App">
      <pre>
        <JsonRenderer json={block3} />
      </pre>
    </div>
  );
}
