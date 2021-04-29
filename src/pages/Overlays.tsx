import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Radio,
  RadioGroup,
  Stack,
  SlideOptions,
  VStack,
  Box,
  Heading,
  Tooltip,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
// @ts-ignore
import Lorem from "react-lorem-component";
import { ContentContainer } from "components";
import {
  AddIcon,
  ChevronDownIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  PhoneIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

function Drawers() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState<SlideOptions["direction"]>(
    "right"
  );

  return (
    <Box>
      <Heading mb={4}>Drawers</Heading>
      {/* @ts-ignore */}
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
        <Stack direction="row" mb={4}>
          <Radio value="top">Top</Radio>
          <Radio value="right">Right</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
        </Stack>
      </RadioGroup>
      <Button onClick={onOpen}>Open</Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
}

const ModalContents = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Lorem count={2} />
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Save</Button>
        </ModalFooter>
      </ModalContent>
    </>
  );
};

const Popovers = () => {
  return (
    <Box>
      <Heading mb={4}>Tooltips and Popovers</Heading>
      <HStack spacing={8}>
        <Tooltip hasArrow label="Phone number" fontSize="md">
          <PhoneIcon />
        </Tooltip>
        <Tooltip label="Hey, I'm here!" aria-label="A tooltip" placement="top">
          Hover me
        </Tooltip>
        <Popover>
          <PopoverTrigger>
            <Button>Trigger</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Header</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button>Button</Button>
              </PopoverBody>
              <PopoverFooter>This is the footer</PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
      </HStack>
    </Box>
  );
};

const Menus = () => {
  return (
    <Box>
      <Heading mb={4}>Menus</Heading>
      <HStack spacing={8}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
              New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            px={4}
            py={2}
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            // _hover={{ bg: "gray.400" }}
            // _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            File <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            <MenuItem>New File</MenuItem>
            <MenuItem>New Window</MenuItem>
            <MenuDivider />
            <MenuItem>Open...</MenuItem>
            <MenuItem>Save File</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export const Overlays = () => {
  const {
    isOpen: modalIsOpen,
    onOpen: modalOnOpen,
    onClose: modalOnClose,
  } = useDisclosure();
  const {
    isOpen: centeredIsOpen,
    onOpen: centeredOnOpen,
    onClose: centeredOnClose,
  } = useDisclosure();

  return (
    <ContentContainer py={20} h="100%">
      <VStack align="flex-start" spacing={20}>
        <Box>
          <Heading mb={4}>Modals</Heading>
          <ButtonGroup spacing="6">
            <Button onClick={modalOnOpen}>Open Modal</Button>
            <Button onClick={centeredOnOpen}>Open Centered Modal</Button>
          </ButtonGroup>
        </Box>
        <Drawers />
        <Popovers />
        <Menus />
      </VStack>
      <Modal isOpen={modalIsOpen} onClose={modalOnClose}>
        <ModalContents onClose={modalOnClose} />
      </Modal>
      <Modal isOpen={centeredIsOpen} onClose={centeredOnClose} isCentered>
        <ModalContents onClose={centeredOnClose} />
      </Modal>
    </ContentContainer>
  );
};
