import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { data as doughnutData, options } from "../../examples chartjs/doughnut";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = () => {
  // Using Redux
  const bugs = useSelector((state) => state.bugs.bugs);

  const [chartData, setChartData] = useState(doughnutData);

  const Chart = () => {
    let data = [];
    const open = bugs.filter((item) => item.status_title == "Open");
    const in_progress = bugs.filter(
      (item) => item.status_title == "In Progress"
    );
    const reviewing = bugs.filter((item) => item.status_title == "Reviewing");
    const closed = bugs.filter((item) => item.status_title == "Reviewing");
    data = [closed.length, reviewing.length, in_progress.length, open.length];
    setChartData({
      labels: ["Closed", "Reviewing", "In Progress", "Open"],
      datasets: [
        {
          label: "# of Votes",
          data: data,
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
    });
  };

  useEffect(() => {
    Chart();
  }, [bugs]);

  return (
    <div className="w-1/3">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DoughnutChart;
