import styled, { css } from 'styled-components'


export const TextDiv = styled.div`
  font-size: 55px;
  color: gold;
`;

export const Title = styled.h2`
  text-align: right;
  font-size: 3rem;
  
   // ${props => props.isChanged && css`
   //   color: green;
   // `}

  color: ${props => props.isChanged ? 'red' : 'black'}
`;

export const Button = styled.button`
  max-width: 200px;
  background-color: black;
  border: 1px solid red;
  width: 100%;
  color: red;
  font-size: 1.5rem;
  cursor: pointer;
`;

// export  default