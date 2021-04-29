import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react"
import { mode, Styles } from "@chakra-ui/theme-tools"

import colors from "./colors"
import Heading from "./components/heading"

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "brand.800")(props),
    },
  }),
}

const theme = extendTheme(
  { styles, colors, components: { Heading } },
  withDefaultColorScheme({ colorScheme: "brand" })
)

export default theme
