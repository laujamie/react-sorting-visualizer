import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

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
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={props.data}>
        <Bar dataKey="val" fill="#FF9800"></Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SortingChart;
