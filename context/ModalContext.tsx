import React,{useState} from 'react'
import  {child} from "../type/res"

export interface md{
    load:boolean;
    loadScreen:()=>void;
}
 const ModalContext = React.createContext<md>({
    load:false,
    loadScreen:()=>{}
});



export const ModalContextProvider = (props:child) => {
    const [load,setLoad] = useState<boolean>(false)
    const loadScreen = ()=>{
        setLoad((el)=>!el);
        console.log(load)
    }

    const ctxVal = {
        load,
        loadScreen
    }
  return (
    <ModalContext.Provider value={ctxVal}> 
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalContext;