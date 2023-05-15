import "./styles.css";
import { ThemeProvider } from "./themeProvider";
import { VStack } from "@chakra-ui/react";
import { Button } from "./Button";
import { Heading } from "./Heading";

export default function App() {
  return (
    <VStack className="App">
      <ThemeProvider>
        <Button>Default Button</Button>
        <Heading>Default Heading 1</Heading>
      </ThemeProvider>
      <ThemeProvider themeName="jf">
        <Button>JF Button</Button>
        <Heading>JF Heading 1</Heading>
      </ThemeProvider>
      <ThemeProvider themeName="pco">
        <Button>PCO Button</Button>
        <Heading>PCO Heading 1</Heading>
      </ThemeProvider>
    </VStack>
  );
}
