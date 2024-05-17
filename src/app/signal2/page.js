"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import signal2 from "/public/signal2.jpg";

const BotSection = () => {
  const router = useRouter();

  const handleBackLoading2 = () => {
    router.push("/loading");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="border-2 border-black flex justify-center flex-col rounded-2xl shadow-lg p-8 text-center w-[330px] h-[450px]">
        <div className="flex justify-center mb-4">
          <Image
            src={signal2}
            alt="Loading"
            width={300}
            height={150}
            className="loading-img"
            unoptimized
          />
        </div>

        <button
          className="bg-[#B47373] border-2 border-[#000000] text-[#000000] font-semibold py-2 px-6 rounded-full hover:bg-[#b85c5c] uppercase"
          onClick={handleBackLoading2}
        >
          next signal
        </button>
      </div>
    </div>
  );
};

export default BotSection;
