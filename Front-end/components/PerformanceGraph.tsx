// components/PerformanceGraph.tsx
"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PerformanceGraph = () => {
  const data = {
    labels: ["Requests", "Quotations", "Active", "Completed", "Reviews"],
    datasets: [
      {
        label: "Workflow Performance",
        data: [12, 5, 3, 20, 8],
        borderColor: "#E31937",
        backgroundColor: "#E31937",
        fill: false,
        tension: 0.4, // Smooth curved lines
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Total User Workflow Over Time",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PerformanceGraph;
