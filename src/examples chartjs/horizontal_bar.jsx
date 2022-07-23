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
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        color: "white",
      },
    },
    title: {
      display: true,
      text: "FrontEnd/Backend Bugs",
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

const labels = ["Open", "In Progress", "Reviewing", "Closed"];

export const data = {
  labels,
  datasets: [
    {
      label: "FrontEnd",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.9)",
    },
    {
      label: "Backend",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.9)",
    },
  ],
};
