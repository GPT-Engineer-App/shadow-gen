import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDisclosure } from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Router>
      <Header onOpen={onOpen} />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
