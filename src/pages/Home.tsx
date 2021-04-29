import * as React from "react";
import {
  Box,
  Grid,
  GridProps,
  Heading,
  VStack,
  Text,
  Image,
  forwardRef,
  Button,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useClientWidth } from "hooks/use-client-width";
import { ContentContainer } from "components";

const GridLayout = forwardRef<GridProps, "div">((props, ref) => (
  <Grid gridTemplateColumns="100px 1fr" {...props} ref={ref} />
));

const Header = () => {
  const { width } = useClientWidth();
  const bgColor = useColorModeValue("white", "brand.800");

  return (
    <Box
      as="header"
      bgGradient="linear(to-r, gradient.from, gradient.to)"
      w="100%"
    >
      <ContentContainer>
        <GridLayout py={12}>
          <Image src="bp_small_white_2x.png" />
          <Heading as="h1" color="white" alignSelf="center" pl={4}>
            Blueprint
          </Heading>
          <Text color="white" pl={4} gridColumnStart={2}>
            Tech for nonprofits, built by uWaterloo students.
          </Text>
        </GridLayout>
      </ContentContainer>
      <Box
        borderLeft={`${width}px solid transparent`}
        borderBottom={`150px solid`}
        borderBottomColor={bgColor}
        transition="border-bottom-color 0.2s"
        w="0"
        h="0"
      />
    </Box>
  );
};

const Intro = () => (
  <Box>
    <Heading pb={8}>about</Heading>
    <Text fontSize="3xl">
      Blueprint strives to make technology accessible and useful for those who
      create communities and promote public welfare
    </Text>
  </Box>
);

const Contact = () => (
  <VStack align="flex-start" spacing={8} w="50%">
    <Heading>contact</Heading>
    <Text fontSize="xl" color="gray">
      We are looking for non-profits who are in need of technological solutions,
      as well as partners interested in supporting us and our cause.
    </Text>
    <HStack spacing={8}>
      <Button textTransform="uppercase" size="lg">
        Email info@uwblueprint.org
      </Button>
      <Button variant="outline" textTransform="uppercase" size="lg">
        Another button
      </Button>
    </HStack>
  </VStack>
);

export const Home = () => {
  return (
    <VStack spacing={8}>
      <Header />
      <ContentContainer>
        <GridLayout>
          <VStack align="left" spacing={20} gridColumnStart={2}>
            <Intro />
            <Contact />
            <HStack spacing={4}>
              <Button variant="solid">Button</Button>
              <Button variant="outline">Button</Button>
              <Button variant="ghost">Button</Button>
              <Button variant="link">Button</Button>
            </HStack>
          </VStack>
        </GridLayout>
      </ContentContainer>
    </VStack>
  );
};
