import { Box, Button } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Header = ({ onOpen }) => {
  return (
    <Box bg="black" p={4} color="white" display="flex" justifyContent="space-between" alignItems="center">
      <Button onClick={onOpen} leftIcon={<FaBars />} variant="ghost">
        Menu
      </Button>
      <Box>Lyn AI Apps</Box>
    </Box>
  );
};

export default Header;
