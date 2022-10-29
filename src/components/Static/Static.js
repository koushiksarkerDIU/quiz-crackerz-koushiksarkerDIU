import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const Static = () => {
  const loaderData = useLoaderData();
  const tropics = loaderData?.data;
  // console.log(tropics);
  return (
    <div className="container mt-10 pt-6">
      <BarChart
        className="w-1/2 mx-auto"
        width={500}
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
      <h2> Total number of quiz</h2>
    </div>
  );
};

export default Static;
