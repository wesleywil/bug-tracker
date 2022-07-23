import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "white",
      },
    },
    title: {
      display: true,
      text: "Bug Priority from This Month",
      color: "white",
    },
  },
  scales: {
    y: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "grey",
      },
    },
    x: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "grey",
      },
    },
  },
};

const labels = ["This Month"];

export const data = {
  labels,
  datasets: [
    {
      label: "High",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
    {
      label: "Normal",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: " rgba(255, 206, 86, 1)",
    },
    {
      label: "Low",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(56, 132, 255, 1)",
    },
  ],
};
