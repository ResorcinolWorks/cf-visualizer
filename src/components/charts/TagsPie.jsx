// src/components/charts/TagsPie.jsx

import React, { useMemo } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { formatTagsData } from '@/utils/chart-formatters';

const COLORS = ['#000000', '#404040', '#808080', '#A0A0A0', '#C0C0C0', '#E0E0E0', '#2A2A2A', '#5A5A5A'];

const TagsPie = ({ data }) => {
  const chartData = useMemo(() => formatTagsData(data, 8), [data]);

  if (!chartData || chartData.length === 0) {
    return <p className="text-center text-gray-600">No tag data available.</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Tooltip
          contentStyle={{
            backgroundColor: "#ffffff",
            borderColor: "#000000",
            color: "#000000"
          }}
          labelStyle={{ color: "#000000" }}
        />
        <Legend 
          layout="vertical" 
          align="right" 
          verticalAlign="middle"
          wrapperStyle={{ color: "#374151" }}
        />
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default TagsPie;