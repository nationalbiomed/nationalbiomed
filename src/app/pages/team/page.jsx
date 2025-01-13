// import { Suspense } from 'react';
// import Message from "./_components/Message";
// import Teams from "./_components/Teams";

// async function fetchWithErrorHandling(url) {
//   const res = await fetch(url);
//   if (!res.ok) throw new Error('Failed to fetch data');
//   return res.json();
// }

// export default async function Team() {
//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <TeamContent />
//     </Suspense>
//   );
// }

// async function TeamContent() {
//   const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

//   const [chairmanData, teamData] = await Promise.all([
//     fetchWithErrorHandling(`${BASE_URL}/api/team/get/chairman`),
//     fetchWithErrorHandling(`${BASE_URL}/api/team`),
//   ]);

//   const filteredTeamData = teamData?.filter(
//     (member) =>
//       member.post !== "Chief Executive Officer & Managing Director" &&
//       member.slug !== "chairman" &&
//       !member.message
//   ) || [];

//   return (
//     <>
//       <Message chairman={chairmanData || {}} />
//       <Teams members={filteredTeamData} />
//     </>
//   );
// }

// export const dynamic = 'force-dynamic';




import Message from "./_components/Message";
import Teams from "./_components/Teams";

// Fetch function with error handling
async function fetchWithErrorHandling(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch from ${url}`);
  return res.json();
}

// Team component with async fetching
export default async function Team() {
  try {
    // Fetch chairman data and categories concurrently
    const [chairmanData, categories] = await Promise.all([
      fetchWithErrorHandling('http://localhost:3000/api/team/get/chairman'),
      fetchWithErrorHandling('http://localhost:3000/api/team/makecategory'),
    ]);

    // Fetch team data by category
    const teamDataByCategory = await Promise.all(
      categories.map(async (category) => ({
        category,
        members: await fetchWithErrorHandling(`http://localhost:3000/api/team/category/${category}`)
      }))
    );

    return (
      <>
        <Message chairman={chairmanData || {}} />
        <Teams teamDataByCategory={teamDataByCategory} />
      </>
    );
  } catch (error) {
    console.error("Error fetching data for team page:", error);
    return (
      <>
        <Message chairman={{}} />
        <Teams teamDataByCategory={[]} />
      </>
    );
  }
}




// import Message from "./_components/Message";
// import Teams from "./_components/Teams";

// async function fetchWithErrorHandling(url) {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
//     return res.json();
//   } catch (error) {
//     console.error(`Error fetching ${url}:`, error);
//     return null; // Return null instead of throwing
//   }
// }

// export default async function Team() {
//   const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

//   const [chairmanData, categories] = await Promise.all([
//     fetchWithErrorHandling(`${BASE_URL}/api/team/get/chairman`),
//     fetchWithErrorHandling(`${BASE_URL}/api/team/makecategory`),
//   ]);

//   const teamDataByCategory = categories 
//     ? await Promise.all(
//         categories.map(async (category) => ({
//           category,
//           members: await fetchWithErrorHandling(`${BASE_URL}/api/team/category/${category}`)
//         }))
//       )
//     : [];

//   // Provide fallback data if fetching fails
//   const fallbackChairman = { name: "N/A", message: "Data unavailable" };
//   const fallbackTeamData = [{ category: "General", members: [] }];

//   return (
//     <>
//       <Message chairman={chairmanData || fallbackChairman} />
//       <Teams teamDataByCategory={teamDataByCategory.length > 0 ? teamDataByCategory : fallbackTeamData} />
//     </>
//   );
// }