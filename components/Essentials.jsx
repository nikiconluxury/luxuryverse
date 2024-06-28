import Card from "./Card";
import expandImg from '../assets/expand-logo.svg';
import Image from "next/image";

const Essentials = () => {
  return (
    <div className="relative overflow-hidden">
      <span className="essential-bg"></span>
      <div className="wrapper flex flex-col justify-center text-center px-4 py-24">
        <p className="text-sm text-center md:text-xl text-purpleAsh mb-8">Private access to the most exclusive luxury brands</p>
        <h1 className="text-5xl text-center md:text-7xl dm-font">
          <span className="font-extrabold text-purpleAsh">Lor</span>{" "}
          <span className="text-stroke">Lorem, Ipsum</span>
        </h1>
        <h1 className="text-5xl text-center md:text-7xl dm-font">
          <span className="text-purpleAsh font-extrabold">Ipsum</span>{" "}
          <span className="text-stroke">&</span>{" "}
          <span className="text-purpleAsh font-extrabold"> Lorem</span>{" "}
          <span className="text-stroke">Ipsum</span>
        </h1>
        <p className="text-sm md:text-xl text-center text-purpleAsh my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur finibus leo.
        </p>
        <div className="grid grid-cols-1 px-4 md:px-20 mb-5">
          <div className="card-wrapper text-start overflow-hidden">
          
            <h3 className="text-xl md:text-3xl text-purpleAsh font-extrabold">
            Lorem ipsum dolor sit?
            </h3>
            <p className="text-sm md:text-xl text-purpleAsh leading-6 md:mb-2">
            Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque
            </p>
            <div className="expand-wrapper !right-5 ">
            <Image src={expandImg} alt="Expand icon" />
            </div>
            <span className="card-bg !right-[-80px] "></span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-20 gap-5">
        <div className="card-wrapper text-start overflow-hidden">
        <h3 className="text-xl md:text-3xl text-purpleAsh font-extrabold">
        Lorem ipsum dolor?
        </h3>
        <p className="text-sm md:text-xl text-purpleAsh leading-6 md:mb-16">
        Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean
        </p>
        <div className="expand-wrapper !right-5 ">
          <Image src={expandImg} alt="Expand icon" />
        </div>
        <span className="card-bg !right-[-80px]"></span>
      </div>
      <div className="card-wrapper text-start overflow-hidden">
            <h3 className="text-xl md:text-3xl text-purpleAsh font-extrabold">
            Lorem ipsum dolor
            </h3>
            <p className="text-sm md:text-xl text-purpleAsh leading-6 md:mb-16">Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula
            </p>
            <div className="expand-wrapper !right-5 ">
              <Image src={expandImg} alt="Expand icon" />
            </div>
            <span className="card-bg !right-[-80px]"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
