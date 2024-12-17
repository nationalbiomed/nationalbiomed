const Customers = [
    {
        id:1,
        name:"Department of Health Services",
        logo: "Emblem_of_Nepal.png",
        description:"Ministry of Health",
    },
    {
        id:2,
        name:"FHI360",
        logo: "fhi360-logo.svg",
        description:"Nepal Country Office",
    },
    {
        id:3,
        name:"Oppourtunity ",
        logo: "Emblem_of_Nepal.png",
        description:"Ministry of Health",
    },
    {
        id:4,
        name:"Department of Health Services",
        logo: "Emblem_of_Nepal.png",
        description:"Ministry of Health",
    },
    {
        id:5,
        name:"Department of Health Services",
        logo: "Emblem_of_Nepal.png",
        description:"Ministry of Health",
    },
]


export default function OurCustomers(){
    return(
     <div className=" py-10 w-full mb-[50px] shadow-xl">
<h1 className="text-4xl font-bold text-green-600  px-20 ">Our Customers</h1>
<div className="relative overflow-x-hidden">
       <div className="flex gap-40 text-center animate-marquee mt-10">
            {Customers.map((items)=>(
                <div key={items.id} className="w-40 flex-shrink-0 text-center mx-auto">
                    <img src="/Emblem_of_Nepal.png" />
                    <h1 className="text-md font-semibold mt-3 text-green-600">{items.name}</h1>
                    <p className="text-gray-600">{items.description}</p>
                    
                    </div>

            ))}
            {Customers.map((items)=>(
                <div key={items.id} className="w-40 flex-shrink-0 text-center mx-auto">
                    <img src="/Emblem_of_Nepal.png" />
                    <h1 className="text-md font-semibold mt-3 text-green-600">{items.name}</h1>
                    <p className="text-gray-600">{items.description}</p>
                    
                    </div>

            ))}
          
            
        </div>
        </div>
        
       
     </div>
    )
}