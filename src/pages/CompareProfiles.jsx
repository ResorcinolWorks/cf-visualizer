// src/pages/CompareProfiles.jsx

import React from 'react';
import useUserData from '@/hooks/useUserData';
import useSubmissions from '@/hooks/useSubmissions';
import useContests from '@/hooks/useContests';
import { mergeUsers, mergeSubmissions, mergeContests } from '@/utils/merge-utils';
import LoadingSkeleton from '@/components/ui/LoadingSkeleton';
import ErrorMessage from '@/components/ui/ErrorMessage';
import ProfileCard from '@/components/profile/ProfileCard';
import ComparisonRatingGraph from '@/components/compare/ComparisonRatingGraph';
import CompareProblemsBar from '@/components/compare/CompareProblemsBar';
import CompareTagsBar from '@/components/compare/CompareTagsBar';
import ContestDuelTable from '@/components/compare/ContestDuelTable';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CompareProfiles({ submittedHandles }) {
  const { handle1, handle2 } = submittedHandles;

  const { data: user1, isLoading: isLoading1, error: error1 } = useUserData(handle1);
  const { data: user2, isLoading: isLoading2, error: error2 } = useUserData(handle2);
  const { data: subs1, isLoading: isLoadingSubs1, error: errorSubs1 } = useSubmissions(handle1);
  const { data: subs2, isLoading: isLoadingSubs2, error: errorSubs2 } = useSubmissions(handle2);
  const { data: contests1, isLoading: isLoadingContests1, error: errorContests1 } = useContests(handle1);
  const { data: contests2, isLoading: isLoadingContests2, error: errorContests2 } = useContests(handle2);

  const isLoading = isLoading1 || isLoading2 || isLoadingSubs1 || isLoadingSubs2 || isLoadingContests1 || isLoadingContests2;
  const error = error1 || error2 || errorSubs1 || errorSubs2 || errorContests1 || errorContests2;

  if (isLoading) return <LoadingSkeleton />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!user1 || !user2 || !subs1 || !subs2 || !contests1 || !contests2) return null;

  const mergedUsers = mergeUsers(user1, user2);
  const mergedSubmissions = mergeSubmissions(subs1, subs2);
  const mergedContests = mergeContests(contests1, contests2);

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-8">
        <ProfileCard user={user1} />
        <ProfileCard user={user2} />
      </div>

      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 font-semibold">Rating Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <ComparisonRatingGraph data={{ user1: contests1, user2: contests2 }} users={mergedUsers}/>
        </CardContent>
      </Card>
      
      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 font-semibold">Problem Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <CompareProblemsBar data={mergedSubmissions} users={mergedUsers} />
        </CardContent>
      </Card>
      
      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 font-semibold">Problem Tags Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <CompareTagsBar data={mergedSubmissions} users={mergedUsers} />
        </CardContent>
      </Card>
      
      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 font-semibold">Contest Duels</CardTitle>
        </CardHeader>
        <CardContent>
          <ContestDuelTable data={mergedContests} users={mergedUsers} />
        </CardContent>
      </Card>
    </div>
  );
}