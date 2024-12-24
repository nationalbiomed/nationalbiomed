

import { Card } from "@/components/ui/card";

import { faBed, faCoffee, faTablet, faTabletScreenButton, faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const serviceItems = [
    {
        id:1,
        icon:<FontAwesomeIcon icon={faBed} color="white" size="xl"/>,
        title:"Hospital Bed",
    },
    {
        id:2,
        icon:<FontAwesomeIcon icon={faTv} color="white"/>,
        title:"Paients Monitor",
    },
    {
        id:3,
        icon:<FontAwesomeIcon icon={faTabletScreenButton} color="white"/>,
        title:"Tablet Ultrasound",
    },
    {
        id:4,
        icon:<FontAwesomeIcon icon={faBed} color="white"/>,
        title:"Hospital Bed",
    },
    {
        id:5,
        icon:<FontAwesomeIcon icon={faBed} color="white"/>,
        title:"Hospital Bed",
    },
    {
        id:6,
        icon:<FontAwesomeIcon icon={faBed} color="white"/>,
        title:"Hospital Bed",
    },
    {
        id:7,
        icon:<FontAwesomeIcon icon={faBed} color="white"/>,
        title:"Hospital Bed",
    },
    {
        id:8,
        icon:<FontAwesomeIcon icon={faBed} color="white"/>,
        title:"Hospital Bed",
    },
    {
        id:9,
        icon:<FontAwesomeIcon icon={faBed} color="white"/>,
        title:"Hospital Bed",
    },

]

// export default function Services(){
//     return(
//        <div>
//         <h1 className="sm:text-5xl text-2xl font-bold font-sans pb-12 text-center text-black mt-[50px]">
//           Services
//           </h1>
          
//           <div className="grid grid-cols-4 w-full   px-[5%] gap-5">
//           {ServiceItems.map((items)=>(
//             <Card className="flex flex-col items-center group border-green-600 border-dashed " key={items.id}>
//           {/* <Card className=" rounded-xl border-green-600 border-dashed flex items-center justify-center  group-hover:border-black:  "> */}
//           <div className="bg-green-600 hover:bg-black group-hover:opacity-100 rounded-full w-[70px] h-[70px]  p-4">
//             {items.icon}
            

//           </div>
//           {/* </Card> */}
//           <h1 className="px-5 text-xl mt-3 mb-5 text-center">{items.title}</h1>
//           </Card>
// ))}
// </div>
//        </div>
//     )
// }



export default function Services() {
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-primary mb-12">
        Our Services
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {serviceItems.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ icon: Icon, title }) {
  return (
    <Card className="flex flex-col items-center p-4 transition-all duration-300 hover:shadow-lg group">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary">
        <Icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-primary-foreground" />
      </div>
      <h3 className="text-sm md:text-base font-medium text-center">{title}</h3>
    </Card>
  )
}
