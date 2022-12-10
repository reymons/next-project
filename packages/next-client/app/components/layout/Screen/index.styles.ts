import styled, { css } from "styled-components";
import media from "@dictionaries/styles/media";
import variable from "@dictionaries/styles/variable";

export type WrapperProps = {
  fixedHeight?: boolean;
  adjustToHeader?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  background-color: ${props => props.theme.color.primary};
  display: flex;
  flex-direction: column;

  ${props =>
    props.fixedHeight
      ? css`
          height: var(--100vh);
          overflow: hidden;
        `
      : css`
          min-height: var(--100vh);
        `}

  ${props =>
    props.adjustToHeader &&
    css`
      padding-top: ${variable.size.headerHeightDesktop}px;
      @media screen and (max-width: ${media.mobile}) {
        padding-top: ${variable.size.headerHeightMobile}px;
      }
    `}
`;
