// src/components/charts/RatingWiseBarChart.jsx

import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { formatRatingWiseData } from '@/utils/chart-formatters';

// Tailwind-inspired color for bars
const BAR_COLOR = "#2563eb"; // blue-600

// Custom tooltip for rating bars
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { rating, count } = payload[0].payload;
    return (
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded p-2 text-sm shadow">
        <span className="font-semibold">Rating: {rating}</span>
        <br />
        Problems Solved: <span className="font-bold">{count}</span>
      </div>
    );
  }
  return null;
};

const RatingWiseBarChart = ({ data }) => {
  const chartData = useMemo(() => formatRatingWiseData(data), [data]);

  if (!chartData || chartData.length === 0) {
    return <p className="text-center text-gray-600">No data available.</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="rating" stroke="#6b7280" />
        <YAxis stroke="#6b7280" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            borderColor: "#e5e7eb",
            color: "#374151"
          }}
          labelStyle={{ color: "#374151" }}
        />
        <Legend wrapperStyle={{ color: "#374151" }} />
        <Bar dataKey="count" name="Problems Solved" fill="#000000" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RatingWiseBarChart;