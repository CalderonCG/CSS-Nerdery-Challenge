import { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./Chart.scss";

type DataType = {
  name: string;
  value: number;
};
const data: DataType[] = [
  { name: "Files", value: 200 },
  { name: "Videos", value: 125 },
  { name: "Pictures", value: 75 },
  { name: "Available", value: 50 },
];

function Chart() {
  //Chart setup--------------------------------------------------------------------------------------------
  const chartRef = useRef<SVGSVGElement | null>(null); // Reference for chart

  useEffect(() => {
    //svg container
    const w = 175;
    const h = 175;
    const radius = w / 2;
    const innerRadius = radius - 10;
    const svg = d3.select(chartRef.current).attr("width", w).attr("height", h);

    //center svg
    const g = svg
      .append("g")
      .attr("transform", `translate(${w / 2}, ${h / 2})`);

    //generating chart
    const chartData = d3.pie().value((d: DataType) => d.value)(data);
    const chartArc = d3
      .arc()
      .cornerRadius(10)
      .padAngle(0.1)
      .innerRadius(innerRadius)
      .outerRadius(radius);

    //mapping svg
    g.selectAll()
      .data(chartData)
      .join("path")
      .attr("d", chartArc)
      .attr("fill", (d) =>
        d.data.name === "Files"
          ? "#FF9F00"
          : d.data.name === "Videos"
          ? "#689FF8"
          : d.data.name === "Pictures"
          ? "#4AC29D"
          : "#BCBECA"
      );
  }, []);

  return (
    <div className="chart">
      <svg ref={chartRef} />
      <div className="chart_used">
        <p className="chart_used_percentage">
          85<span className="chart_used_percentage_symbol">%</span>
        </p>
        <p className="chart_used_label">Used</p>
      </div>

    </div>
  );
}

export default Chart;
