import React from "react";
import { response } from "../../type/res";
import { GetServerSideProps } from "next";
import classes from "../../styles/sub.module.scss";
import MainCard from "../../components/MainCard";

const Id = ({ data }: any) => {
  return (
    <div className={classes.grid}>
      <div className={classes.sub}></div>
      <div className={classes.main}>
        <MainCard {...data}/>
      </div>
    </div>
  );
};

export default Id;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx;
  let data;
  if (params) {
    const res = await fetch(`http://localhost:4000/api/camp/${params.id}`);
    data = await res.json();
  }
  const res: response  = data.res;
  if (!res) {
    return {
      redirect: {
        permanent: false,
        destination: "/404", //provide the patj
      },
    };
  }
  return {
    props: {
      data: res,
    },
  };
};
