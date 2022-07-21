import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

import {
  data as doughnutData,
  options as doughnutOptions,
} from "../../examples chartjs/doughnut";
import {
  data as verticalData,
  options as verticalOptions,
} from "../../examples chartjs/vertical_bar";

import TableBugs from "../../components/table_bugs/table_bugs.component";

const Main = () => {
  return (
    <div className="p-2">
      <div>
        <div className="textbg-slate-800 border-2 p-2 rounded-xl">
          <h1 className=" text-3xl text-white font-semibold text-center border-b-2">
            Bugs
          </h1>
          {/* Charts */}
          <div className="flex gap-2 border-2 p-2 m-2">
            <div className="w-1/3">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
            <div className="w-2/3">
              <Bar options={verticalOptions} data={verticalData} />
            </div>
          </div>
          {/* Last 3 Bugs */}
          <div>
            <h1 className="text-3xl text-white font-semibold text-center border-b-2">
              Last 3 Bugs
            </h1>
            <TableBugs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
