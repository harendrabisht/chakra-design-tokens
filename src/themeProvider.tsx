import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as defaultToken from "./defaultTokens.json";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { useThemeInfo } from "./useThemeInfo";

const queryClient = new QueryClient();
// Theme containter
export const ChakraThemeContainer = ({
  children,
  themeName
}: {
  children: React.ReactNode;
  themeName?: string;
}) => {
  const data = useThemeInfo(themeName);
  const themes = extendTheme(defaultToken, data);
  return <ChakraProvider theme={themes}>{children}</ChakraProvider>;
};

// Theme Provider
export const ThemeProvider = ({
  children,
  themeName
}: {
  children: React.ReactNode;
  themeName?: string;
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraThemeContainer themeName={themeName}>
        {children}
      </ChakraThemeContainer>
    </QueryClientProvider>
  );
};
