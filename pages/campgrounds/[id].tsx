import React from "react";
import { useRouter } from "next/router";
const Id:React.FC = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div>
      <h1>HEllo from {id}</h1>
    </div>
  );
};

export default Id;
