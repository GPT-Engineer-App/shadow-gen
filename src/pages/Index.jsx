import { Box, Button, Container, Input, Text, VStack, Image, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async () => {
    if (!prompt) {
      toast({
        title: "Error",
        description: "Please enter a prompt to generate images.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch("https://api.getimg.ai/v1/essential/text-to-image", {
        method: "POST",
        headers: {
          accept: "application/json",
          authorization: "Bearer key-xPECSj9yQdEOua7fzpqoZB7sJWaTMhMIIqRs4YIgxRfCYkVyxroKmgvOALcIA8PpQhxB00tn3r8dV95xalvlaAZvwHOl4Bz",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          style: "photorealism",
          height: 1024,
          width: 1024,
          output_format: "jpeg",
          prompt: prompt,
        }),
      });

      const data = await response.json();
      setImages(data.urls);
      setIsLoading(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate images.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.md" p={5}>
      <VStack spacing={8}>
        <Box p={5} shadow="2xl" rounded="md" bg="white">
          <Text fontSize="xl" mb={4}>
            Generate Images with BossMarc AI
          </Text>
          <Input value={prompt} onChange={handleInputChange} placeholder="Enter your prompt here..." size="lg" height="100px" p={2} bg="gray.100" rounded="md" />
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" mt={4} onClick={handleSubmit}>
            Generate
          </Button>
        </Box>
        <Box p={5} shadow="2xl" rounded="md" bg="white">
          <Text fontSize="xl" mb={4}>
            Generated Images
          </Text>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <VStack spacing={4}>
              {images.map((imgUrl, index) => (
                <Image key={index} src={imgUrl} alt={`Generated image ${index + 1}`} boxSize="250px" objectFit="cover" />
              ))}
            </VStack>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
