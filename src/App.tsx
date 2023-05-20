import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledBtn, SuperBtn} from "./conponents/Button.styled";
import {StyledLink} from "./conponents/Link.styled";
import {Menu} from "./conponents/Menu.styled";

export function App() {
  return (
    <div className="App">
        <Menu>
            <ul>
                <li><a>first</a></li>
                <li><a>second</a></li>
                <li><a>third</a></li>
            </ul>
        </Menu>
        <Box>
            <StyledBtn as={StyledLink} href='#'>LinkComponent</StyledBtn>
            <StyledBtn as='a' href='#'>SimpleLink</StyledBtn>
            <StyledBtn color={'green'} fontSize={'20px'}>Hi!</StyledBtn>
            <StyledBtn color={'purple'} btnType='primary'>Привет!</StyledBtn>
            <StyledBtn color={'purple'} btnType='outlined' active>Aloha!</StyledBtn>
            <StyledBtn>Hello</StyledBtn>
            <SuperBtn>Hola!</SuperBtn>
        </Box>
    </div>
  );
}

const Box = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: aqua;
  gap: 15px;
  button {
    cursor: pointer;
  }
  ${StyledLink} {
    cursor: zoom-in;
  }
  
  
  
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`
