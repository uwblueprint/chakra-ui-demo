import {
  Box,
  ButtonGroup,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";

import { ColorModeSwitcher, ContentContainer } from "components";
import { RepeatIcon } from "@chakra-ui/icons";

const NavLink: React.FC<{ to: string }> = ({ to: path, children }) => (
  <Link
    as={RouterNavLink}
    to={path}
    textTransform="uppercase"
    textDecoration="none"
    fontWeight="semibold"
    letterSpacing="2px"
    _hover={{ opacity: 0.7 }}
  >
    {children}
  </Link>
);
export const Navbar = ({ toggleTheme }: { toggleTheme: () => void }) => {
  const { pathname } = useLocation();

  return (
    <Box bgGradient="linear(to-r,gradient.from,gradient.to)" py={3}>
      <ContentContainer
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        color="white"
      >
        {pathname !== "/" && (
          <RouterNavLink to="/">
            <HStack>
              <Image src="bp_small_white_2x.png" w="40px" />
              <Heading as="h1" size="sm" color="white">
                blueprint
              </Heading>
            </HStack>
          </RouterNavLink>
        )}
        <HStack w="100%" justify="flex-end" spacing={8}>
          <NavLink to="/overlays">Overlays</NavLink>
          <NavLink to="/feedback">Feedback</NavLink>
          <NavLink to="/tables">Tables</NavLink>
          <ButtonGroup spacing={1} ml={2}>
            <IconButton
              size="md"
              fontSize="lg"
              variant="ghost"
              color="current"
              onClick={toggleTheme}
              icon={<RepeatIcon />}
              aria-label={`Switch theme`}
            />
            <ColorModeSwitcher />
          </ButtonGroup>
        </HStack>
      </ContentContainer>
    </Box>
  );
};
