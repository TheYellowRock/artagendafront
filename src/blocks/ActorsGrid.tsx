import React from "react";
import allActors from "@/globalData/allActors.json";
import Image from "next/image";
import Link from "next/link";

export default function ActorsGrid() {
  return (
    <div className="grid grid-cols-3 bg-white">
      {allActors.docs.map((actor) => (
        <Link href={`/actors/${actor.id}`}>
          <div className="w-full py-10 px-2">
            <Image
              className="flex mx-auto"
              src={`${process.env.NEXT_PUBLIC_MEDIA_STORAGE_BUCKET_URL}/${
                actor.images.at(0)?.filename
              }`}
              alt={actor.images.at(0)?.alt!}
              width={actor.images.at(0)?.width}
              height={actor.images.at(0)?.height}
            />

            <div className="w-full flex justify-center py-3 tracking-tighter text-darkBlack text-2xl uppercase  font-Mohave ">
              {actor.name} {actor.surname}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
