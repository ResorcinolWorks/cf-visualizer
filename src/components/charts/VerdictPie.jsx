import React, { useMemo } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { formatVerdictsData } from '@/utils/chart-formatters';

const COLORS = {
  "OK": "#000000", // Black
  "WRONG_ANSWER": "#404040", // Dark Gray
  "TIME_LIMIT_EXCEEDED": "#808080", // Medium Gray
  "MEMORY_LIMIT_EXCEEDED": "#A0A0A0", // Light Gray
  "RUNTIME_ERROR": "#C0C0C0", // Lighter Gray
  "COMPILATION_ERROR": "#E0E0E0", // Very Light Gray
  "OTHER": "#2A2A2A" // Very Dark Gray
};

const VerdictPie = ({ data }) => {
  const chartData = useMemo(() => formatVerdictsData(data), [data]);

  if (!chartData || chartData.length === 0) {
    return <p className="text-center text-gray-600">No verdict data available.</p>;
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
          {chartData.map((entry) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[entry.name] || COLORS['OTHER']} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default VerdictPie;
