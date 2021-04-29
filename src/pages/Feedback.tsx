import React from "react";
import {
  useToast,
  Wrap,
  WrapItem,
  Button,
  VStack,
  Box,
  SkeletonCircle,
  SkeletonText,
  Progress,
} from "@chakra-ui/react";
import { ContentContainer } from "components";

function ToastStatusExample() {
  const toast = useToast();
  const statuses = ["success", "error", "warning", "info"];

  return (
    <Wrap>
      {statuses.map((status, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${status} toast`,
                // @ts-ignore
                status,
                isClosable: true,
              })
            }
          >
            Show {status} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}

function PositionExample() {
  const toast = useToast();
  const positions = [
    "top",
    "top-right",
    "top-left",
    "bottom",
    "bottom-right",
    "bottom-left",
  ];

  return (
    <Wrap>
      {positions.map((position, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${position} toast`,
                // @ts-ignore
                position: position,
                isClosable: true,
              })
            }
          >
            Show {position} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}

function ToastVariantsExample() {
  const toast = useToast();
  const variants = ["solid", "subtle", "left-accent", "top-accent"];

  return (
    <Wrap>
      {variants.map((variant, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${variant} toast`,
                variant,
                isClosable: true,
              })
            }
          >
            Show {variant} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  );
}

function SkeletonExample() {
  return (
    <Box padding="6" boxShadow="lg" w="100%">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={4} spacing="4" />
    </Box>
  );
}

export const Feedback = () => {
  return (
    <ContentContainer py={20} h="100%">
      <VStack align="flex-start" spacing={20}>
        <ToastStatusExample />
        <PositionExample />
        <ToastVariantsExample />
        <SkeletonExample />
        <Box w="100%">
          <Progress size="sm" isIndeterminate />
        </Box>
      </VStack>
    </ContentContainer>
  );
};
