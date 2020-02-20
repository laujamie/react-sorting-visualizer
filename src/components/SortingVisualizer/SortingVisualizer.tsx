import React, { useEffect, useState, useCallback } from "react";
import "./SortingVisualizer.scss";

const SortingVisualizer: React.FC = () => {
  const LOWERVAL = 5;
  const UPPERVAL = 550;
  let numVals = 150;
  const [arr, setArr] = useState<number[]>([]);

  const getRandomArbitrary = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  const resetArray = useCallback(() => {
    let res: number[] = [];
    for (let i: number = 1; i < numVals; i++) {
      let j = getRandomArbitrary(LOWERVAL, UPPERVAL);
      res.push(j);
    }
    setArr(res);
  }, [setArr, numVals, LOWERVAL, UPPERVAL]);

  useEffect(() => {
    resetArray();
  }, [resetArray]);

  return (
    <React.Fragment>
      <div id="sorting-vis">
        {arr.map((x: number, id) => {
          return (
            <div
              className="bar"
              key={id}
              style={{ height: `${(x / UPPERVAL) * 90}vh` }}
            ></div>
          );
        })}
      </div>
      <button onClick={resetArray}>Reset</button>
    </React.Fragment>
  );
};

export default SortingVisualizer;
