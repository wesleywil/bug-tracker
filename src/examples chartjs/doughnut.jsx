import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Closed", "Reviewing", "In Progress", "Open"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 8, 4, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(56, 132, 255, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(56, 132, 255, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
    },
  },
};
