import { Counter } from "components/Counter/Counter";
import { RandomUser } from "components/RandomUser/RandomUser";
import { Calculator } from "components/Calculator/Calculator";
import s from "./App.module.css";
import { useState } from "react";
export function App() {
  return (
    <div className={s.root}>
      <Calculator />
    </div>
  );
}
