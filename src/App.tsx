import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Router from "router";

import blueprintTheme from "themes/blueprint";
import orangeTheme from "themes/teal";

const themes = [blueprintTheme, orangeTheme];

const App = () => {
  const [theme, setTheme] = React.useState<0 | 1>(0);
  const toggleTheme = () =>
    setTheme(((theme + 1) % themes.length) as typeof theme);

  return (
    <ChakraProvider theme={themes[theme]}>
      <Router toggleTheme={toggleTheme} />
    </ChakraProvider>
  );
};

export default App;
