import MarqueePartners from "./MarqueePartners";
import TopEssentials from "./TopEssential";

const Banner = () => {
    return (
        <div className="text-center  flex flex-col items-center justify-center pb-20 overflow-hidden">
        {/* <span className="gradient-banner w-[22%] md:w-[30%] "></span> */}
            <div className="wrapper text-center  px-4">
            <p className="text-sm md:text-2xl text-purpleAsh mt-20">Luxury, Redefined</p>
            <h1 className="text-5xl md:text-6xl my-4 text-center dm-font"><span className="font-extrabold text-purpleAsh ">Exclusive Brands</span> <span className="text-stroke"> </span> </h1>
            <h1 className="text-5xl md:text-7xl text-stroke dm-font">Exclusive Access</h1>
            {/* <h1 className="text-5xl md:text-9xl font-extrabold text-purpleAsh my-4 dm-font">Exclusive Access</h1> */}
            <p className="text-sm md:text-2xl text-purpleAsh  my-4 ">Exclusive access to authenticated luxury goods, fully verified on the blockchain. </p>
        
            </div>
            <TopEssentials />
            <MarqueePartners />
        </div>
    );
};

export default Banner;