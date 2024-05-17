"use client";

import Image from "next/image";
import brawlPiratesLogo from "/public/logo.png";
import { useRouter } from "next/navigation";

const BotSection = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/enterid");
  };

  return (
    <div className="flex bg-[#764B4B] items-center justify-center min-h-screen">
      <div className="bg-[#764B4B] app-background-img border-2 border-black flex justify-between flex-col rounded-2xl shadow-lg p-8 text-center w-[330px] h-[450px]">
        <h1 className="text-xl font-[400] leading-3 text-[#FF8585] mb-4 koulen-regular">
          BRAWL PIRATES BOT V0.2
        </h1>
        <div className="flex justify-center mb-4">
          <Image
            src={brawlPiratesLogo}
            alt="Brawl Pirates Logo"
            width={250}
            height={250}
          />
        </div>
        <button
          onClick={handleStart}
          className="bg-[#B47373] border-2 border-[#000000] text-[#000000] font-semibold py-2 px-6 rounded-full hover:bg-[#b85c5c]"
        >
          Start Bot
        </button>
        <p className="text-[#000000] py-10 font-bold text-[13px] mt-4">
          Powered by Spinscasino TM
        </p>
      </div>
    </div>
  );
};

export default BotSection;
