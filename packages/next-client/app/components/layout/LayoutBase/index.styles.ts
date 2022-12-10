import styled from "styled-components";

export type StyledProps = {
  flexGrow?: 1 | 0;
};

export const LayoutBaseStyled = styled.div<StyledProps>`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  flex-grow: ${props => props.flexGrow};
`;
