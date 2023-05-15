import { Heading as ChakraHeading, useTheme } from "@chakra-ui/react";
import { ITheme } from "./theme.interface";

export const Heading = ({ children }: { children: string }) => {
  const { heading1 } = useTheme<ITheme>();
  return <ChakraHeading {...heading1}>{children}</ChakraHeading>;
};
