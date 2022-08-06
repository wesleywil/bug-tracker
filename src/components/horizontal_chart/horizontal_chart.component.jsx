import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import {
  data as horizontalData,
  options as horizontalOptions,
} from "../../examples chartjs/horizontal_bar";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalChart = () => {
  //Using Redux
  const res = useSelector((state) => state.bugs.bugs);

  const [chartData, setChartData] = useState(horizontalData);

  const Chart = () => {
    let frontData = [];
    let backData = [];

    const open = res.filter((item) => item.status_title == "Open");
    const in_progress = res.filter(
      (item) => item.status_title == "In Progress"
    );
    const reviewing = res.filter((item) => item.status_title == "Reviewing");
    const closed = res.filter((item) => item.status_title == "Closed");

    const frontOpen = open.filter((item) => item.tag_title == "FrontEnd");
    const frontInProgress = in_progress.filter(
      (item) => item.tag_title == "FrontEnd"
    );
    const frontReviewing = reviewing.filter(
      (item) => item.tag_title == "FrontEnd"
    );
    const frontClosed = closed.filter((item) => item.tag_title == "FrontEnd");

    const backOpen = open.filter((item) => item.tag_title == "Backend");
    const backInProgress = in_progress.filter(
      (item) => item.tag_title == "Backend"
    );
    const backReviewing = reviewing.filter(
      (item) => item.tag_title == "Backend"
    );
    const backClosed = closed.filter((item) => item.tag_title == "Backend");

    frontData = [
      frontOpen.length,
      frontInProgress.length,
      frontReviewing.length,
      frontClosed.length,
    ];
    backData = [
      backOpen.length,
      backInProgress.length,
      backReviewing.length,
      backClosed.length,
    ];
    const labels = ["Open", "In Progress", "Reviewing", "Closed"];
    setChartData({
      labels,
      datasets: [
        {
          label: "FrontEnd",
          data: frontData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.9)",
        },
        {
          label: "Backend",
          data: backData,
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.9)",
        },
      ],
    });
  };

  useEffect(() => {
    Chart();
  }, [res]);

  return (
    <div className="w-2/3">
      <Bar data={chartData} options={horizontalOptions} />
    </div>
  );
};

export default HorizontalChart;
