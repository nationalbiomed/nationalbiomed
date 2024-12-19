const Distributors = [
    {
        id:1,
        name:"Department of Health Services",
        logo: "/OurCustomers/Emblem_of_Nepal.png",
        description:"Ministry of Health",
    },
    {
        id:2,
        name:"FHI360",
        logo: "/OurCustomers/fhi360-logo.svg",
        description:"Nepal Country Office",
    },
    {
        id:3,
        name:"Oppourtunity Village Network",
        logo: "/OurCustomers/OVN.jpg",
        description:"Ministry of Health",
    },
    {
        id:4,
        name:"Province Health Logistics Management Center",
        logo: "/OurCustomers/Emblem_of_Nepal.png",
        description:"Gandaki-Province",
    },
    {
        id:5,
        name:"Save The Children",
        logo: "/OurCustomers/stc_logo.svg",
        description:"Nepal Country Office",
    },
]



export default function SoleDistributors(){
    return(
        <div className="">
            <h1 className="text-4xl font-bold text-green-600  px-20 mb-7">Sole <span className="text-black">Distributors</span></h1>

    <div className="grid grid-cols-4 gap-10 px-[50px] text-center" >
        {Distributors.map((items)=>(
            <div className="flex flex-col items-center justify-center " key={items.id}>
                <img src ={items.logo} className="w-40 "></img>
               <h1>{items.name}</h1> 
               <p>{items.description}</p>
               
            </div>
        ))}

    </div>
    </div>
    )
}