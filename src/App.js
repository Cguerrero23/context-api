import React ,{useContext}from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Blog from "./components/Blog";
import Acercade from "./components/Acerca-de";
import Header from "./components/Header";
import styled from "styled-components";
import Posts from "./components/Posts";
import Error404 from "./components/Error404";
import { ContextoTema } from "./contextos/contextoTema";


const App = () => {
  const {tema} = useContext(ContextoTema)
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header/>
        <Main tema={tema}>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="Acerca-de" element={<Acercade />} />
            <Route path="/post/:id" element={<Posts/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
};
const ContenedorPrincipal= styled.div`
padding: 48px;
width: 90%;
max-width: 700px;
`;

const Main=styled.main`
font-size: ${props=> props.tema ? props.tema.fuente + 'px':'16px'};
text-align: ${props=> props.tema ? props.tema.alineado :'right'};
background:white;
border-radius:10px;
padding:48px;
box-shadow: 0px 0p 5px rgba(129,129,129,0.1);
`

export default App;
