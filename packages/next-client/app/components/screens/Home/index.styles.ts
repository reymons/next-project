import Link from "next/link";
import NextImage from "next/image";
import styled from "styled-components";
import { LayoutBaseStyled } from "@components/layout/LayoutBase/index.styles";

export const Container = styled(LayoutBaseStyled)`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

export const ImageWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  height: 100%;
`;

export const Image = styled(NextImage)`
  position: absolute;
  width: auto;
  height: 100%;
  object-fit: contain;
  left: 250px;
  top: -20px;
`;

export const MakeBurgerLink = styled(Link)`
  background-color: #5243c2;
  height: 170px;
  width: 170px;
  font-weight: 800;
  color: #fff;
  font-size: 24px;
  text-transform: uppercase;
  line-height: 125%;
  border-radius: 50%;
  position: absolute;
  white-space: pre-line;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  z-index: 1;
  left: 175px;
  top: 57%;
`;
