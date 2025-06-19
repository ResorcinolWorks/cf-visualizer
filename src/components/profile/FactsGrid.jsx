// src/components/profile/FactsGrid.jsx

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FactItem = ({ title, value }) => (
  <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 text-center">
    <CardHeader>
      <CardTitle className="text-base font-medium text-gray-600">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </CardContent>
  </Card>
);

export default function FactsGrid({ stats }) {
  if (!stats) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      <FactItem title="Contests" value={stats.contests} />
      <FactItem title="Total Solved" value={stats.totalSolved} />
      <FactItem title="Best Rank" value={stats.bestRank} />
      <FactItem title="Worst Rank" value={stats.worstRank} />
      <FactItem title="First Contest" value={stats.firstContest} />
      <FactItem title="Last Contest" value={stats.lastContest} />
    </div>
  );
}