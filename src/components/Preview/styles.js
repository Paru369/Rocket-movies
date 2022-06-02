import styled from 'styled-components';

export const Container = styled.div`

width: 100%;

 




>h1{

  flex: 1;
  text-align: left;
  font-weight: 700;
  font-size: 36px;
  color: ${({ theme }) => theme.COLORS.WHITE};

};

.header{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  svg{
    font-size: 20px;
  }
}

header{
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 20px;

  
}

.autor{
    display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 16px;

  img{
    width: 20px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100}
  }

  >div{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  >svg{
    color: ${({ theme }) => theme.COLORS.PINK}
    }

  }

  .tags{

width: 100;
display: flex;
margin-top: 40px;
margin-bottom: 40px;

>span{

color:#FFFFFF;
background-color: rgba(255, 133, 155, 0.05);
}
}

>p{

  font-size: 16px;
  font-family: 'Roboto Slab';
  color: #F4EDE8;
  text-align: justify;
  margin-top: 15px;
  height: 40px;

}









`