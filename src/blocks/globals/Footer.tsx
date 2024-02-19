import React from "react";
import footer from "@/globalData/footer.json";
import contact from "@/globalData/contact.json";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
    <div className="w-full py-16 bg-darkBlack">
      <div className="w-3/4 mx-auto grid grid-cols-6">
        <div className=" col-span-2 flex flex-col border-r-2 border-darkGrey">
          <div className="py-5 w-full flex justify-center">
            <Image
              src={footer.logo.url}
              alt="Art Agenda"
              width={footer.logo.width}
              height={footer.logo.height}
            />
          </div>
          {footer.metalinks.map((item) => (
            <Link className="py-1 w-full flex justify-center" href={item.link}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col w-full px-10 border-r-2 border-darkGrey">
          <div className="text-beige font-semibold py-3">Menu główne</div>
          {footer.navlinks.map((item) => (
            <Link className="py-1" href={item.link}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="col-span-3 flex flex-col w-full px-10 ">
          <div className="text-beige font-semibold py-3">Kontakt</div>
          <div className="grid grid-cols-3">
            {contact.contactPerson.map((person) => (
              <div className="flex flex-col">
                <div className=" text-lightGrey uppercase py-2">
                  {person.role}
                </div>
                <div className="">{person.fullname}</div>
                <div className="">{person.phone}</div>
                <div className="">{person.email}</div>
              </div>
            ))}
            <div className="flex flex-col">
              <div className=" text-lightGrey uppercase py-2">
                Adres korespondencyjny
              </div>
              <div className="">{contact.addressLineOne}</div>
              <div className="">{contact.addressLineTwo}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex py-2 bg-black text-white justify-center"> © Art Agenda. All rights reserved. </div>
    </>
  );
}
