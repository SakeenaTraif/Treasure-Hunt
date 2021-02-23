import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavStyled = styled.nav`
  background-color: #800080;
`;

export const Logo = styled(Link)`
  img {
    width: 8rem;
  }
`;

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: purpule;
  color: white;
`;

export const UsernameStyled = styled.p`
  padding: 0.25em 1em;
`;

export const ItemWrapper = styled.div`
display: inline-block; 
pandding:50px;
margin-left:57px;
margin-rigtt:50px;
text-align: center;


  img {
    width: 8em;
    height: 8em;
    
  }

  p {
    &.Ingredient-name {
      color: black;}
    }
`;

export const RandomThings = styled.button`
  margin: 60px;
  padding: 100px 150px;
  border-radius: 3px;
  font-size: 25px;
  color:gray;
  
`;

export const Treasures = styled.button`
  margin: 60px;
  padding: 100px 150px ;
  border-radius: 3px;
  font-size: 25px;
  color:gray;

`;
