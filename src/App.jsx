import { Calculator } from "components/Calculator";
import s from "./App.module.css";
export function App() {
  return (
    <div className={s.root}>
      <Calculator defaultB={"17.1"} defaultOperator={"-"} />
    </div>
  );
}
