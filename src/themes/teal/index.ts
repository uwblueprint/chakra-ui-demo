import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
import { mode, Styles } from "@chakra-ui/theme-tools"

import colors from "./colors"
import Button from "./components/button"
import Heading from "./components/heading"

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "brand.800")(props),
    },
  }),
}

const theme = extendTheme(
  { styles, colors, components: { Heading, Button } },
  withDefaultColorScheme({ colorScheme: "brand" })
)

export default theme
