import styled from 'styled-components';

export const Container = styled.div`
 
 width: 100%;
 height: 100vh;

 display: grid;

 grid-template-rows: 116px auto;

 grid-template-areas: 
 "header"
 "content";

 > main{
   grid-area: content;
   overflow-y: auto;
 }

 .tags{
   display: flex;
   justify-content: left; 
   flex-wrap: wrap;
   background-color: black;
   padding: 20px;
   border-radius: 8px;
   gap:24px;
   margin-bottom: 40px;
 }

 .title{
   width: auto;
   display: flex;
   gap: 40px;
   margin-bottom: 40px;
 }

 .buttons{
   display: flex;
   gap: 40px;

   

 }


`;


export const Form = styled.form`

  width: 100%;
  margin: 38px auto;
  padding: 0 124px;

  >header{

    display: flex;
    align-items: left;
    flex-direction: column;
    margin-bottom: 36px;

    a{
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.PINK};
      align-items: center;
      text-align: center;
      display: flex;
      margin-bottom: 24px;
    }


    

  }

`

