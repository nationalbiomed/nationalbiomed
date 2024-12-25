export default function Message() {
  return (
    <div className="w-full lg:mt-[100px] mt-[50px] lg:px-20 px-5">
      <div className="grid lg:grid-cols-3 grid-cols-1 w-full gap-10  ">
        <div className="">
          <img
            src="/BOSS-1.jpeg"
            className="rounded-lg"
            data-aos="fade-left"
          />
        </div>
        <div data-aos="fade-right " className="col-span-2">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Message <span className="text-black"> from the Chairman </span>
          </h1>
          <p className="text-md  text-gray-700 mb-5">Hi!</p>
          <p className="text-md text-gray-700 mb-6">
            First and foremost, I’d want to thank you for visiting our website.
          </p>
          <p className="text-md text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            possimus id officia, facilis commodi, adipisci doloremque
            necessitatibus sed quibusdam nesciunt veritatis corrupti ratione
            tenetur sit eius dicta autem neque delectus.
          </p>
        </div>
      </div>
    </div>
  );
}
