function getTotalSolved(submissions) {
  if (!submissions) return 0;
  const solved = new Set();
  submissions.forEach((sub) => {
    if (sub.verdict === "OK") {
      solved.add(`${sub.problem.contestId}-${sub.problem.index}`);
    }
  });
  return solved.size;
}

function formatDate(seconds) {
  if (!seconds) return "-";
  return new Date(seconds * 1000).toLocaleDateString();
}

export default function getProfileStats(userData, contests, submissions) {
  if (!userData || !contests || !submissions) return null;

  const facts = {
    contests: contests.length,
    bestRank: contests.length ? Math.min(...contests.map((c) => c.rank)) : "-",
    worstRank: contests.length ? Math.max(...contests.map((c) => c.rank)) : "-",
    totalSolved: getTotalSolved(submissions),
    firstContest: contests.length ? formatDate(contests[0].ratingUpdateTimeSeconds) : "-",
    lastContest: contests.length ? formatDate(contests[contests.length - 1].ratingUpdateTimeSeconds) : "-",
  };

  return { facts };
}