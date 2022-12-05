import styled from "styled-components";
import media from "@dictionaries/styles/media";
import variables from "@dictionaries/styles/variables";
import { LayoutBaseStyled } from "../LayoutBase/index.styles";

export const HeaderStyled = styled(LayoutBaseStyled)`
  display: flex;
  align-items: center;
  height: ${variables.sizes.headerHeightDesktop}px;

  @media screen and (max-width: ${media.mobile}) {
    height: ${variables.sizes.headerHeightMobile}px;
  }
`;
