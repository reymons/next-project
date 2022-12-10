import buttons from "./buttons";
import { Wrapper, PaymentButton } from "./index.styles";

const PaymentButtons = () => {
  return (
    <Wrapper>
      {buttons.map((button, i) => (
        <PaymentButton bgColor={button.bgColor}>
          <button.icon />
        </PaymentButton>
      ))}
    </Wrapper>
  );
};

export default PaymentButtons;
