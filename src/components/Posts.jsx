import React from "react";
import post from "../data/post";
import { useParams, Navigate } from "react-router-dom";

const Posts = () => {
  const { id } = useParams();
  return (
    <>
      {post[id] ? 
        <div>
          <h1>{post[id - 1].titulo}</h1>
          <p>{post[id - 1].texto}</p>
        </div>
       : 
        <div>
        <Navigate replace to={'/Blog'}/>
        </div>
      }
      
    </>
  );
};
export default Posts;
