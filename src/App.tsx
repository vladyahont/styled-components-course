import React from 'react';
import './App.css';
import styled, {css} from "styled-components";
import img from './assest/Rectangle 1.svg'


export function App() {
  return (
    <div className="App">
        <Main>
            <ImgComp src={img} alt={'#'}></ImgComp>
            <Info>
                <Header>Headline</Header>
                <Paragraph>
                    Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.
                </Paragraph>
                <Button btnType={'primary'} color={'#4E71FE'}>See more</Button>
                <Button btnType={'outlined'} color={'#FFFFFF'}>Save</Button>
            </Info>
        </Main>
    </div>
  );
}


const Main = styled.main`
  width: 300px;
  height: 350px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 10px;
  margin-top: 350px;
`

const ImgComp = styled.img.attrs(({src, alt}) => ({
    src: src,
    alt: alt
}))``

const Info = styled.div`
  padding: 10px;
`
const Header = styled.h1`
  font-size: 16px
`

const Paragraph = styled.p`
  font-size: 12px;
  color: #ABB3BA;
  margin: 20px 0px;
`

type ButtonPropsType = {
    color?: string
    btnType?: 'primary' | 'outlined'
}

const Button = styled.button<ButtonPropsType>`
  border: none;
  width: 85px;
  height: 30px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 10px;
  line-height: 20px;
  
  & + & {
    margin-left: 15px;
  }
  
  ${props => props.btnType === 'primary' && css<ButtonPropsType>`
    background: ${props.color};
    color: snow;
  `}
  
  ${props => props.btnType === 'outlined' && css<ButtonPropsType>`
    background: ${props.color};
    color: #4E71FE;
    border: 2px solid #4E71FE;
  `}
`




// <Menu>
//     <ul>
//         <li><a>first</a></li>
//         <li><a>second</a></li>
//         <li><a>third</a></li>
//     </ul>
// </Menu>
// <Box>
//     <StyledBtn as={StyledLink} href='#'>LinkComponent</StyledBtn>
//     <StyledBtn as='a' href='#'>SimpleLink</StyledBtn>
//     <StyledBtn color={'green'} fontSize={'20px'}>Hi!</StyledBtn>
//     <StyledBtn color={'purple'} btnType='primary'>Привет!</StyledBtn>
//     <StyledBtn color={'purple'} btnType='outlined' active>Aloha!</StyledBtn>
//     <StyledBtn color={myTheme.color.secondary}>Hello</StyledBtn>
//     <SuperBtn>Hola!</SuperBtn>
// </Box>
// <Field placeholder={'email'}/>
// <Field type={'password'}/>

// const Box = styled.div `
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 15px;
//   button {
//     cursor: pointer;
//   }
//   ${StyledLink} {
//     cursor: zoom-in;
//   }
//
//
//
//   @media ${myTheme.media.tablet} {
//     flex-direction: column;
//   }
// `
