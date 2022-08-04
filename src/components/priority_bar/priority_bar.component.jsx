import { useEffect, useState } from "react";
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
  data as priorityData,
  options as priorityOptions,
} from "../../examples chartjs/priority_vertical_bar";

import { Bar } from "react-chartjs-2";
import { allBugs } from "../../server/bugs_table";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const PriorityBar = () => {
  const [chartData, setChartData] = useState(priorityData);
  const Chart = () => {
    let highData = [];
    let normalData = [];
    let lowData = [];

    allBugs()
      .then((res) => {
        const high = res.filter(
          (item) =>
            item.priority_title == "High" &&
            item.bug_add_date.slice(5, 7) == "07"
        );
        const normal = res.filter(
          (item) =>
            item.priority_title == "Normal" &&
            item.bug_add_date.slice(5, 7) == "07"
        );
        const low = res.filter(
          (item) =>
            item.priority_title == "Low" &&
            item.bug_add_date.slice(5, 7) == "07"
        );

        highData = [high.length];
        normalData = [normal.length];
        lowData = [low.length];
      })
      .then(() => {
        const labels = [
          "This Month August -> Showing only July just for reference",
        ];
        setChartData({
          labels,
          datasets: [
            {
              label: "High",
              data: highData,
              backgroundColor: "rgba(255, 99, 132, 1)",
            },
            {
              label: "Normal",
              data: normalData,
              backgroundColor: " rgba(255, 206, 86, 1)",
            },
            {
              label: "Low",
              data: lowData,
              backgroundColor: "rgba(56, 132, 255, 1)",
            },
          ],
        });
      });
  };

  useEffect(() => {
    Chart();
  }, []);

  return (
    <div className="w-2/3">
      <Bar options={priorityOptions} data={chartData} />
    </div>
  );
};

export default PriorityBar;