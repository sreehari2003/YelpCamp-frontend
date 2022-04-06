import React, { useState, createContext } from "react";
import { child } from "../type/res";

export interface modal {
  load: boolean;
  loadScreen: () => void;
  progress: boolean;
  loader: () => void;
}
export const ModalContext = createContext<modal>({
  progress: true,
  loader: () => {},
  load: false,
  loadScreen: () => {},
});

export const ModalContextProvider = (props: child) => {
  const [load, setLoad] = useState<boolean>(false);
  const [progress, setProgress] = useState<boolean>(true);
  const loadScreen = () => {
    setLoad((el) => !el);
    console.log(progress);
  };
  const loader = () => {
    setProgress((el) => !el);
  };
  const ctxVal = {
    load,
    loadScreen,
    progress,
    loader,
  };
  return (
    <ModalContext.Provider value={ctxVal}>
      {props.children}
    </ModalContext.Provider>
  );
};
