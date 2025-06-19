import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ComparisonRatingGraph = ({ data, users }) => {
  if (!data || !data.user1 || !data.user2) {
    return <p className="text-center text-gray-600">No rating history available.</p>;
  }

  const { user1: contests1, user2: contests2 } = data;
  const { handle1, handle2 } = users;

  const combinedData = contests1.map((c1, index) => {
    const c2 = contests2[index] || {};
    return {
      contestName: c1.contestName,
      [handle1]: c1.newRating,
      [handle2]: c2.newRating,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={combinedData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="contestName" stroke="#6b7280" />
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
        <Line type="monotone" dataKey={handle1} stroke="#000000" name={handle1} strokeWidth={2} />
        <Line type="monotone" dataKey={handle2} stroke="#666666" name={handle2} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ComparisonRatingGraph;