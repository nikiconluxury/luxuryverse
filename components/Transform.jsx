import Image from "next/image";
import React, { useState } from "react";
import expand from "../assets/expand-logo.svg";

const Transform = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleHover = (index) => {
    setExpandedIndex(index);
  };

  return (
    <div className="relative overflow-hidden">
      <span className="transform-bg"></span>
      <div className="flex flex-col justify-center text-center py-24 wrapper">
        <p className="text-sm md:text-xl text-purpleAsh mb-8">What is Tiamonds?</p>
        <h1 className="text-5xl md:text-7xl dm-font">
          <span className="text-stroke">Largest</span>{" "}
          <span className="font-extrabold text-purpleAsh">Tokenized</span>
        </h1>
        <h1 className="text-5xl md:text-7xl text-purpleAsh font-extrabold dm-font">Diamond</h1>
        <h1 className="text-5xl md:text-7xl text-stroke mt-4 dm-font">Marketplace</h1>
        <p className="text-sm md:text-xl text-purpleAsh my-10">
          Transform Your Wealth with Blockchain-Backed Diamond Investments.
        </p>
        <div className="hidden md:flex flex-col md:flex-row gap-4 px-4 md:px-20">
          {[0, 1, 2].map((index) => (
            <div key={index} className="relative w-full">
              <div
                className={`text-lg text-purpleAsh w-full mt-6 focus:outline-none relative overflow-hidden duration-500`}
                onMouseEnter={() => handleHover(index)}
              >
                {expandedIndex === index ? (
                  <React.Fragment>
                    {index === 0 && (
                      <div className="transform-card-expand !duration-300 items-start text-start ">
                        <h2 className="text-3xl font-extrabold">
                          Why Choose Tokenized Diamonds?
                        </h2>
                        <p className="text-base my-2">
                          It offers enhanced liquidity, security, accessibility,
                          transparency, and traceability over traditional
                          diamonds, making them an attractive modern investment
                          option.
                        </p>
                        <ul className="list-disc pl-4 text-base flex flex-col gap-3">
                          <li>Enhancing liquidity</li>
                          <li>Security of Assets</li>
                          <li>Accessibility of Investment</li>
                          <li>Transparency & Traceability</li>
                        </ul>
                        <div className="transform-expand-btn">
                          <Image src={expand} alt="expand icon" />
                        </div>
                        <span className="transform-card-bg"></span>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="transform-card-expand items-start text-start">
                        <h2 className="text-3xl font-extrabold">
                          How To Add Diamonds To Your Portfolio?
                        </h2>
                        <p className="text-base my-2">
                          Sign up on a blockchain-based platform like Tiamonds,
                          purchase tokenized diamonds, and easily manage them in
                          your digital portfolio.
                        </p>
                        <ul className="list-disc pl-4 text-base flex flex-col gap-3">
                          <li>Choose a Platform</li>
                          <li>Create an Account & Verify KYC</li>
                          <li>Explore Options</li>
                          <li>Invest & Earn</li>
                          <li>Manage Portfolio</li>
                        </ul>
                        <div className="transform-expand-btn">
                          <Image src={expand} alt="expand icon" />
                        </div>
                        <span className="transform-card-bg"></span>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="transform-card-expand items-start text-start">
                        <h2 className="text-3xl font-extrabold">
                          What&apos;s The Future Of Diamond Investments?
                        </h2>
                        <p className="text-base my-2">
                          Investments in diamonds are becoming digital and
                          ethical, driven by Tiamonds through blockchain,
                          tokenization, ethical sourcing, and new investment
                          models.
                        </p>
                        <ul className="list-disc pl-4 text-base flex flex-col gap-3">
                          <li>Blockchain Authentication</li>
                          <li>Tokenization of Assets</li>
                          <li>Ethical Sourcing</li>
                          <li>Innovative Investment Models</li>
                        </ul>
                        <div className="transform-expand-btn">
                          <Image src={expand} alt="expand icon" />
                        </div>
                        <span className="transform-card-bg"></span>
                      </div>
                    )}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {index === 0 && (
                      <div className="transform-card text-start">
                        <p className="text-3xl font-extrabold">
                          Tokenized Diamonds
                        </p>
                        <div className="transform-expand-btn">
                          <Image src={expand} alt="expand icon" />
                        </div>
                        <span className="transform-card-bg"></span>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="transform-card text-start">
                        <p className="text-3xl font-extrabold">
                          Digital Portfolio
                        </p>
                        <div className="transform-expand-btn">
                          <Image src={expand} alt="expand icon" />
                        </div>
                        <span className="transform-card-bg"></span>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="transform-card text-start">
                        <p className="text-3xl font-extrabold">
                          Digital Diamonds
                        </p>
                        <div className="transform-expand-btn">
                          <Image src={expand} alt="expand icon" />
                        </div>
                        <span className="transform-card-bg"></span>
                      </div>
                    )}
                  </React.Fragment>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex md:hidden flex-col md:flex-row gap-4 px-4 md:px-20 text-purpleAsh">
          <div className="transform-card-expand items-start text-start">
            <h2 className="text-xl font-extrabold">
              Why Choose Tokenized Diamonds?
            </h2>
            <p className="text-sm my-2">
              It offers enhanced liquidity, security, accessibility,
              transparency, and traceability over traditional diamonds, making
              them an attractive modern investment option.
            </p>
            <ul className="list-disc pl-4 text-sm flex flex-col gap-3">
              <li>Enhancing liquidity</li>
              <li>Security of Assets</li>
              <li>Accessibility of Investment</li>
              <li>Transparency & Traceability</li>
            </ul>
            <div className="transform-expand-btn">
              <Image src={expand} alt="expand icon" />
            </div>
            <span className="transform-card-bg"></span>
          </div>
          <div className="transform-card-expand items-start text-start">
            <h2 className="text-xl font-extrabold">
              How To Add Diamonds To Your Portfolio?
            </h2>
            <p className="text-sm my-2">
              Sign up on a blockchain-based platform like Tiamonds, purchase
              tokenized diamonds, and easily manage them in your digital
              portfolio.
            </p>
            <ul className="list-disc pl-4 text-sm flex flex-col gap-3">
              <li>Choose a Platform</li>
              <li>Create an Account & Verify KYC</li>
              <li>Explore Options</li>
              <li>Invest & Earn</li>
              <li>Manage Portfolio</li>
            </ul>
            <div className="transform-expand-btn">
              <Image src={expand} alt="expand icon" />
            </div>
            <span className="transform-card-bg"></span>
          </div>
          <div className="transform-card-expand items-start text-start">
            <h2 className="text-xl font-extrabold">
              What&apos;s The Future Of Diamond Investments?
            </h2>
            <p className="text-sm my-2">
              Investments in diamonds are becoming digital and ethical, driven
              by Tiamonds through blockchain, tokenization, ethical sourcing,
              and new investment models.
            </p>
            <ul className="list-disc pl-4 text-sm flex flex-col gap-3">
              <li>Blockchain Authentication</li>
              <li>Tokenization of Assets</li>
              <li>Ethical Sourcing</li>
              <li>Innovative Investment Models</li>
            </ul>
            <div className="transform-expand-btn">
              <Image src={expand} alt="expand icon" />
            </div>
            <span className="transform-card-bg"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform;
