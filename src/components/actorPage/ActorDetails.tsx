import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ActorDetails({ actor }: { actor: any }) {
  return (
    <div className="w-full bg-white p-10">
      <div className="w-4/5 mx-auto grid grid-cols-2">
        <div className="flex flex-col p-5">
          <div className="uppercase">Aktor teatralny i filmowy</div>
          <div className="text-4xl uppercase pb-10">
            {actor.name} {actor.surname}
          </div>

          <div className="border-b-2 border-lightGrey w-full uppercase">
            Wygląd
          </div>
          <div className="grid grid-cols-3 pt-2">
            <div className=" font-bold">Wiek:</div>
            <div className=" col-span-2">{actor.appearances.age} lat</div>
          </div>
          <div className="grid grid-cols-3 pt-2">
            <div className=" font-bold">Wzrost:</div>
            <div className=" col-span-2">{actor.appearances.height} cm</div>
          </div>
          <div className="grid grid-cols-3 pt-2">
            <div className=" font-bold">Kolor oczu:</div>
            <div className=" col-span-2">{actor.appearances.eyesColor}</div>
          </div>

          <div className="border-b-2 border-lightGrey w-full pt-7 uppercase">
            Wykształcenie
          </div>
          <div className="grid grid-cols-3 pt-2">
            <div className=" font-bold">Wykształcenie:</div>
            <div className=" col-span-2">{actor.education.degree} </div>
          </div>
          <div className="grid grid-cols-3 pt-2">
            <div className=" font-bold">Rok ukończenia:</div>
            <div className=" col-span-2">{actor.education.graduationYear} </div>
          </div>
          <div className="grid grid-cols-3 pt-2">
            <div className=" font-bold">Etat:</div>
            <div className=" col-span-2">{actor.education.establishement}</div>
          </div>

          <div className="border-b-2 border-lightGrey w-full pt-7 uppercase">
            Umiejętności
          </div>
          <div className="grid grid-cols-3">
            <div className=" font-bold">Instrument:</div>
            <div className=" col-span-2">{actor.skills.instruments} </div>
          </div>
          <div className="grid grid-cols-3 pt-2">
            <div className=" font-bold">Śpiew:</div>
            <div className=" col-span-2">{actor.skills.singing} </div>
          </div>
          <div className="grid grid-cols-3 pt-2">
            <div className=" font-bold">Taniec:</div>
            <div className=" col-span-2">{actor.skills.dance}</div>
          </div>
          <div className="grid grid-cols-3 pt-2">
            <div className=" font-bold">Język:</div>
            <div className=" col-span-2">{actor.skills.languages}</div>
          </div>
          <div className="grid grid-cols-3 pt-2">
            <div className=" font-bold">Pozostałe umiejętności:</div>
            <div className=" col-span-2">{actor.skills.others}</div>
          </div>

          <div className="pt-10">
            <div className="flex flex-row">
              <Link href={actor.links.youtube || `actors/${actor.id}`}>
                <div className="border-2 uppercase border-darkBlack bg-darkBlack text-white py-2 px-8 hover:bg-blue hover:border-blue mr-3">
                  Youtube
                </div>
              </Link>
              <Link href={actor.links.filmpolski || `actors/${actor.id}`}>
                <div className="border-2 uppercase border-darkBlack bg-darkBlack text-white py-2 px-8 hover:bg-blue hover:border-blue mr-3">
                filmpolski
                </div>
              </Link>
              <Link href={actor.links.instagram || `actors/${actor.id}`}>
                <div className="border-2 uppercase border-darkBlack bg-darkBlack text-white py-2 px-8 hover:bg-blue hover:border-blue mr-3">
                instagram
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row py-5 ">
          <div className="mx-auto">
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_STORAGE_BUCKET_URL}/${
                actor.images.at(0)?.filename
              }`}
              alt={actor.images.at(0)?.alt!}
              width={actor.images.at(0)?.width}
              height={actor.images.at(0)?.height}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}
