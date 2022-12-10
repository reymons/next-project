import styled from "styled-components";
import media from "@dictionaries/styles/media";
import variable from "@dictionaries/styles/variable";
import PhoneIconDefault from "svg/curved-phone.svg";
import { LayoutBaseStyled } from "../LayoutBase/index.styles";

export const HeaderStyled = styled.header`
  width: 100%;
  height: ${variable.size.headerHeightDesktop}px;
  position: fixed;
  z-index: ${variable.zIndex.header};
  background-color: ${props => props.theme.color.primary};
  top: 0;
  left: 0;
  display: flex;

  @media screen and (max-width: ${media.mobile}) {
    height: ${variable.size.headerHeightMobile}px;
  }
`;

export const Layout = styled(LayoutBaseStyled)`
  display: flex;
  align-items: center;
`;

export const Contacts = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
`;

export const ContactPseudoBtn = styled.div`
  background-color: #ffeded;
  color: ${variable.color.danger};
  border-radius: 25px;
  padding: 6px 12px;
  font-weight: 600;
  font-size: 16px;
`;

export const PhoneIcon = styled(PhoneIconDefault)`
  margin-right: 4px;
`;

export const Phone = styled.div`
  color: ${props => props.theme.color.secondary};
  font-weight: 600;
  margin-left: 60px;
`;

export const HumanImage = styled.div`
  border-radius: 50%;
  background-color: #f5f5ff;
  height: 58px;
  width: 58px;
  margin-left: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
