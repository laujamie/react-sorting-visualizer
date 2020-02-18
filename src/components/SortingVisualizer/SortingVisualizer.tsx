import React, { useEffect, useState, useCallback } from "react";
import "./SortingVisualizer.scss";

const SortingVisualizer: React.FC = props => {
  const [arr, setArr] = useState<number[]>([]);

  const getRandomArbitrary = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };

  const resetArray = useCallback(() => {
    let res: number[] = [];
    for (let i: number = 1; i < 200; i++) {
      let j = getRandomArbitrary(5, 500);
      res.push(j);
    }
    setArr(res);
  }, [setArr]);

  useEffect(() => {
    resetArray();
  }, [resetArray]);

  return (
    <div id="sorting-vis">
      {arr.map((x: number, id) => {
        return (
          <div className="bar" key={id} style={{ height: `${x}px` }}></div>
        );
      })}
    </div>
  );
};

export default SortingVisualizer;
