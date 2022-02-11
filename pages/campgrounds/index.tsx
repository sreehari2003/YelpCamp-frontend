import React from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import Image from "next/image";
import classes from "../../styles/camp.module.scss";
import Button from '@mui/material/Button';
import { useRouter } from "next/router"

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
  const router = useRouter();
  return (
    <div className={classes.bd}>
      <Head>
        <title>campgrounds</title>
      </Head>

      {elm.map((el) => (
        <div className={classes.box} key={el._id}>
          <Image
            src={el.image}
            width={350}
            height={500}
            key={el._id}
            alt={el.title}
          />
          <div className={classes.box_sub}>
            <h2>{el.title}</h2>
            <h2>${el.price}</h2>
          </div>
          <div className={classes.info}>
            {/* <h2>info</h2> */}
            <p>{el.description}</p>
            <Button variant="contained" onClick={()=>router.push(`/campgrounds/${el._id}`)}>View Camp</Button>
          </div>
        </div>
      ))}
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
