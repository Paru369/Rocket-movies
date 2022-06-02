import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.header`
  grid-area: header;
  color: ${({ theme }) => theme.COLORS.PINK};

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  padding: 0 124px;

  > h1{
    color: ${({ theme }) => theme.COLORS.PINK};

  }

  

`;


export const Profile = styled(Link)`
display: flex;
align-items: center;


> img{

  width: 56px;
  height: 56px;
  border-radius: 99px;

}

> div{
  display: flex;
  flex-direction: column;
  line-height: 24px;
  margin-right: 16px;
  
  align-items: flex-end;
  width: 125px;

 

  span{
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  align-items: right;
  justify-content: right;
  
  };
}

 strong{

font-size:16px;
color: ${({ theme }) => theme.COLORS.GRAY_100};
align-items: right;
justify-content: right;
}
`;

export const Logout = styled.button`

border:none;
background: none;

> svg{
  color: ${({ theme }) => theme.COLORS.DARKPINK};
  font-size: 36px;
}

`;