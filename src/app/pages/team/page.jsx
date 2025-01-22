import { Suspense } from "react";
import Teams from "./_components/Teams";
import Message from "./_components/Message";

export default async function NewsPage() {
  let chairman = null;
  let teamsData = null;

  try {
    const chairmanRes = await fetch("https://nationalbiomedical.vercel.app/api/team/get/chairman", { cache: "force-cache" });
    if (chairmanRes.ok) {
      chairman = await chairmanRes.json();
    } else {
      console.log("Error in fetching chairman");
    }
  } catch (error) {
    console.log("Error in chairman", error);
  }

  try {
    const teamRes = await fetch("https://nationalbiomedical.vercel.app/api/team/makecategory", { cache: "force-cache" });
    if (teamRes.ok) {
      teamsData = await teamRes.json();
    } else {
      console.log("Error in fetching teams");
    }
  } catch (error) {
    console.log("Error in team", error);
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Message chairman={chairman} />
      <Teams teamDataByCategory={teamsData} />
    </Suspense>
  );
}
