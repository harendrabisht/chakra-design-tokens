import { Button as ChakraButton, useTheme } from "@chakra-ui/react";
import React from "react";
import { ITheme } from "./theme.interface";

export const Button = ({ children }: { children: React.ReactNode }) => {
  const { action, button, buttonHeight } = useTheme<ITheme>();
  console.log(action);
  return (
    <ChakraButton
      my={5}
      background={action.primary}
      color="#fff"
      height={buttonHeight}
      {...button}
    >
      {children}
    </ChakraButton>
  );
};
