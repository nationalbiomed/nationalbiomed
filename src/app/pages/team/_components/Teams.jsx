const teamMembers = [
  {
    id: 1,
    name: "dkdc",
    img: "/BOSS-1.jpeg",
    department: "Marketing Manager",
  },
  {
    id: 2,
    name: "dkdc",
    img: "/BOSS-1.jpeg",
    department: "Marketing Manager",
  },
  {
    id: 3,
    name: "dkdc",
    img: "/BOSS-1.jpeg",
    department: "Marketing Manager",
  },
  {
    id: 4,
    name: "dkdc",
    img: "/BOSS-1.jpeg",
    department: "Marketing Manager",
  },
];

export default function Teams() {
  return (
    <div className="px-[5%] mb-[100px] bg-slate-100 py-20">
      <h1 className="text-4xl font-bold text-center pb-5">
        {" "}
        Our <span className="text-green-600">Team</span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4  gap-10 text-center justify-center">
        {teamMembers.map((items) => (
          <div
            key={items.id}
            className="space-y-3 pb-5 hover:shadow-2xl hover:bg-white transition ease-in-out duration-500  rounded-lg overflow-hidden"
          >
            <img src={items.img} className="aspect-square object-cover" />
            <h1>{items.name}</h1>
            <h1>{items.department}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
