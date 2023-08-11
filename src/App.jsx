import { Calculator } from "components/Calculator";
import s from "./App.module.css";
export function App() {
  return (
    <div className={s.root}>
      <Calculator defaultA={2} defaultB={"3"} defaultOperator={"+"} />
    </div>
  );
}
