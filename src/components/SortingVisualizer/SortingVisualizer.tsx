import React, { useEffect, useState, useCallback } from "react";
import "./SortingVisualizer.scss";

import { bubbleSortAnimations } from "../SortingAlgorithms/BubbleSort/BubbleSort";

const SortingVisualizer: React.FC = () => {
  let numVals = 50;
  const LOWER_VAL = 5;
  const UPPER_VAL = 550;
  const ANIM_LENGTH = 20;

  const PRIMARY_COLOR = "#ffbe31";
  const SECCONDARY_COLOR = "#3172ff";
  const COMPLETED_COLOR = "#72ff31";
  const [arr, setArr] = useState<number[]>([]);

  const getRandomArbitrary = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const bubbleSort = (): void => {
    const animations = bubbleSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const CHANGECOLOR = i % 3 !== 1;
      const BARS = document.getElementsByClassName("bar") as HTMLCollectionOf<
        HTMLElement
      >;
      if (CHANGECOLOR) {
        const [barOneId, barTwoId] = animations[i];
        const barOneStyles = BARS[barOneId].style;
        const barTwoStyles = BARS[barTwoId].style;
        const col = i % 3 === 0 ? SECCONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyles.backgroundColor = col;
          barTwoStyles.backgroundColor = col;
        }, i * ANIM_LENGTH);
      } else {
        const [barOneId, barTwoId] = animations[i];
        const barOneStyles = BARS[barOneId].style;
        const barTwoStyles = BARS[barTwoId].style;
        setTimeout(() => {
          if (barOneId > barTwoId) {
            [barOneStyles.height, barTwoStyles.height] = [
              barTwoStyles.height,
              barOneStyles.height
            ];
          }
        }, i * ANIM_LENGTH);
      }
    }
    setTimeout(() => {
      setArr(arr.sort());
      const BARS = document.getElementsByClassName("bar") as HTMLCollectionOf<
        HTMLElement
      >;
      for (let i = 0; i < BARS.length; i++) {
        BARS[i].style.backgroundColor = COMPLETED_COLOR;
      }
    }, animations.length * ANIM_LENGTH);
  };

  const resetArray = useCallback(() => {
    let res: number[] = [];
    for (let i: number = 1; i < numVals; i++) {
      let j = getRandomArbitrary(LOWER_VAL, UPPER_VAL);
      res.push(j);
    }
    setArr(res);
  }, [setArr, numVals, LOWER_VAL, UPPER_VAL]);

  useEffect(() => {
    resetArray();
  }, [resetArray]);

  return (
    <React.Fragment>
      <div className="sorting-visualizer">
        {arr.map((x: number, id) => {
          return (
            <div
              className="bar"
              key={id}
              style={{
                height: `${(x / UPPER_VAL) * 90}vh`,
                backgroundColor: PRIMARY_COLOR
              }}
            ></div>
          );
        })}
      </div>
      <button onClick={resetArray}>Reset</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
    </React.Fragment>
  );
};

export default SortingVisualizer;
