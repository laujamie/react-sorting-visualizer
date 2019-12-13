import React from "react";
import { BarChart, Bar } from "recharts";

export interface BarData extends Object {
  key?: number;
  val: number;
}

interface SortingChartProps extends Object {
  data: Array<BarData>;
}

const SortingChart: React.FC<SortingChartProps> = (
  props: SortingChartProps
) => {
  return (
    <BarChart width={500} height={300} data={props.data}>
      <Bar dataKey="val" fill="#FF9800"></Bar>
    </BarChart>
  );
};

export default SortingChart;
