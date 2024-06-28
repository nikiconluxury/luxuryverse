import Image from "next/image";
import expandImg from '../assets/expand-logo.svg';

const Card = ({ card }) => {
  return (
    <div className="card-wrapper flex-shrink-0 w-80 md:w-auto">
      <h3 className="text-xl text-[#bbbbbb] font-extrabold">{card.title}</h3>
      <p className="text-sm text-purpleAsh leading-6 mb-14">{card.desc}</p>
      <div className="expand-wrapper">
      <Image src={expandImg} alt="Expand icon" />
      </div>
      <span className="card-bg"></span>
    </div>
  );
};

export default Card;
