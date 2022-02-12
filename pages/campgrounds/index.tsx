import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import classes from "../../styles/camp.module.scss";

import Cards from "../../components/Cards";


interface dt {
  _id: number;
  title: string;
  description: string;
  location: string;
  image: string;
  price: number;
  reviews: string[];
}
const index: React.FC = ({ data }: any) => {
  const elm: dt[] = data;

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
     {elm.map((el:dt) => (
        <Cards {...el}/>
      ))}
     </div>
    </div>
  );
};

export default index;

export const getStaticProps = async ({}: GetStaticProps) => {
  let data;
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
