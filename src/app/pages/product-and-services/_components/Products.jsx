

const ProductList=[
    {
        id:1,
        img:"/ultrasound.png",
        title:"iSE series",
        description:"Portable Multi-Channel ECG",
    },
    {
        id:2,
        img:"/ultrasound.png",
        title:"iSE series",
        description:"Portable Multi-Channel ECG",
    },
    {
        id:3,
        img:"/ultrasound.png",
        title:"iSE series",
        description:"Portable Multi-Channel ECG",
    },
    {
        id:4,
        img:"/ultrasound.png",
        title:"iSE series",
        description:"Portable Multi-Channel ECG",
    },
    {
        id:5,
        img:"/ultrasound.png",
        title:"iSE series",
        description:"Portable Multi-Channel ECG",
    },
]

export default function Products() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 items-center pb-10 "> 
    {ProductList.map((items)=>(
        
   
          <div className=" flex flex-col items-center group mb-10" key={items.id}>
      <div className=" border-gray-200 border-2 overflow-hidden transition  group-hover:-translate-y-2 duration-300 ease-in-out mb-3">
      
          <img src={items.img} className="h-[300px] object-cover w-full transition group-hover:scale-105 ease-in-out duration-300 group-hover:-translate-y-2" ></img>
         
        
      </div>
      <h1 className="text-lg transition  group-hover:-translate-y-2 duration-300 ease-in-out">{items.title}</h1>
      <p className="text-green-500 transition  group-hover:-translate-y-2 duration-300 ease-in-out">{items.description}</p>
      </div>
       ))}
    </div>
  );
}
