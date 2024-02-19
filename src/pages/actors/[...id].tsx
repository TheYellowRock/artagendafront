import ActorDetails from "@/components/actorPage/ActorDetails";
import Filmography from "@/components/actorPage/Filmography";
import Videos from "@/components/actorPage/Videos";
import axios from "axios";

import React from 'react'

export default function actors({actor}:{actor : any} ) {

  return (
    <div>
      <ActorDetails actor={actor} />
      <Videos />
      <Filmography actor={actor}/>
    </div>
  )
}


export const getStaticPaths = async () => {
    const actorReq = await axios(`/api/actors?limit=100`);
    const actorData = actorReq.data;
  
    const returnObj = {
      paths: actorData.docs.map(({ id }: { id: any }) => {
        return {
          params: { id : [id] },
        };
      }),
      fallback: false,
    };
  
    return returnObj;
  };
  
  export const getStaticProps = async (ctx: any) => {
    const id = ctx.params?.id || "index";
    const preview = ctx.preview || false;
  
    //fetch page
    const actorReq = await axios(`/api/actors?where[id][equals]=${id}`);
    let actorData = actorReq.data.docs[0];
    
    console.log({actorData})
    return {
      props: {
        actor: actorData,
      },
    };
  };