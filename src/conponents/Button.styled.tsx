import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animation/Animations";


type StyledBtnType = {
    color?: string
    fontSize?: string
    btnType?: 'primary' | 'outlined'
    active?: boolean

}
export const StyledBtn = styled.button<StyledBtnType>`
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: ${props => props.fontSize || '1.6rem'};
  padding: 10px 20px;

  ${props => props.btnType === 'outlined' && css<StyledBtnType>`
    border: 2px solid ${props => props.color || '#b2ff30'};
    color: ${props => props.color || '#b2ff00'};
    background: transparent;

    &:hover {
      border-color: blue;
      color: blue;
      background: transparent;
    }
  `}
  ${props => props.btnType === 'primary' && css<StyledBtnType>`
    border: 2 solid ${props => props.color || '#b2ff30'};
    color: deeppink;

    &:hover {
      background: coral;
    }
  `}
  ${props => props.active && css<StyledBtnType>`
    box-shadow: 3px 3px 3px 3px rgba(7, 25, 38, 0.19);
  `}
`

export const SuperBtn = styled(StyledBtn)`
  background: darkblue;
  color: antiquewhite;
  border-radius: 20px;
  &:hover {
    animation: ${MyAnimation} 1.5s ease-in-out;
  }
`