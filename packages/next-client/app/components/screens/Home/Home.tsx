import { FC } from "react";
import { LayoutBase } from "@components/layout/LayoutBase";

const Button: FC<{ text: string }> = ({ text }) => {
  return <>{text}</>;
};

const Home: FC = () => {
  return <LayoutBase as={Button} text="test" />;
};

export default Home;
