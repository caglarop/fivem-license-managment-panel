"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export enum ColorMode {
  Light = "light",
  Dark = "dark",
}

const ThemeContext = createContext<ColorMode>(ColorMode.Light);

interface ThemeProviderProps {
  children: ReactNode;
}

export function useColorMode(): ColorMode {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [colorMode, setColorMode] = useState<ColorMode>(ColorMode.Light);

  const toggleColorMode = () => {
    setColorMode((prevMode) =>
      prevMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light
    );
  };

  return (
    <ThemeContext.Provider value={colorMode}>{children}</ThemeContext.Provider>
  );
}
