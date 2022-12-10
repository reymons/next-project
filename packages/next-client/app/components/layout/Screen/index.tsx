import { HTMLAttributes } from "react";
import { ChildrenFC } from "@custom-types/component";
import Head from "next/head";
import { Wrapper, WrapperProps } from "./index.styles";

type Props = HTMLAttributes<HTMLElement> &
  WrapperProps & {
    pageTitle: string;
  };

const Screen: ChildrenFC<Props> = ({
  pageTitle,
  children,
  adjustToHeader,
  ...rest
}) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Wrapper {...rest} adjustToHeader={adjustToHeader}>
        {children}
      </Wrapper>
    </>
  );
};

export default Screen;
