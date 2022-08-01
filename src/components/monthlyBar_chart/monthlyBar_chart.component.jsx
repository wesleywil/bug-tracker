import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
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
  data as monthlyVerticalData,
  options,
} from "../../examples chartjs/monthly_vertical_bar";
import { allBugs } from "../../server/bugs_table";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const MonthlyBarChart = () => {
  const [chartData, setChartData] = useState(monthlyVerticalData);

  const Chart = () => {
    let openData = [];
    let reviewData = [];
    let inprogressData = [];
    let closedData = [];
    allBugs()
      .then((res) => {
        console.log(res[0].bug_add_date.slice(5, 7));
        const jan = res.filter(
          (item) =>
            item.bug_add_date.slice(0, 4) == "2022" &&
            item.bug_add_date.slice(5, 7) == "01"
        );
        const feb = res.filter(
          (item) =>
            item.bug_add_date.slice(0, 4) == "2022" &&
            item.bug_add_date.slice(5, 7) == "02"
        );
        const march = res.filter(
          (item) =>
            item.bug_add_date.slice(0, 4) == "2022" &&
            item.bug_add_date.slice(5, 7) == "03"
        );
        const apr = res.filter(
          (item) =>
            item.bug_add_date.slice(0, 4) == "2022" &&
            item.bug_add_date.slice(5, 7) == "04"
        );
        const may = res.filter(
          (item) =>
            item.bug_add_date.slice(0, 4) == "2022" &&
            item.bug_add_date.slice(5, 7) == "05"
        );
        const jun = res.filter(
          (item) =>
            item.bug_add_date.slice(0, 4) == "2022" &&
            item.bug_add_date.slice(5, 7) == "06"
        );
        const july = res.filter(
          (item) =>
            item.bug_add_date.slice(0, 4) == "2022" &&
            item.bug_add_date.slice(5, 7) == "07"
        );
        const aug = res.filter(
          (item) =>
            item.bug_add_date.slice(0, 4) == "2022" &&
            item.bug_add_date.slice(5, 7) == "08"
        );
        const sep = res.filter(
          (item) =>
            item.bug_add_date.slice(0, 4) == "2022" &&
            item.bug_add_date.slice(5, 7) == "09"
        );
        const oct = res.filter(
          (item) =>
            item.bug_add_date.slice(0, 4) == "2022" &&
            item.bug_add_date.slice(5, 7) == "10"
        );
        const nov = res.filter(
          (item) =>
            item.bug_add_date.slice(0, 4) == "2022" &&
            item.bug_add_date.slice(5, 7) == "11"
        );
        const dec = res.filter(
          (item) =>
            item.bug_add_date.slice(0, 4) == "2022" &&
            item.bug_add_date.slice(5, 7) == "12"
        );

        const janOpen = jan.filter((item) => item.status_title == "Open");
        const janInProgress = jan.filter(
          (item) => item.status_title == "In Progress"
        );
        const janReviewing = jan.filter(
          (item) => item.status_title == "Reviewing"
        );
        const janClosed = jan.filter((item) => item.status_title == "Closed");

        const febOpen = feb.filter((item) => item.status_title == "Open");
        const febInProgress = feb.filter(
          (item) => item.status_title == "In Progress"
        );
        const febReviewing = feb.filter(
          (item) => item.status_title == "Reviewing"
        );
        const febClosed = feb.filter((item) => item.status_title == "Closed");

        const marchOpen = march.filter((item) => item.status_title == "Open");
        const marchInProgress = march.filter(
          (item) => item.status_title == "In Progress"
        );
        const marchReviewing = march.filter(
          (item) => item.status_title == "Reviewing"
        );
        const marchClosed = march.filter(
          (item) => item.status_title == "Closed"
        );

        const aprOpen = apr.filter((item) => item.status_title == "Open");
        const aprInProgress = apr.filter(
          (item) => item.status_title == "In Progress"
        );
        const aprReviewing = apr.filter(
          (item) => item.status_title == "Reviewing"
        );
        const aprClosed = apr.filter((item) => item.status_title == "Closed");

        const mayOpen = may.filter((item) => item.status_title == "Open");
        const mayInProgress = may.filter(
          (item) => item.status_title == "In Progress"
        );
        const mayReviewing = may.filter(
          (item) => item.status_title == "Reviewing"
        );
        const mayClosed = may.filter((item) => item.status_title == "Closed");

        const junOpen = jun.filter((item) => item.status_title == "Open");
        const junInProgress = jun.filter(
          (item) => item.status_title == "In Progress"
        );
        const junReviewing = jun.filter(
          (item) => item.status_title == "Reviewing"
        );
        const junClosed = jun.filter((item) => item.status_title == "Closed");

        const julyOpen = july.filter((item) => item.status_title == "Open");
        const julyInProgress = july.filter(
          (item) => item.status_title == "In Progress"
        );
        const julyReviewing = july.filter(
          (item) => item.status_title == "Reviewing"
        );
        const julyClosed = july.filter((item) => item.status_title == "Closed");

        const augOpen = aug.filter((item) => item.status_title == "Open");
        const augInProgress = aug.filter(
          (item) => item.status_title == "In Progress"
        );
        const augReviewing = aug.filter(
          (item) => item.status_title == "Reviewing"
        );
        const augClosed = aug.filter((item) => item.status_title == "Closed");

        const sepOpen = sep.filter((item) => item.status_title == "Open");
        const sepInProgress = sep.filter(
          (item) => item.status_title == "In Progress"
        );
        const sepReviewing = sep.filter(
          (item) => item.status_title == "Reviewing"
        );
        const sepClosed = sep.filter((item) => item.status_title == "Closed");

        const octOpen = oct.filter((item) => item.status_title == "Open");
        const octInProgress = oct.filter(
          (item) => item.status_title == "In Progress"
        );
        const octReviewing = oct.filter(
          (item) => item.status_title == "Reviewing"
        );
        const octClosed = oct.filter((item) => item.status_title == "Closed");

        const novOpen = nov.filter((item) => item.status_title == "Open");
        const novInProgress = nov.filter(
          (item) => item.status_title == "In Progress"
        );
        const novReviewing = nov.filter(
          (item) => item.status_title == "Reviewing"
        );
        const novClosed = nov.filter((item) => item.status_title == "Closed");

        const decOpen = dec.filter((item) => item.status_title == "Open");
        const decInProgress = dec.filter(
          (item) => item.status_title == "In Progress"
        );
        const decReviewing = dec.filter(
          (item) => item.status_title == "Reviewing"
        );
        const decClosed = dec.filter((item) => item.status_title == "Closed");

        openData = [
          janOpen.length,
          febOpen.length,
          marchOpen.length,
          aprOpen.length,
          mayOpen.length,
          junOpen.length,
          julyOpen.length,
          augOpen.length,
          sepOpen.length,
          octOpen.length,
          novOpen.length,
          decOpen.length,
        ];
        inprogressData = [
          janInProgress.length,
          febInProgress.length,
          marchInProgress.length,
          aprInProgress.length,
          mayInProgress.length,
          junInProgress.length,
          julyInProgress.length,
          augInProgress.length,
          sepInProgress.length,
          octInProgress.length,
          novInProgress.length,
          decInProgress.length,
        ];
        reviewData = [
          janReviewing.length,
          febReviewing.length,
          marchReviewing.length,
          aprReviewing.length,
          mayReviewing.length,
          junReviewing.length,
          julyReviewing.length,
          augReviewing.length,
          sepReviewing.length,
          octReviewing.length,
          novReviewing.length,
          decReviewing.length,
        ];
        closedData = [
          janClosed.length,
          febClosed.length,
          marchClosed.length,
          aprClosed.length,
          mayClosed.length,
          junClosed.length,
          julyClosed.length,
          augClosed.length,
          sepClosed.length,
          octClosed.length,
          novClosed.length,
          decClosed.length,
        ];
      })
      .then(() => {
        const labels = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        setChartData({
          labels,
          datasets: [
            {
              label: "Open",
              data: openData,
              backgroundColor: "rgba(75, 192, 192, 1)",
            },
            {
              label: "Reviewing",
              data: reviewData,
              backgroundColor: "rgba(56, 132, 255, 1)",
            },
            {
              label: "In Progress",
              data: inprogressData,
              backgroundColor: "rgba(255, 206, 86, 1)",
            },
            {
              label: "Closed",
              data: closedData,
              backgroundColor: "rgba(255, 99, 132, 1)",
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
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default MonthlyBarChart;
