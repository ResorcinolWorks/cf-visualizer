// src/components/compare/ContestDuelTable.jsx

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Helper to determine duel result
function getDuelResult(rank1, rank2) {
  if (rank1 < rank2) return 1;
  if (rank2 < rank1) return -1;
  return 0;
}

const ContestDuelTable = ({ data, users }) => {
  if (!data || !data.common || data.common.length === 0) {
    return <p className="text-center text-gray-600">No common contests to display.</p>;
  }

  const { common, h1Wins, h2Wins } = data;
  const handle1 = data.handle1 || users.handle1;
  const handle2 = data.handle2 || users.handle2;

  return (
    <div>
      <div className="flex justify-around mb-4 text-center">
        <div>
          <p className="text-2xl font-bold text-gray-900">{h1Wins}</p>
          <p className="text-sm text-gray-600">{handle1} Wins</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{h2Wins}</p>
          <p className="text-sm text-gray-600">{handle2} Wins</p>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Contest</TableHead>
            <TableHead>{handle1} Rank</TableHead>
            <TableHead>{handle2} Rank</TableHead>
            <TableHead>Winner</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {common.map((contest, index) => (
            <TableRow key={index}>
              <TableCell>{contest.contestName}</TableCell>
              <TableCell>{contest.handle1.rank}</TableCell>
              <TableCell>{contest.handle2.rank}</TableCell>
              <TableCell
                className={
                  contest.handle1.rank < contest.handle2.rank
                    ? "text-green-600 font-semibold"
                    : contest.handle2.rank < contest.handle1.rank
                    ? "text-green-600 font-semibold"
                    : "text-gray-500"
                }
              >
                {contest.handle1.rank < contest.handle2.rank 
                  ? `🏆 ${handle1}` 
                  : contest.handle2.rank < contest.handle1.rank
                  ? `🏆 ${handle2}`
                  : "Tie"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ContestDuelTable;