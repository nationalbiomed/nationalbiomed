import SideBar from "./_components/SideBar";
import MobileNav from "./_components/MobileNav";

export default function AdminLayout({ children }) {
  return (
    <div className="flex w-full h-full ">
      <div className="w-[15%] border-r min-h-screen  relative p-2  bg-green-100">
        <div className="hidden lg:block fixed w-[14%] ">
          <SideBar />
        </div>

        <div className="lg:hidden block fixed ">
          <MobileNav />
        </div>
      </div>
      <div className="w-[85%] lg:p-2 p-1">{children}</div>
    </div>
  );
}
