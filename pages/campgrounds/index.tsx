import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import classes from "../../styles/camp.module.scss";
import { v4 as uuidv4 } from "uuid";
import Cards from "../../components/Cards";
import { response } from "../../type/res";

const index: React.FC = ({ data }: any) => {
  const elm: response[] = data;

  return (
    <div className={classes.bd}>
      <Head>
        <title>campgrounds</title>
      </Head>
      <div className={`${classes.banner} overlay`}>
        <h1>Welcome to Yelpcamp</h1>
        <h4>View Campgrounds All Over The World</h4>
      </div>
      <div className={classes.camp}>
        {elm.map((el: response) => (
          <Cards {...el} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default index;

export const getStaticProps = async ({}: GetStaticProps) => {
  let data;
  try {
    const res = await fetch("http://localhost:4000/api/camp/v1");
    const datass = await res.json();
    data = datass.res;
    console.log(res);
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
      data: data,
    },
  };
};
