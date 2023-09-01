"use client";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import MidSpinner from "@/components/Spinners/MidSpinner";

ChartJS.register(ArcElement, Tooltip, Legend);
const SummeryChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://fya-backend.vercel.app/api/v1/auth/admin/summary")
      .then((res) => res.json())
      .then((data) => {
        const dataArray = Object.values(data);
        setChartData(dataArray);
        setLoading(false);
      });
  }, []);
  console.log(chartData);

  const data = {
    labels: [
      "Total Workshop",
      "Total Cars",
      "Total Orders",
      "Approved Workshops",
      "Total Pending Workshops",
      "Total Disabled Workshops",
      "Total Users",
      "Approved Orders",
      "Pending Orders",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: chartData,
        backgroundColor: [
          "rgba(20, 250, 62, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(252, 71, 5, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(5, 29, 250, 0.2)",
          "rgba(255, 3, 3, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(110, 70, 232, 1)",
          "rgba(36, 179, 79, 1)",
          "rgba(250, 113, 67, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  if (loading) {
    return <MidSpinner />;
  }
  return (
    <div className="max-w-2xl mx-auto my-12">
      {chartData ? <Doughnut data={data} /> : <></>}
    </div>
  );
};

export default SummeryChart;
