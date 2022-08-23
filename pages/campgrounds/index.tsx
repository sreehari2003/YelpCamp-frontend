import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import classes from "../../styles/camp.module.scss";
import { v4 as uuidv4 } from "uuid";
import Cards from "../../components/Cards";
import { response } from "../../type/res";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import AuthContext from "../../context/authContext";
interface camps {
  data: response[];
}

const index = ({ data }: camps) => {
  const { auth } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (!auth) {
      router.push("/login");
    }
  }, []);
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
        {data.map((el: response) => (
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
    const res = await fetch("https://apiyelpcamp.herokuapp.com/api/camp/v1");
    const datass = await res.json();
    data = datass.res;
    if (!res.ok) throw new Error("Couldn't connect ");
  } catch (e) {
    console.log(e);
  }

  if (!data) {
    return {
      redirect: {
        destination: "/login", //provide the patj
      },
    };
  }

  if (!Array.isArray(data)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data,
    },
  };
};
