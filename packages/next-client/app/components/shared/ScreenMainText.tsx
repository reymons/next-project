import styled from "styled-components";

const Text = styled.p`
  white-space: pre-line;
  font-size: 72px;
  font-weight: 700;
  line-height: 110%;
  color: ${props => props.theme.color.secondary};
  padding-bottom: 50px;
`;

const ScreenMainText = () => {
  return <Text>{"Make\nYour\nBurger"}</Text>;
};

export default ScreenMainText;
