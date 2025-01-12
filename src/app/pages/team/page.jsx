import { Suspense } from 'react';
import Message from "./_components/Message";
import Teams from "./_components/Teams";

async function fetchWithErrorHandling(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}

export default async function Team() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TeamContent />
    </Suspense>
  );
}

async function TeamContent() {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

  const [chairmanData, teamData] = await Promise.all([
    fetchWithErrorHandling(`${BASE_URL}/api/team/get/chairman`),
    fetchWithErrorHandling(`${BASE_URL}/api/team`),
  ]);

  const filteredTeamData = teamData?.filter(
    (member) =>
      member.post !== "Chief Executive Officer & Managing Director" &&
      member.slug !== "chairman" &&
      !member.message
  ) || [];

  return (
    <>
      <Message chairman={chairmanData || {}} />
      <Teams members={filteredTeamData} />
    </>
  );
}

export const dynamic = 'force-dynamic';

