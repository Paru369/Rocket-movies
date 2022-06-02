import styled from 'styled-components';

export const Container = styled.div`

display: flex;
align-items: center;

background-color: ${({ theme, isNew}) => isNew ? "transparente" : theme.COLORS.BACKGROUND_700};
color: ${({ theme }) => theme.COLORS.GRAY_300 };

border : ${({ theme, isNew}) => isNew ? `3px dashed ${ theme.COLORS.GRAY_300 }` : 'none'};


max-width:180px;
border-radius: 10px;
padding-right: 16px;


>button{
  border: none;
  background: none;
}

.button-delete{
  color: ${({ theme }) => theme.COLORS.RED};
}

.button-add{
  color: ${({ theme }) => theme.COLORS.PINK};
}



>input{

  height: 56px;
  width:  100%;
  padding: 12px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: transparent;
  border: none;
  
  &::placeholder{

   ${({ theme }) => theme.COLORS.GRAY_300}
  };
}

`;