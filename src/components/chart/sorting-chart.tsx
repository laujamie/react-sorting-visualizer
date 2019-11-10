import React, { Component } from "react";
import Chart from "chart.js";

export default class SortingChart extends Component {
  private chartRef = React.createRef<HTMLCanvasElement>();

  componentDidMount() {
    let myChartRef = null;
    if (this.chartRef && this.chartRef.current) {
      myChartRef = this.chartRef.current.getContext("2d");
    }
    if (myChartRef) {
      new Chart(myChartRef, {
        type: "bar",
        data: {
          labels: ["Jan", "Feb"],
          datasets: [
            {
              label: "Sales",
              data: [50, 87]
            }
          ]
        },
        options: {
          // Customize
        }
      });
    }
  }
  render() {
    return (
      <div className="chart">
        <canvas id="myChart" ref={this.chartRef}></canvas>
      </div>
    );
  }
}
