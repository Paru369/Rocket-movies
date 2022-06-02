import styled from 'styled-components';

export const Container = styled.div `
width: 100%;
height: 100vh;
display: grid;


grid-template-rows: 116px auto;
grid-template-areas: 
"header"
"content";

> main{
  grid-area: content;
  overflow-y: scroll;
  padding:40px 124px 0;

  a{
    color:  ${({ theme }) => theme.COLORS.PINK};
    align-items: center;
    display: flex;
    margin-bottom: 24px;
  }
}
`;

export const Links =styled.ul`
list-style: none;
> li {
  margin-top: 12px;

  a{
    color:  ${({ theme }) => theme.COLORS.PINK}
  }
}

`;

export const Content = styled.div`

max-width: 100%;
margin: 0 auto;
display: flex;
flex-direction: column;
padding:0 124px;

> button:first-child{
  align-self: end;
  color:  ${({ theme }) => theme.COLORS.PINK}
}

>h1{
  font-size: 36px;
  font-weight: 500;
  padding-top: 64px;
}

>p{
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-top: 16px;
  text-align: justify;

}




`;