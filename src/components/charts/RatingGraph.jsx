import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RatingGraph = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-600">No rating history available.</p>;
  }
  
  const formattedData = data.map((d) => ({
    ...d,
    date: new Date(d.ratingUpdateTimeSeconds * 1000).toLocaleDateString(),
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="date" stroke="#6b7280" />
        <YAxis stroke="#6b7280" domain={['dataMin - 100', 'dataMax + 100']} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            borderColor: "#e5e7eb",
            color: "#374151"
          }}
          labelStyle={{ color: "#374151" }}
        />
        <Legend wrapperStyle={{ color: "#374151" }} />
        <Line
          type="monotone"
          dataKey="newRating"
          name="Rating"
          stroke="#000000"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RatingGraph;