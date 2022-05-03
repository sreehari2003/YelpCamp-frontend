import React, { useState, useEffect, createContext } from "react";
import { child } from "../type/res";
import { useRouter } from "next/router";
import Cookie from "js-cookie";
interface authContext {
  auth: boolean;
  removeAuth: () => void;
  getAuth: () => void;
}

const AuthContext = createContext({
  auth: false,
  removeAuth: () => {},
  getAuth: () => {},
});

export const AuthContextProvider = (props: child) => {
  const router = useRouter();
  let cook;
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    cook = Cookie.get("jwt");
    if (cook) {
      getAuth();
    }
  }, [cook]);
  const getAuth = () => {
    setAuth(true);
  };

  const removeAuth = () => {
    Cookie.remove("jwt");
    router.replace("/login");
    setAuth(false);
  };

  const contextValue: authContext = {
    auth,
    removeAuth,
    getAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
