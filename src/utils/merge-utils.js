/**
 * Merges two tag count maps into an array of objects with counts for user1 and user2.
 * @param {Object} tags1 - tag -> count for user1
 * @param {Object} tags2 - tag -> count for user2
 * @returns {Array} - [{ tag, user1, user2 }, ...] sorted by total count descending
 */
export function mergeTags(tags1, tags2) {
  const allTags = new Set([...Object.keys(tags1), ...Object.keys(tags2)]);
  const merged = [];

  for (const tag of allTags) {
    merged.push({
      tag,
      user1: tags1[tag] || 0,
      user2: tags2[tag] || 0,
    });
  }

  // Sort descending by combined count
  merged.sort((a, b) => (b.user1 + b.user2) - (a.user1 + a.user2));

  return merged;
}

export const mergeUsers = (user1, user2) => {
  return {
    handle1: user1.handle,
    handle2: user2.handle,
  };
};

export const mergeSubmissions = (subs1, subs2) => {
  const allRatings = [...new Set([...subs1.map(s => s.problem.rating), ...subs2.map(s => s.problem.rating)])];
  const merged = {};
  allRatings.forEach(rating => {
    if(rating) {
      merged[rating] = {
        user1: subs1.filter(s => s.problem.rating === rating).length,
        user2: subs2.filter(s => s.problem.rating === rating).length,
      };
    }
  });
  return merged;
};

export const mergeContests = (contests1, contests2) => {
  const contestMap1 = new Map(contests1.map(c => [c.contestId, c]));
  let h1Wins = 0;
  let h2Wins = 0;

  const common = contests2
    .filter(c2 => contestMap1.has(c2.contestId))
    .map(c2 => {
      const c1 = contestMap1.get(c2.contestId);
      if (c1.rank < c2.rank) {
        h1Wins++;
      } else if (c2.rank < c1.rank) {
        h2Wins++;
      }
      return {
        contestName: c1.contestName,
        handle1: { rank: c1.rank, ratingChange: c1.newRating - c1.oldRating },
        handle2: { rank: c2.rank, ratingChange: c2.newRating - c2.oldRating },
      };
    });

  return { common, h1Wins, h2Wins, handle1: contests1[0]?.handle, handle2: contests2[0]?.handle };
};