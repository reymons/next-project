import { FC, ReactNode } from "react";

export type GetLayout = (config: { page: ReactNode }) => ReactNode;

export type LayoutFC<P = {}> = FC<P> & {
  getLayout: GetLayout;
};

export type ChildrenFC<P = {}, C = ReactNode> = FC<
  P & {
    children: C;
  }
>;
