import { data1, data2, data3 } from "./data";
import { JsonRenderer } from "./JsonRenderer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <pre>
        <JsonRenderer json={data1} />
      </pre>
      <pre>
        <JsonRenderer json={data2} />
      </pre>
      <pre>
        <JsonRenderer json={data3} />
      </pre>
    </div>
  );
}
