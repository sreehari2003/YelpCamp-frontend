import React from "react";
import { useRouter } from "next/router";
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
  let data: any;
  if (params) {
    const res = await fetch(`http://localhost:4000/api/camp/${params.id}`);
    data = await res.json();
  }
  const res: any = data.res;
  return {
    props: {
      user: "sreehari jayaraj",
      data: res,
    },
  };
};
