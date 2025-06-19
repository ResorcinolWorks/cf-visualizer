import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CompareProblemsBar = ({ data, users }) => {
  if (!data || Object.keys(data).length === 0) {
    return <p className="text-center text-gray-600">No problem data to compare.</p>;
  }
  
  const { handle1, handle2 } = users;

  const chartData = Object.entries(data).map(([rating, counts]) => ({
    rating,
    [handle1]: counts.user1,
    [handle2]: counts.user2,
  })).sort((a, b) => a.rating - b.rating);

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
        <Bar dataKey={handle1} fill="#000000" name={handle1} />
        <Bar dataKey={handle2} fill="#666666" name={handle2} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CompareProblemsBar;