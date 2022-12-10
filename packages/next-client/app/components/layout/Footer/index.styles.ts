import Link from "next/link";
import styled from "styled-components";
import { LayoutBaseStyled } from "../LayoutBase/index.styles";

export const FooterStyled = styled.footer`
  flex-shrink: 0;
  padding-bottom: 36px;
`;

export const Layout = styled(LayoutBaseStyled)`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  font-size: 12px;
  color: #949ba6;
  white-space: pre;
`;

export const LinkText = styled(Link)`
  color: #5243c2;
`;
