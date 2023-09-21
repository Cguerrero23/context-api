import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
    return (
        <div>
            <ContenedorHeader>
          <Titulo>Como funciona las rutas </Titulo>
          <Menu>
            <NavLink to="/">Inicio </NavLink>
            <NavLink to="Blog">Blog</NavLink>
            <NavLink to="Acerca-de">Acerca de</NavLink>
          </Menu>
        </ContenedorHeader>
        </div>
    );
};

const ContenedorHeader= styled.header`
text-align:center;
margin-botton:40px;
`;

const Titulo= styled.h1`
margin-botton:100px;
font-size: 30px;
text-transform:uppercase;`;

const Menu = styled.nav`
a{
  text-decoration:none;
  color: #165168;
  margin: 0 10px;
}
a:hover{
  color:blue;
}
a.active{
  border-botton:2px solid $165168;
}
`;

export default Header;