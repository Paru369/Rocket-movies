import styled from 'styled-components';

export const Container = styled.div`

> header{
  width: 100%;
  height: 144px;
  background: rgba(255, 133, 155, 0.05)
;

display: flex;
align-items: center;
 padding: 0 124px;

 svg{

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 24px;


 }
}

`;

export const Form = styled.form`

max-width: 340px;
margin: 0 auto 32px ;

>div:nth-child(4){
  margin-top: 24px;
}


`;

export const Avatar  = styled.div`

position: relative;
margin: -93px auto 32px;

width: 186px;
height: 186px;


> img{
width: 186px;
height: 186px;
border-radius: 99px;
}

>label{
  width: 48px;
  height: 48px;

  background-color : ${({ theme }) => theme.COLORS.PINK};
  border-radius: 99px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 7px;
  right: 7px;
  cursor: pointer;

  input{
    display: none;
  }

  svg{
    width: 20px;
    height: 20px;
    color : ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }
}

`;