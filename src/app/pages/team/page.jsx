import { Suspense } from "react";
import Teams from "./_components/Teams";
import Message from "./_components/Message"

export default async function NewsPage({ params }) {
  let chairman, teamsData; 
  try{
    const chairmanRes = await fetch("http://localhost:3000/api/team/get/chairman");
    if(!chairmanRes.ok) console.log("Error in fetching chairman");
    chairman= await chairmanRes.json();

  }catch(error){
    console.log("Error in chairman", error);
  }


  try{
    const teamRes = await fetch("http://localhost:3000/api/team/makecategory");
    if(!teamRes.ok) console.log("Error in fetching teams");
    teamsData= await teamRes.json();

  }catch(error){
    console.log("Error in team", error);
  }
  return (
    <Suspense fallback={<p>loading</p>}>
      <Message chairman={chairman} />
      <Teams teamDataByCategory={teamsData} />
    </Suspense>
  );
}
