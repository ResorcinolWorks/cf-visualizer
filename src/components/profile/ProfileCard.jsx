import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FaUserCircle, FaMedal } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import { MdStars } from "react-icons/md";

// Codeforces rating color mapping
function getRatingColor(rating = 0) {
  if (rating >= 4000) return "#ff0000"; // tourist/jiangly
  if (rating >= 3000) return "#ff0000"; // Legendary Grandmaster
  if (rating >= 2400) return "#ff0000"; // Grandmaster
  if (rating >= 2100) return "#ff8c00"; // Orange Master
  if (rating >= 1900) return "#aa00aa"; // Violet Candidate Master
  if (rating >= 1600) return "#0000ff"; // Blue Expert
  if (rating >= 1400) return "#03a89e"; // Cyan Specialist
  if (rating >= 1200) return "#008000"; // Green Pupil
  return "#808080"; // Gray Newbie
}

// Optionally, get rank badge background for special styling
function getRankBadgeStyle(rank = "", rating = 0) {
  if (rank === "legendary grandmaster" || rating >= 3000) {
    // Gradient for legendary grandmaster
    return "bg-gradient-to-r from-yellow-400 to-red-600 text-white";
  }
  // Otherwise, just use a border with the main color
  return "";
}

export default function ProfileCard({ user }) {
  if (!user) return null;

  const { handle, rating, maxRating, rank, maxRank, avatar } = user;

  const getRankColor = (rank) => {
    if (rank.includes("Grandmaster")) return "text-red-500";
    if (rank.includes("Master")) return "text-orange-500";
    if (rank.includes("Candidate")) return "text-purple-500";
    if (rank.includes("Expert")) return "text-blue-500";
    if (rank.includes("Specialist")) return "text-cyan-500";
    if (rank.includes("Pupil")) return "text-green-500";
    return "text-gray-500";
  };

  return (
    <Card className="w-full max-w-sm mx-auto bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="text-center">
        <img
          src={avatar}
          alt={handle}
          className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary"
        />
        <CardTitle className="text-2xl font-bold text-gray-900">{handle}</CardTitle>
        <p className={cn("text-lg font-semibold", getRankColor(rank))}>
          {rank}
        </p>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-sm text-gray-600">Rating</p>
          <p className="text-xl font-bold text-gray-900">{rating}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Max Rating</p>
          <p className="text-xl font-bold text-gray-900">{maxRating}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Max Rank</p>
          <p className={cn("text-lg font-semibold", getRankColor(maxRank))}>
            {maxRank}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}