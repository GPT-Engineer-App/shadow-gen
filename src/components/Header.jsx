import { Box, Button } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Header = ({ onOpen }) => {
  return (
    <Box bg="blue.500" p={4} color="white" display="flex" justifyContent="space-between" alignItems="center">
      <Button onClick={onOpen} leftIcon={<FaBars />} variant="ghost">
        Menu
      </Button>
      <Box>My React App</Box>
    </Box>
  );
};

export default Header;
