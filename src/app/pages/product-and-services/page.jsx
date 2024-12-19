import AboutProduct from "./_components/AboutProduct";
import Description from "./_components/Description";
import Products from "./_components/Products";

export default function ProductAndServices(){
    return(
        <div className="w-full lg:mt-[100px] mt-[50px] lg:px-20 px-5">
              <h1 className="text-4xl font-bold text-green-600 mb-10"> Product And Services</h1>
              <Description />
              <Products />
              <AboutProduct />

          
        </div>
    )
}