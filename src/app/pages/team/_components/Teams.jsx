export default function Teams({ members }) {
  return (
    <div className="px-[5%] mb-[100px]  py-20">
      <h1 className="text-4xl font-bold text-center pb-10">
        Our <span className="text-green-600">Teams</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center justify-center">
        {members.map((member) => (
          <div
            key={member.id}
            className="space-y-3 pb-5  cursor-pointer hover:shadow-2xl hover:bg-white transition ease-in-out duration-500 rounded-lg overflow-hidden"
          >
            <img src={member.image} alt={member.name} className="aspect-square object-cover w-full" />
            <h1 className="font-semibold text-lg">{member.name}</h1>
            <h2 className="text-gray-600">{member.post}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

