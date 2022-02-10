import React from "react";
import Head from "next/head";
import { GetStaticProps} from "next"
import Image from "next/image"
import ImgLoader from "../../components/utils/loaders/ImgLoader"
interface dt {
  _id: number;
  title: string;
  description: string;
  location: string;
  image: string;
  price:number;
  reviews: string[];
}
const index:React.FC= ({data}:any) => {
   const elm:dt[] = data; 

  return (
    <div>
      <Head>
        <title>campgrounds</title>
      </Head>
      <h1>Campgrounds</h1>
      {elm.map(el=>(
        <Image src={el.image} width={500} height={500} key={el._id} alt={el.title}/>
      ))}
    </div>
  );
};

export default index;

export const getStaticProps= async ({}:GetStaticProps) => {
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
