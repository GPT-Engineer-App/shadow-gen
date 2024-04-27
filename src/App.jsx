import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDisclosure } from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Router>
      <Routes>
        <Header onOpen={onOpen} />
        <Route exact path="/" element={<Index />} />
        <Footer />
      </Routes>
    </Router>
  );
}

export default App;
