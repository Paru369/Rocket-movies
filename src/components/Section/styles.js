import styled from 'styled-components';

export const Container = styled.section`

margin-top: 50px;
margin-left: 0;

> h2{
   

  padding-bottom: 16px;
  margin-bottom: 28px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 32px;
  font-weight: 400;
}

`;

