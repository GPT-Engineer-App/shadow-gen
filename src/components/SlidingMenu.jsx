import { Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, Button } from "@chakra-ui/react";

const SlidingMenu = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
        <DrawerBody>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default SlidingMenu;
