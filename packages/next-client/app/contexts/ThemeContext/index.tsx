import { createContext, useCallback, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ChildrenFC } from "@custom-types/component";
import { darkTheme, lightTheme } from "./themes";

type Theme = "dark" | "light";

const ThemeContext = createContext({});

const useThemeProvider = (initialTheme: Theme = "light") => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme => (theme === "dark" ? "light" : "dark"));
  }, []);

  return {
    setTheme,
    themeStyles: theme === "dark" ? darkTheme : lightTheme,
    toggleTheme
  };
};

export const useTheme = () => {
  return useContext(ThemeContext) as ReturnType<typeof useThemeProvider>;
};

export const ThemeProvider: ChildrenFC = ({ children }) => {
  const ctx = useThemeProvider();

  return (
    <ThemeContext.Provider value={ctx}>
      <StyledThemeProvider theme={ctx.themeStyles}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
