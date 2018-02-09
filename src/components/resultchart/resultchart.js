import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import "./resultchart.css";

const resultchart = props => {
  let result = [
    { name: "Correct", answers: props.correct },
    { name: "Wrong", answers: props.wrong }
  ];
  return (
    <div className="chart">
      <h3 style={{ textAlign: "center" }}>Results</h3>
      <BarChart
        width={400}
        height={300}
        data={result}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={false} />

        <Bar dataKey="answers" fill="#fffff" />
      </BarChart>
    </div>
  );
};

export default resultchart;
