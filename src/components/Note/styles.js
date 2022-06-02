import styled from 'styled-components';

export const Container = styled.button`

width: 100%;
background-color:rgba(255, 133, 155, 0.05)  ;

border: none;
border-radius: 10px;

padding: 22px;
margin-bottom: 16px;

>h1{

  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE};

};

>header{
  display: flex;
}

>p{

  font-size: 16px;
  font-family: 'Roboto';
  color: #999591;
  text-align: justify;
  margin-top: 15px;
  height: 40px;
  overflow: hidden; 
  text-overflow: ellipsis;
}


> footer{

  width: 100;
  display: flex;
  margin-top: 24px;

}






`