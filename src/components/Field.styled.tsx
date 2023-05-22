import styled from "styled-components";

export const Field = styled.input.attrs(({type, placeholder}) => ({
    type: type,
    placeholder: placeholder
}))`
  padding: 10px 15px;
  margin: 10px 0;
  font-size: 1.6rem;
`