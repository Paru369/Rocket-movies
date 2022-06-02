import styled from 'styled-components';

export const Container = styled.span`

font-size: 12px;
padding-top: 5px ;


>svg{
  color: ${({ theme }) => theme.COLORS.PINK};
  margin: 0;
  padding: 0;
}

`;