import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { PieArcDatum } from "d3-shape";
import "./Chart.scss";
import type { DataType } from "../Storage/Storage";

type ChartProps = {
  data: DataType[];
};

function Chart({ data }: ChartProps) {
  const chartRef = useRef<SVGSVGElement | null>(null); // Reference for chart


  useEffect(() => {
    if (!chartRef.current) return;

    //svg container
    const w = 175;
    const h = 175;
    const radius = w / 2;
    const innerRadius = radius - 10;

    // Cleans reference to avoid rerenders
    d3.select(chartRef.current).selectAll("*").remove();

    //Defines svg with values
    const svg = d3.select(chartRef.current).attr("width", w).attr("height", h);

    //Center svg in container
    const g = svg
      .append("g")
      .attr("transform", `translate(${w / 2}, ${h / 2})`);

    //Generating chart
    const chartData = d3.pie<DataType>().value((d) => d.value)(data);

    //Chart properties
    //MAkes it a pie chart and adds rounding to values
    const chartArc = d3
      .arc<PieArcDatum<DataType>>()
      .cornerRadius(10)
      .padAngle(0.1)
      .innerRadius(innerRadius)
      .outerRadius(radius);

    //Mapping svg data and assign colors
    g.selectAll("path")
      .data(chartData)
      .join("path")
      .attr("d", (d: PieArcDatum<DataType>) => chartArc(d)!) 
      .attr("fill", (d: PieArcDatum<DataType>) =>
        d.data.name === "Documents"
          ? "#FF9F00"
          : d.data.name === "Videos"
          ? "#689FF8"
          : d.data.name === "Pictures"
          ? "#4AC29D"
          : "#BCBECA"
      );
  }, [data]);

  return (
    <div className="chart">
      {/* Calling chart */}
      <svg ref={chartRef} />

      {/* Circle inside the chart */}
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
