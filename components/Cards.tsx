import React from 'react'
import classes from "./card.module.scss"
import Image from "next/image";
import Button from '@mui/material/Button';
import { useRouter } from "next/router"
import { response }  from "../type/res"


const Cards:React.FC<response> = (props) => {
    const el = props;
    const router = useRouter();
  return (
    <div className={classes.box} key={el._id}>
    <Image
      src={el.image}
      width={300}
      height={450}
      key={el._id}
      alt={el.title}
      className={classes.img}
    />
    <div className={classes.box_sub}>
      <h2>{el.title}</h2>
      <h2>${el.price}</h2>
    </div>
    <div className={classes.info}>
      <Button variant="contained" onClick={()=>router.push(`/campgrounds/${el._id}`)}>View Camp</Button>
    </div>
  </div>

  )
}

export default Cards