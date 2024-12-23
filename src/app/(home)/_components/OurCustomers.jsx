const Customers = [
  {
    id: 1,
    name: "Department of Health Services",
    logo: "/OurCustomers/Emblem_of_Nepal.png",
    description: "Ministry of Health",
  },
  {
    id: 2,
    name: "FHI360",
    logo: "/OurCustomers/fhi360-logo.svg",
    description: "Nepal Country Office",
  },
  {
    id: 3,
    name: "Oppourtunity Village Network",
    logo: "/OurCustomers/OVN.jpg",
    description: "Ministry of Health",
  },
  {
    id: 4,
    name: "Province Health Logistics Management Center",
    logo: "/OurCustomers/Emblem_of_Nepal.png",
    description: "Gandaki-Province",
  },
  {
    id: 5,
    name: "Save The Children",
    logo: "/OurCustomers/stc_logo.svg",
    description: "Nepal Country Office",
  },
];

export default function OurCustomers() {
  return (
    <div className=" py-10 w-full mb-[50px] ">
      <h1 className="sm:text-5xl text-2xl font-bold font-sans pb-12 text-black text-center">
        Our <span className=" text-green-600">Customers</span>
      </h1>
      <div className="relative overflow-x-hidden  py-3">
        <div className="flex gap-40 text-center animate-marquee items-center">
          {Customers.map((items) => (
            <div
              key={items.id}
              className="w-40 flex-shrink-0 text-center mx-auto"
            >
              <img src={items.logo} />
              <h1 className="text-lg font-semibold text-green-600 text-center mb-2">
                {items.name}
              </h1>
              <p className="text-sm text-gray-600 text-center">{items.description}</p>
            </div>
          ))}
          {Customers.map((items) => (
            <div
              key={items.id}
              className="w-40 flex-shrink-0 text-center mx-auto"
            >
              <img src={items.logo} />
              <h1 className="text-md font-semibold mt-3 text-green-600">
                {items.name}
              </h1>
              <p className="text-gray-600">{items.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
