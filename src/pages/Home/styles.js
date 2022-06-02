import styled from 'styled-components';

import { Link } from 'react-router-dom';



export const Container = styled.div `

width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 250px auto;

grid-template-areas: 
" header header"
"content content"
;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};



`;



export const Content = styled.div `
grid-area: content;
padding: 0 124px ;
overflow-y: scroll;

>header{
  
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  >button{
    width: 210px;
  }
}



`;

