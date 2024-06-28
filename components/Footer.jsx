import Image from "next/image";
import Link from "next/link";
import telegram from "../assets/telegram.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";
import logo from "../assets/logo.svg";
import mail from "../assets/mail.svg";
import location from "../assets/location.svg";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="wrapper px-4 md:px-20 border-y border-[#252525] text-purpleAsh flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-start">
        <div className="w-full md:w-[450px] my-14">
          <h5 className="text-base md:text-xl font-bold">Stay in Loop</h5>
          <p className="text-xs md:text-sm my-5">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks
          </p>
          <div className="flex gap-4 items-center">
            <input
              className="bg-ash rounded-full py-2 px-4 w-full md:text-base text-xs"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-purple rounded-full text-white px-6 py-2 text-nowrap text-xs md:text-base">
              Sign Up
            </button>
          </div>
        </div>
        <div className="pb-10 md:pb-0">
          <h5 className="text-base md:text-xl font-bold md:mt-14">Join the Community</h5>
          <div className="flex gap-6 mt-5">
            <Link href="/">
              <Image
                className="bg-ash rounded-lg p-2 w-8 h-8 md:w-10 md:h-10"
                src={telegram}
                alt="telegram icon"
              />
            </Link>
            <Link href="/">
              <Image
                className="bg-ash rounded-lg p-2 w-8 h-8 md:w-10 md:h-10"
                src={twitter}
                alt="twitter icon"
              />
            </Link>
            <Link href="/">
              <Image
                className="bg-ash rounded-lg p-2 w-8 h-8 md:w-10 md:h-10"
                src={instagram}
                alt="instagram icon"
              />
            </Link>
            <Link href="/">
              <Image
                className="bg-ash rounded-lg p-2 w-8 h-8 md:w-10 md:h-10"
                src={linkedin}
                alt="linkedin icon"
              />
            </Link>
            {/* <Link href="/">
              <Image
                className="bg-ash rounded-lg p-2 w-8 h-8 md:w-10 md:h-10"
                src={youtube}
                alt="youtube icon"
              />
            </Link> */}
          </div>
        </div>
      </div>
      <div className="wrapper px-4 md:px-20 border-b border-[#252525] text-purpleAsh flex flex-col md:flex-row items-center md:items-start text-center md:text-start md:gap-10 pb-5 md:pb-0">
        <div className="mt-10 mb-5 w-full md:w-[520px] flex flex-col items-center md:items-start">
          {/* <Image className="mb-4" src={logo} alt="logo" /> */}
          <span className="font-[timesNew] text-3xl mb-4 text-white font-bold">LuxuryVerse</span>
          <p className="text-sm md:text-base">
            LuxuryVerse ultricies tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus
          </p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 items-start gap-10 mt-10 w-full">
          <div className="flex flex-col items-start gap-2">
            <p className="text-base font-bold mb-2">Get in Touch</p>
            <div className="flex items-start gap-2">
              <Image className="w-4 h-4" src={mail} alt="Mail" />
              <Link className="text-sm" href='/'>hello@luxuryverse.com</Link>
            </div>
            <div className="flex items-start text-start gap-2">
              <Image className="w-4 h-4" src={location} alt="Location" />
              <p className="text-sm">LuxuryVerse, Henim tortor at auctor urna nunc</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
          <p className="text-base font-bold mb-2">Link</p>
          <Link className="text-sm" href='/'>Link</Link>
          <Link className="text-sm" href='/'>Link</Link>
          <Link className="text-sm" href='/'>Link</Link>
          <Link className="text-sm" href='/'>Link</Link>
          </div>
          <div className="flex flex-col items-start gap-2">
          <p className="text-base font-bold mb-2">Legal Information</p>
          <Link className="text-sm" href='/'>Terms of Sale</Link>
          <Link className="text-sm" href='/'>Privacy Policy</Link>
          <Link className="text-sm" href='/'>WhitePaper</Link>
          <Link className="text-sm" href='/'>Token Information</Link>
          </div>
          <div className="flex flex-col items-start gap-2">
          <p className="text-base font-bold mb-2">Link</p>
          <Link className="text-sm" href='/'>Link</Link>
          <Link className="text-sm" href='/'>Link</Link>
          <Link className="text-sm" href='/'>Link</Link>
          <Link className="text-sm" href='/'>Link</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
      <p className="text-sm text-purpleAsh py-6">LuxuryVerse © 2024. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
