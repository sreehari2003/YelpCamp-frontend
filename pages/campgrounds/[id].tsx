import React from "react";
import { useRouter } from "next/router";
import {response } from "../../type/res"
import { GetServerSideProps } from "next";
import axios from "axios"
const Id = ({data}:any) => {
  const dt:response[] = data; 
  const router = useRouter();
  const id = router.query.id;
  console.log(data);
  return (
    <div>
      <h1>HEllo from {id}</h1>
    </div>
  );
};

export default Id;

export const getServerSideProps:GetServerSideProps = async (ctx) => {

    const {params} = ctx;
    let data:any;
    if(params){
      const res = await fetch(`http://localhost:4000/api/camp/${params.id}`)
      data = await res.json();
    }
    const res:any = data.res;
  return {
    props: {
      user: "sreehari jayaraj",
      data:res
    },
  };
};