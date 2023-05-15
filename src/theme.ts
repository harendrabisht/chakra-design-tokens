import { localToken } from "./localTokens";
import * as defaultTheme from "./defaultTokens.json";
import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme(localToken, defaultTheme);
