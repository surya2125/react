import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  const data = useLoaderData();

  // useEffect(() => {
  //   axios
  //     .get("https://api.github.com/users/surya2125")
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  return (
    <div>
      <p className="text-center bg-gray-600 text-white p-4 w-full text-3xl">
        Github: {data?.followers}
      </p>
    </div>
  );
};

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await axios.get("https://api.github.com/users/surya2125");
  return response.data;
};
