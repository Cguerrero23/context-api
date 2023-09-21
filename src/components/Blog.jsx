import post from "../data/post"; // como lo estoy exportando por default puedo ponerle cualquier nombre
import { NavLink } from "react-router-dom";
import { ContextoTema } from "../contextos/contextoTema";
import React,{useContext} from 'react';
import Controles from './controles';

const Blog = () => {


  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {post.map((post) => {
          return (
            <li key={post.id}>
              <NavLink to={`/post/${post.id}`}> {post.titulo}</NavLink>
            </li>
          );
          //Ruta/se toma el id del post
        })}
      </ul>
      <Controles/>
    </div>
  );
};

export default Blog;
