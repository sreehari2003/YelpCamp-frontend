import BackDrop from "../BackDrop";
import React from 'react';
import classes from "./error.module.scss"
import {motion} from "framer-motion"
import Button from '@mui/material/Button';

interface er{
    code:number;
}
const Alert:React.FC<er> = ({code}) => {
return (
    <BackDrop>
       <motion.div className="flex" animate={{y:200}} initial={{y:-300}} transition={{ duration: 1, type: "spring",
    stiffness: 260, }}>
       <div className={classes.box}>
            {/* <div className={classes.child}> */}
            <h2>ERROR : {code}</h2>
            <h3>Please Try Agin Later</h3>
     <Button variant="contained" color="success" className={classes.btn}>
        OK
      </Button>
            </div>
      {/* </div> */}
       </motion.div>
    </BackDrop>
)
};

export default Alert;
