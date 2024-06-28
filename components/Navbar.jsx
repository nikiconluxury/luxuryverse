import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";
import menu from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";
import market from "../assets/market.svg";
import blog from "../assets/blog.svg";
import gift from "../assets/gift.svg";
import credibility from "../assets/credibility.svg";
import chevron from "../assets/chevron.svg";
import telegram from '../assets/telegram.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.svg';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className="navbar-bg">
      <div className="backdrop-blur-xl flex items-center justify-between py-6 px-4 wrapper md:px-20">
        <div>
          <Link href="/"><span className="font-[timesNew] text-3xl text-white font-bold">LuxuryVerse</span></Link>
          {/* <Image className="w-24 md:w-full" src={logo} alt="logo" /> */}
        </div>
        {/* <div className="md:flex items-center gap-8 hidden">
          <Link className="text-white" href="/">
            Marketplace
          </Link>
          <Link className="text-white" href="/">
            RWA
          </Link>
          <Link className="text-white" href="/">
            Credibility
          </Link>
          <Link className="flex items-center text-white" href="/">
            Refer
            <span className="-mt-3 ml-1 inline-flex items-center rounded-[2px] bg-purple px-1 py-[1px] text-[8px] font-medium text-white">
              new
            </span>
          </Link>
        </div> */}
        <div className="flex items-center gap-2">
          <Link href="/register" className="bg-purple px-4 md:px-6 py-1.5 md:py-2 rounded-full text-white">
            Connect
          </Link>
          {/* <button className="menu-btn md:hidden block" onClick={toggleMenu}>
            <Image src={isMenuOpen ? closeIcon : menu} alt="menu" />
          </button> */}
        </div>
      </div>
      {
      // isMenuOpen && (
      //   <div className="fixed inset-0 bg-black h-screen flex flex-col w-full justify-center z-[1000] pt-20 top-0">
      //     <div className="flex items-center justify-between py-6 px-4 fixed top-0 w-full">
      //       <div>
      //         <Image className="w-24 md:w-full" src={logo} alt="logo" />
      //       </div>
      //       <div className="flex items-center gap-2">
      //         <button className="bg-purple px-4 md:px-6 py-1.5 md:py-2 rounded-full text-white">
      //           Sign in
      //         </button>
      //         <button className="menu-btn md:hidden block" onClick={toggleMenu}>
      //           <Image src={isMenuOpen ? closeIcon : menu} alt="menu" />
      //         </button>
      //       </div>
      //     </div>
      //     <div className="flex flex-col gap-8 mb-12 px-4">
      //       <Link
      //         className="text-purpleAsh text-base flex w-full justify-between items-center"
      //         href="/"
      //       >
      //         <div className="flex gap-2 items-center">
      //           <Image className="w-4 h-4" src={market} alt="Marketplace" />{" "}
      //           Marketplace
      //         </div>{" "}
      //         <Image src={chevron} alt="Chevron Icon" />
      //       </Link>
      //       <Link
      //         className="text-purpleAsh text-base flex w-full justify-between items-center"
      //         href="/"
      //       >
      //         <div className="flex gap-2 items-center">
      //           <Image className="w-4 h-4" src={diamond} alt="rwa" /> RWA
      //         </div>{" "}
      //         <Image src={chevron} alt="Chevron Icon" />
      //       </Link>
      //       <Link
      //         className="text-purpleAsh text-base flex w-full justify-between items-center"
      //         href="/"
      //       >
      //         <div className="flex gap-2 items-center">
      //           <Image
      //             className="w-4 h-4"
      //             src={credibility}
      //             alt="Credibility"
      //           />{" "}
      //           Credibility
      //         </div>{" "}
      //         <Image src={chevron} alt="Chevron Icon" />
      //       </Link>
      //       <Link
      //         className="text-purpleAsh text-base flex w-full justify-between items-center"
      //         href="/"
      //       >
      //         <div className="flex gap-2 items-center">
      //           <Image className="w-4 h-4" src={gift} alt="Refer" /> Refer <span className="-mt-5 ml-[0.5px] inline-flex items-center rounded-[2px] bg-purple px-1 py-[0.2px] text-[8px] font-medium text-white">
      //           new
      //         </span>
      //         </div>{" "}
      //         <Image src={chevron} alt="Chevron Icon" />
      //       </Link>
      //       <Link
      //         className="text-purpleAsh text-base flex w-full justify-between items-center"
      //         href="/"
      //       >
      //         <div className="flex gap-2 items-center">
      //           {/* <Image className="w-4 h-4" src={blog} alt="Blog" /> Blog */}
      //         </div>{" "}
      //         <Image src={chevron} alt="Chevron Icon" />
      //       </Link>
      //     </div>
      //     <div className="flex gap-10 mt-auto py-4 px-6 justify-between items-center border-t border-[#252525]">
      //       <Link href="/">
      //         <Image className="w-4 h-4" src={telegram} alt="Telegram" />
      //       </Link>
      //       <Link href="/">
      //         <Image className="w-4 h-4" src={twitter} alt="Twitter" />
      //       </Link>
      //       <Link href="/">
      //         <Image className="w-4 h-4" src={instagram} alt="Instagram" />
      //       </Link>
      //       <Link href="/">
      //         <Image className="w-4 h-4" src={linkedin} alt="Linkedin" />
      //       </Link>
      //       <Link href="/">
      //         <Image className="w-4 h-4" src={youtube} alt="Youtube" />
      //       </Link>
      //     </div>
      //   </div>
      // )
      }
    </div>
  );
};

export default Navbar;
