import React from "react";
import Head from "next/head";
import { GetStaticProps} from "next"

const index:React.FC = ({ data }) => {
  return (
    <div>
      <Head>
        <title>campgrounds</title>
      </Head>
      <h1>Hello campground</h1>
    </div>
  );
};

export default index;

export const getStaticProps= async ({}:GetStaticProps) => {
  let data:[];
  try {
    const res = await fetch("http://localhost:4000/api/camp");
    const datass = await res.json();
    data = datass.res;
    if (!res.ok) throw new Error("Couldn't connect ");
  } catch (e) {
    console.log(e);
  }
  if (!Array.isArray(data)) {
    return {
      notFound: true,
    };
  }

  if (!data) {
    return {
      redirect: {
        destination: "/", //provide the patj
      },
    };
  }
  return {
    props: {
      list: "hello world",
      data: data,
    },
  };
};
