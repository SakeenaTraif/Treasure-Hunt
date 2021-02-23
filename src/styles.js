import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavStyled = styled.nav`
  background-color: grey;
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
  background-color: yellow;
  color: black;
`;

export const UsernameStyled = styled.p`
  padding: 0.25em 1em;
  color: white;
`;

export const ItemWrapper = styled.div`
  border-radius: 3px;
  border-color: grey;
  display: inline-block;
  padding: 50px;
  margin-left: 57px;
  margin-rigtt: 50px;
  text-align: center;

  img {
    width: 8em;
    height: 8em;
  }

  p {
    color: purple;
  }
`;

export const Garbages = styled.button`
  margin: 60px;
  padding: 100px 150px;
  border-radius: 3px;
  font-size: 50px;
  color: gray;
`;

export const Treasures = styled.button`
  margin: 60px;
  padding: 100px 150px;
  border-radius: 3px;
  font-size: 50px;
  color: gray;
`;
