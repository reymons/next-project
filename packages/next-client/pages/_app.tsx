import { FC } from "react";
import { AppProps as NextAppProps } from "next/app";
import { GetLayout } from "@custom-types/component";
import { StoreProvider } from "@mobx";
import CacheProvider from "@mobx/cache/context";
import "@styles/reset.scss";
import "@styles/fonts.scss";
import "@styles/global.scss";

type AppProps = NextAppProps & {
  Component: NextAppProps["Component"] & {
    getLayout?: GetLayout;
  };
};

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || (({ page }: any) => page);

  return (
    <StoreProvider>
      <CacheProvider>
        {getLayout({
          page: <Component {...pageProps} />
        })}
      </CacheProvider>
    </StoreProvider>
  );
};

export default App;
