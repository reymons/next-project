import { FC } from "react";
import { AppProps as NextAppProps } from "next/app";
import { GetLayout } from "@custom-types/component";
import { StoreProvider } from "@mobx";
import { ThemeProvider } from "@contexts";
import CacheProvider from "@mobx/cache/context";
import Styles from "@components/styles/Styles";

type AppProps = NextAppProps & {
  Component: NextAppProps["Component"] & {
    getLayout?: GetLayout;
  };
};

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || (({ page }: any) => page);

  return (
    <>
      <Styles />
      <StoreProvider>
        <CacheProvider>
          <ThemeProvider>
            {getLayout({
              page: <Component {...pageProps} />
            })}
          </ThemeProvider>
        </CacheProvider>
      </StoreProvider>
    </>
  );
};

export default App;
