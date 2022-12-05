import NextLink from "next/link";
import styled from "styled-components";

export const NavStyled = styled.nav`
  margin-left: 80px;
  position: relative;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-left: 59px;

  &:first-of-type {
    margin-left: 0;
  }
`;

export const Link = styled(NextLink)`
  padding: 12px 0;
  display: inline-block;
`;

export const MovingLine = styled.div`
  position: absolute;
  background-color: #5243c2;
  height: 2px;
  border-radius: 25px;
  transition: left 200ms ease-in-out, width 200ms ease-in-out;
  will-change: left, width;
`;
