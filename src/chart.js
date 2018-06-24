import React from "react";
import { Scatter } from "react-chartjs-2";

const Chart = props => <Scatter data={props.data} options={props.options} />;

export default Chart;
