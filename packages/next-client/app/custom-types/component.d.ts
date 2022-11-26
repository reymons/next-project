import { FC, ReactNode } from "react";

export type LayoutFC<P = {}> = FC<P> & {
  getLayout: () => ReactNode;
};

export type ChildrenFC<P = {}, C = ReactNode> = FC<
  P & {
    children: C;
  }
>;
