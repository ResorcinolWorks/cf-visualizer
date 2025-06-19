import React from 'react';
import { useParams } from 'react-router-dom';
import useUserData from '@/hooks/useUserData';
import useContests from '@/hooks/useContests';
import useSubmissions from '@/hooks/useSubmissions';
import getProfileStats from '@/utils/profile-stats';
import ProfileCard from '@/components/profile/ProfileCard';
import FactsGrid from '@/components/profile/FactsGrid';
import RatingGraph from '@/components/charts/RatingGraph';
import SubmissionHeatmap from '@/components/charts/SubmissionHeatmap';
import LanguagesPie from '@/components/charts/LanguagesPie';
import TagsPie from '@/components/charts/TagsPie';
import VerdictPie from '@/components/charts/VerdictPie';
import RatingWiseBarChart from '@/components/charts/RatingWiseBarChart';
import LoadingSkeleton from '@/components/ui/LoadingSkeleton';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SingleProfile({ submittedHandle }) {
  const { handle: routeHandle } = useParams();
  const handle = submittedHandle || routeHandle;

  const { data: userData, isLoading: isUserLoading, error: userError } = useUserData(handle);
  const { data: contests, isLoading: isContestsLoading, error: contestsError } = useContests(handle);
  const { data: submissions, isLoading: isSubmissionsLoading, error: submissionsError } = useSubmissions(handle);

  const isLoading = isUserLoading || isContestsLoading || isSubmissionsLoading;
  const error = userError || contestsError || submissionsError;

  if (isLoading) return <LoadingSkeleton />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!userData || !contests || !submissions) return null;

  const stats = getProfileStats(userData, contests, submissions);

  return (
    <div className="space-y-8">
      <ProfileCard user={userData} />
      <FactsGrid stats={stats.facts} />
      
      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 font-semibold">Rating History</CardTitle>
        </CardHeader>
        <CardContent>
          <RatingGraph data={contests} />
        </CardContent>
      </Card>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 font-semibold">Problem Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <TagsPie data={submissions} />
          </CardContent>
        </Card>
        <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 font-semibold">Verdicts</CardTitle>
          </CardHeader>
          <CardContent>
            <VerdictPie data={submissions} />
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
        <CardHeader>
          <CardTitle className="text-xl text-gray-900 font-semibold">Submissions Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <SubmissionHeatmap data={submissions} />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 font-semibold">Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <LanguagesPie data={submissions} />
          </CardContent>
        </Card>
        <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 font-semibold">Rating-wise Problem Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <RatingWiseBarChart data={submissions} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}