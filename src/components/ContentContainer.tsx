import { Container, ContainerProps, forwardRef } from "@chakra-ui/react"
import React from "react"

/**
 * An example of extending (composing) a Chakra UI component.
 * Whenever you create your own reusable component built on a Chakra component, you should
 * follow this pattern of using `forwardRef` to forward both the refs and the props.
 *
 * ContentContainer limits the max width of content, defaulting to the `container.lg` theme token.
 * It composes `Container`, meaning you can pass any props that `Container` accepts to `ContentContainer`.
 */
export const ContentContainer = forwardRef<ContainerProps, "div">(
  (props, ref) => <Container maxW="container.lg" {...props} ref={ref} />
)
