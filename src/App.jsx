import { Calculator } from "components/Calculator/Calculator";
import { RandomUser } from "components/RandomUser/RandomUser";
import s from "./App.module.css";
export function App() {
  return (
    <div className={s.root}>
      {/* <Calculator defaultA={5} defaultB={5} defaultOperator={"x"} /> */}
      <RandomUser />
    </div>
  );
}
