import React from "react";
import Card from "./Card";

const Method = () => {
  const methodCards = [
    {
      title: "Exclusive Experience",
      desc: "Only available to select LV members, our trusted platforms ensures a seamless, verified purchasing experience.",
    },
    {
      title: "Digital Showcase",
      desc: "Discover our cutting-edge digital showroom, where each item is meticulously presented with rich media. Track the value of your luxury investments and immerse yourself in virtual experiences. Perfect for showcasing, trading, and appreciating your pieces.",
    },
    {
      title: "Exclusive Earning Events",
      desc: "Be the first to access limited edition and hard-to-get items from our luxury collections. As a member, you'll receive notifications to shop these exclusive releases before anyone else.",
    },
    {
      title: "Global Luxury Network",
      desc: "Join a vibrant community of members. Enjoy exclusive events, exciting giveaways, and connect with fellow luxury enthusiasts.",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <span className="method-bg"></span>
      <div className="method-wrapper wrapper">
        <div className="flex flex-col items-center px-4 text-center mb-16">
          <p className="text-sm md:text-xl text-center text-purpleAsh">Private access to the most exclusive luxury brands</p>
          <h1 className="text-5xl md:text-7xl my-4 text-center dm-font">
            <span className="text-5xl md:text-7xl text-stroke">Best Brands,</span>{" "}
            <span className="font-extrabold text-purpleAsh">Exclusive</span>
          </h1>
          <h1 className="text-5xl md:text-7xl  text-center dm-font">
            <span className="font-extrabold text-purpleAsh">Experience.</span>{" "}
            {/* <span className="text-5xl md:text-7xl text-stroke">Lorem</span> */}
          </h1>
          <p className="text-sm text-center md:text-xl text-purpleAsh mt-8">
          Each week, LuxuryVerse curates an assortment of the best luxury products,  <br />  all limited in quantity and available for purchase or vaulting.
          </p>
        </div>
        <div className="flex md:grid md:grid-cols-4 gap-5 px-4 md:px-20 overflow-x-auto no-scrollbar">
          {methodCards.map((item, index) => (
            <Card key={index} card={item} className="flex-shrink-0 w-80 md:w-auto" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Method;
