import RenderBlocks from "@/utils/RenderBlocks";
import axios from "axios";
import React from "react";

export default function Page({ page }: { page: any }) {
  return (
    <div>
      <RenderBlocks layout={page.layout} />
    </div>
  );
}

export const getStaticPaths = async () => {
  const pageReq = await axios(`/api/pages?limit=100`);
  const pageData = pageReq.data;

  const returnObj = {
    paths: pageData.docs.map(({ slug, id }: { slug: string; id: any }) => {
      return {
        params: { slug: slug !== "index" ? slug.split("/") : false },
      };
    }),
    fallback: false,
  };

  return returnObj;
};

export const getStaticProps = async (ctx: any) => {
  const slug = ctx.params?.slug || "index";
  const preview = ctx.preview || false;

  //fetch page
  const pageReq = await axios(`/api/pages?where[slug][equals]=${slug}`);
  let pageData = pageReq.data.docs[0];

  return {
    props: {
      page: pageData,
    },
  };
};
