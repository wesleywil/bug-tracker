import { useEffect, useState } from "react";
import { Doughnut, Bar } from "react-chartjs-2";

import {
  data as horizontalData,
  options as horizontalOptions,
} from "../../examples chartjs/horizontal_bar";

import {
  data as priorityData,
  options as priorityOptions,
} from "../../examples chartjs/priority_vertical_bar";

import TableBugs from "../../components/table_bugs/table_bugs.component";
import DoughnutChart from "../../components/doughnut_chart/doughnut_chart.component";
import MonthlyBarChart from "../../components/monthlyBar_chart/monthlyBar_chart.component";
import HorizontalChart from "../../components/horizontal_chart/horizontal_chart.component";
import PriorityBar from "../../components/priority_bar/priority_bar.component";

import { selectLast3Bugs } from "../../server/bugs_table";

const Main = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    selectLast3Bugs().then((res) => {
      setBugs(res);
    });
  }, []);

  return (
    <div className="p-2 bg-slate-900/90">
      <div>
        <div className="textbg-slate-800 border-2 p-2 rounded-xl">
          <h1 className=" text-3xl text-white font-semibold text-center border-b-2">
            Bugs
          </h1>
          {/* Charts */}
          <div className="flex gap-2 border-2 p-2 m-2">
            <DoughnutChart />
            <MonthlyBarChart />
          </div>
          <div className="flex flex-col place-items-center gap-2 border-2 p-2 m-2">
            <HorizontalChart />
            <PriorityBar />
          </div>
          {/* Last 3 Bugs */}
          <div>
            <h1 className="text-3xl text-white font-semibold text-center border-b-2">
              Last 3 Bugs
            </h1>
            <TableBugs bugs={bugs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
