import { ComponentProps, ComponentType } from "react";

type RestProps<AsType> = AsType extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[AsType]
  : ComponentProps<AsType>;

type PropsWithAs<Props, AsType> = Props & {
  as?: AsType;
} & RestProps<AsType>;

export type AsFC<Props = {}, ReturnType = ReactNode> = <
  AsType extends
    | keyof JSX.IntrinsicElements
    | ComponentType<any> = keyof JSX.IntrinsicElements
>(
  props: PropsWithAs<Props, AsType>
) => ReturnType;
