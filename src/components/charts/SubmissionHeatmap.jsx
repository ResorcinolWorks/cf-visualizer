import React, { useMemo } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { formatHeatmapData } from '@/utils/chart-formatters';

// Helper to get a color based on submission count
function getColor(count) {
  if (count === 0) return "bg-gray-200 dark:bg-gray-800";
  if (count < 2) return "bg-green-100 dark:bg-green-900";
  if (count < 5) return "bg-green-300 dark:bg-green-700";
  if (count < 10) return "bg-green-500 dark:bg-green-600";
  return "bg-green-700 dark:bg-green-400";
}

// Helper: get Date in IST at midnight
function getISTToday() {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
  const istOffset = 5.5 * 60 * 60 * 1000;
  const ist = new Date(utc + istOffset);
  ist.setHours(0, 0, 0, 0);
  return ist;
}

// Returns a 7x53 grid: rows = Sun–Sat, cols = weeks
function getPastYearGrid(submissionsByDate) {
    const today = getISTToday();
    const grid = Array.from({ length: 7 }, () => Array(53).fill(null));

    const endDate = new Date(today);
    // Start date is 52 weeks before the Sunday of the current week
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - (52 * 7) - today.getDay());
    
    let currentDate = new Date(startDate);

    while(currentDate <= endDate) {
        const dayOfWeek = currentDate.getDay();
        // Calculate the difference in weeks from the start date
        const weekIndex = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 7));

        if(weekIndex >= 0 && weekIndex < 53) {
            const isoDate = new Date(currentDate.getTime() - (currentDate.getTimezoneOffset() * 60000)).toISOString().slice(0, 10);
            grid[dayOfWeek][weekIndex] = {
                date: isoDate,
                count: submissionsByDate[isoDate] || 0,
            };
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return grid;
}

const SubmissionHeatmap = ({ data }) => {
  const chartData = useMemo(() => formatHeatmapData(data), [data]);

  if (!chartData.values || chartData.values.length === 0) {
    return <p className="text-center text-gray-600">No submission data available for the last year.</p>;
  }

  return (
    <CalendarHeatmap
      startDate={chartData.startDate}
      endDate={chartData.endDate}
      values={chartData.values}
      classForValue={(value) => {
        if (!value) {
          return 'color-empty';
        }
        return `color-scale-${Math.min(4, Math.ceil(value.count / 3))}`;
      }}
      tooltipDataAttrs={value => {
        return {
          'data-tip': `${value.date}: ${value.count} submissions`,
        };
      }}
      showWeekdayLabels={true}
    />
  );
};

export default SubmissionHeatmap;