import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Button } from "@chakra-ui/react";

const SlidingMenu = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px" color="white">
          Menu
        </DrawerHeader>
        <DrawerBody>
          <p style={{ color: "white" }}>Image Generator</p>
          <p style={{ color: "white" }}>AI App 1 (Placeholder)</p>
          <p style={{ color: "white" }}>AI App 2 (Placeholder)</p>
          <p style={{ color: "white" }}>AI App 3 (Placeholder)</p>
          <p style={{ color: "white" }}>Log In</p>
          <p style={{ color: "white" }}>Log Out</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SlidingMenu;
