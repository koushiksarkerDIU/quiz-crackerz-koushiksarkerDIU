import React, { useContext } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { TropicContext } from "../Layout/Main";

const Static = () => {
  const tropics = useContext(TropicContext);
  return (
    <div className="mt-10 pt-6 ">
      <BarChart
        className="mx-auto"
        width={360}
        height={300}
        data={tropics}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
      <h2 className="text-xl font-semibold"> Total number of quiz</h2>
    </div>
  );
};

export default Static;
