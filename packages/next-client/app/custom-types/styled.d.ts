import "styled-components";

export interface Theme {
  color: {
    primary: string;
    secondary: string;
  };
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
