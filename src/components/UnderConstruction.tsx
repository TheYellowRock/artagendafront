import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";

export default function UnderConstruction() {
  return (
    <div className="">
      <div className="flex flex-row w-full mt-60 py-20 bg-slate-50">
        <Image
          width={267}
          height={47}
          src={logo}
          alt="Art Agenda"
          className="mx-auto"
        />
      </div>
      <div className="flex flex-col w-full mt-40">
        <div className="mx-auto font-bold text-2xl"> Website under construction </div>
        <div className="mx-auto font-bold text-2xl"> Coming in no time...</div>
      </div>
    </div>
  );
}
