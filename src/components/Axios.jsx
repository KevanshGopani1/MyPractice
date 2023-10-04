import axios from "axios";
import React, { useEffect } from "react";

const Axios = () => {
  const user = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  useEffect(() => {
    user.get("/2").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <h1>hello</h1>
      <h1>hello</h1>
    </>
  );
};

export default Axios;
