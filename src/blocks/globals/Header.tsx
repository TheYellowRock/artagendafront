import React from "react";
import header from "@/globalData/header.json";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col bg-white">
        <div className="mx-auto py-7">
          <Image
            src={header.logo.url}
            alt={header.logo.alt}
            width={header.logo.width}
            height={header.logo.height}
          />
        </div>
      </div>
      <div className="w-full flex flex-row py-4 bg-darkBlack">
        <div className="w-3/5 mx-auto grid grid-cols-5">
          {header.navlinks.map((navItem) => (
            <div key={navItem.id} className="w-full flex text-white justify-center border-l border-white">{navItem.label}</div>
          ))}
          <div className="w-full flex text-white justify-center border-l border-white">PL</div>
        </div>
      </div>
    </div>
  );
}
