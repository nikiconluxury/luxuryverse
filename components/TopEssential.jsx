import Card from "./Card";
import expandImg from '../assets/expand-logo.svg';
import Image from "next/image";

const methodCards = [
  {
    title: "Luxury Brands",
    desc: "LuxuryVerse has direct access to the world's top luxury brands.  We have built our industry relationships over decades, ensuring that we have the best styles at the prices.  No one will beat our price.",
  },
  {
    title: "Exclusive Drops",
    desc: "Each week, LuxuryVerse releases a limited selection of luxury goods to our members.  We announce these drops one day in advance on X, releasing goods on a first come first serve basis.  Over time, LuxuryVerse will move to daily drops and additional membership levels, enabling earlier access or deeper discounts.",
  },
  {
    title: "Full Authentication",
    desc: "LuxuryVerse goods are 100% authentic and guaranteed on the blockchain.  Our goods and services are also supported by the Authentication Council, a group of former FBI and Interpol agents, dedicated to ensuring confidence and trust throughout the entire experience.",
  },
];

const TopEssentials = () => {
  return (
    <div className="relative overflow-hidden">
      {/* <span className="essential-bg"></span> */}
      <div className="wrapper flex flex-col justify-center text-center py-24">
        {/* <p className="text-sm md:text-xl text-purpleAsh mb-8">Private access to the most exclusive luxury brands</p>
        <h1 className="text-5xl md:text-7xl dm-font">
          <span className="font-extrabold text-purpleAsh">Lor</span>{" "}
          <span className="text-stroke">Lorem, Ipsum</span>
        </h1> */}
        {/* <h1 className="text-5xl md:text-7xl dm-font">
          <span className="text-purpleAsh font-extrabold">Ipsum</span>{" "}
          <span className="text-stroke">&</span>{" "}
          <span className="text-purpleAsh font-extrabold"> Lorem</span>{" "}
          <span className="text-stroke">Ipsum</span>
        </h1>
        <p className="text-sm md:text-xl text-purpleAsh my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus leo.
        </p> */}
        {/* <div className="grid grid-cols-1 px-4 md:px-20 mb-5">
            <div className="card-wrapper text-start">
                <h3 className="text-xl md:text-3xl text-purpleAsh font-extrabold">
                Lorem ipsum dolor sit?
                </h3>
                <p className="text-sm md:text-xl text-purpleAsh leading-6 md:mb-2">
                Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque
                </p>
                <div className="essential-expand-1 hidden md:flex">
                <Image src={expandImg} alt="Expand icon" />
                </div>
                <span className="card-bg !right-[-80px] overflow-hidden"></span>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-20 gap-5">
            <div className="card-wrapper text-start">
            <h3 className="text-xl md:text-3xl text-purpleAsh font-extrabold">
            Lorem ipsum dolor?
            </h3>
            <p className="text-sm md:text-xl text-purpleAsh leading-6 md:mb-16">
            Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean
            </p>
            <div className="essential-expand-1 hidden md:flex">
            <Image src={expandImg} alt="Expand icon" />
            </div>
            <span className="card-bg overflow-hidden"></span>
            </div>
            <div className="card-wrapper text-start">
                <h3 className="text-xl md:text-3xl text-purpleAsh font-extrabold">
                Lorem ipsum dolor
                </h3>
                <p className="text-sm md:text-xl text-purpleAsh leading-6 md:mb-16">Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula
                </p>
                <div className="essential-expand-1 hidden md:flex">
                <Image src={expandImg} alt="Expand icon" />
                </div>
                <span className="card-bg overflow-hidden"></span>
            </div>
        </div> */}

        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-5 px-4 md:px-20">
          {methodCards.map((card, index) => (
            <div className="card-wrapper flex-shrink-0 w-80 md:w-auto">
            <h3 className="text-xl text-[#bbbbbb] font-extrabold">{card.title}</h3>
            <p className="text-sm text-purpleAsh leading-6 mb-14">{card.desc}</p>
            {/* <div className="expand-wrapper">
            <Image src={expandImg} alt="Expand icon" />
            </div> */}
            <span className="card-bg"></span>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopEssentials;
