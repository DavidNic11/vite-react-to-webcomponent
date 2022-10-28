import { useState } from "react";
import { Button } from "../Button";

import { Header } from "../Header";

import styles from "./Counter.module.css";

export interface CounterProps {
  title: string;
}

export const Counter = ({ title }: CounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title={title} />
      <div className={styles["counter-container"]}>
        <Button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          label="Add One"
        />
        <h2 className={styles.count}>{count}</h2>
        <Button
          onClick={() => setCount((prevCount) => prevCount - 1)}
          label="Sub One"
        />
      </div>
    </div>
  );
};
