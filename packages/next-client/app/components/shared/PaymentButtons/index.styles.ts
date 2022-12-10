import styled from "styled-components";

type PaymentButtonProps = {
  bgColor: string;
};

export const Wrapper = styled.div`
  display: flex;
`;

export const PaymentButton = styled.div<PaymentButtonProps>`
  border-radius: 4px;
  height: 24px;
  width: 35px;
  background-color: ${props => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;

  &:first-of-type {
    margin-left: 0;
  }
`;
