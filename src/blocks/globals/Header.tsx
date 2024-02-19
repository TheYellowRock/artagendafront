import React from "react";
import header from "@/globalData/header.json";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col bg-white">
        <div className="mx-auto py-7">
          <Image
            src={`${process.env.NEXT_PUBLIC_MEDIA_STORAGE_BUCKET_URL}/${header.logo.filename}`}
            alt={header.logo.alt}
            width={header.logo.width}
            height={header.logo.height}
          />
        </div>
      </div>
      <div className="w-full flex flex-row py-4 bg-darkBlack">
        <div className="w-3/5 mx-auto grid grid-cols-5">
          {header.navlinks.map((navItem) => (
            <Link key={navItem.id} href={navItem.link}>
              <div
                
                className="w-full flex text-white font-roboto tracking-tight justify-center border-l border-white"
              >
                {navItem.label}
              </div>
            </Link>
          ))}
          <div className="w-full flex text-white justify-center border-l border-white">
            PL
          </div>
        </div>
      </div>
    </div>
  );
}
