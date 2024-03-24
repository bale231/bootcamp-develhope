import "./App.css";
import { Counter } from "./Counter";

export function App() {
  return (
    <>
      <Counter initialValue={0} incrementAmount={1} />
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}
