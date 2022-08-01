import { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { data as doughnutData, options } from "../../examples chartjs/doughnut";

import { allBugs } from "../../server/bugs_table";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = () => {
  const [chartData, setChartData] = useState(doughnutData);

  const Chart = () => {
    let data = [];
    allBugs()
      .then((res) => {
        const open = res.filter((item) => item.status_title == "Open");
        const in_progress = res.filter(
          (item) => item.status_title == "In Progress"
        );
        const reviewing = res.filter(
          (item) => item.status_title == "Reviewing"
        );
        const closed = res.filter((item) => item.status_title == "Closed");
        data = [
          closed.length,
          reviewing.length,
          in_progress.length,
          open.length,
        ];
        console.log("ARRAY", data);
      })
      .then(() => {
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
      });
  };

  useEffect(() => {
    Chart();
  }, []);

  return (
    <div className="w-1/3">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DoughnutChart;
