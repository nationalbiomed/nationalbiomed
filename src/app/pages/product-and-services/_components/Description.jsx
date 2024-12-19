// const CategotyDescription=[
//   {
//     id : 1,
//     title: "ECG",
//     description:"While enjoying unprecedented growth, healthcare across the globe is facing ever-growing challenges: an aging population, rising costs, service integration, and a pandemic that is causing great uncertainty etc. As high-quality and advanced healthcare in most situations is still not affordable for most people, Mindray believes it’s time for the healthcare industry to give every life respect and put patient care first.",
//   }
// ]

export default function Description(){
    return(
        
       <div className="w-[100%] mb-[100px] lg:mx-[100px] mx-0 relative overflow-hidden">
         <div className="md:w-[50%] w-[100%]">
       <img src="/about.jpg" className=""></img>
       </div>
       
         <div className="bg-green-100  md:p-7 p-5 md:absolute md:w-[40%] w-[100%] md:top-1/2 md:left-[45%] md:transform md:-translate-y-1/2 md:h-[70%] overflow-hidden">
        <h1 className="md:text-2xl text-xl text-green-900 font-bold pb-2"> Vision</h1>
        <p className="md:text-base text-sm">While enjoying unprecedented growth, healthcare across the globe is facing ever-growing challenges: an aging population, rising costs, service integration, and a pandemic that is causing great uncertainty etc. As high-quality and advanced healthcare in most situations is still not affordable for most people, Mindray believes it’s time for the healthcare industry to give every life respect and put patient care first.</p>
       </div>
       
      
       </div>
       
    )
}