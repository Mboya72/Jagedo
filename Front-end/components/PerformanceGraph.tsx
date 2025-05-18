// components/PerformanceGraph.tsx
"use client";

import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "Performance",
    data: [
      { x: "Jan", y: 12 },
      { x: "Feb", y: 19 },
      { x: "Mar", y: 23 },
      { x: "Apr", y: 17 },
      { x: "May", y: 29 },
      { x: "Jun", y: 34 },
    ],
  },
];

const PerformanceGraph = () => (
  <div style={{ height: 400 }}>
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 40, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: false,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Month",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Jobs Completed",
        legendOffset: -50,
        legendPosition: "middle",
      }}
      colors={{ scheme: "category10" }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      enableArea={true}
      areaBaselineValue={0}
      useMesh={true}
      theme={{
        text: { fill: "#333" },
        axis: {
          ticks: {
            text: { fontSize: 12, fill: "#555" },
          },
        },
      }}
    />
  </div>
);

export default PerformanceGraph;
