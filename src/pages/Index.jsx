import { Container, VStack, Text, Heading, Button, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to My Portfolio
        </Heading>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTc3NDYyMzB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Developer Portrait" />
        <Text fontSize="lg" textAlign="center">
          Hi, I'm a passionate React developer with experience in building dynamic and responsive web applications. Check out my work and connect with me on social media!
        </Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
          View My Projects
        </Button>
        <VStack spacing={4}>
          <Text fontSize="md">Connect with me:</Text>
          <VStack direction="row" spacing={4}>
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
