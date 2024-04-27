import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Button } from "@chakra-ui/react";

const SlidingMenu = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
        <DrawerBody>
          <p>Image Generator</p>
          <p>AI App 1 (Placeholder)</p>
          <p>AI App 2 (Placeholder)</p>
          <p>AI App 3 (Placeholder)</p>
          <p>Log In</p>
          <p>Log Out</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SlidingMenu;
