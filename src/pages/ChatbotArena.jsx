import { Box, Heading, Text, Link, VStack, HStack, Button, Input, Textarea } from "@chakra-ui/react";

function ChatbotArena() {
  return (
    <Box p={5}>
      <VStack spacing={5} align="stretch">
        <Box>
          <Heading as="h1">Chatbot Arena: Benchmarking LLMs in the Wild</Heading>
          <HStack spacing={4} mt={2}>
            <Link href="/blog">Blog</Link>
            <Link href="/github">GitHub</Link>
            <Link href="/paper">Paper</Link>
            <Link href="/dataset">Dataset</Link>
            <Link href="/twitter">Twitter</Link>
            <Link href="/discord">Discord</Link>
          </HStack>
        </Box>

        <Box>
          <Heading as="h2" size="md">
            Rules
          </Heading>
          <VStack align="start" mt={2}>
            <Text>• Ask any question to two anonymous models (e.g., ChatGPT, Claude, Llama) and vote for the better one!</Text>
            <Text>• You can continue chatting until you identify a winner.</Text>
            <Text>• Vote won’t be counted if model identity is revealed during the conversation.</Text>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="md">
            Arena Elo Leaderboard
          </Heading>
          <Text mt={2}>This page collects human votes to compute an Elo-based LLM leaderboard.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="md">
            Chat Now
          </Heading>
          <Text mt={2}>Prompt to start chatting.</Text>
          <Button mt={2}>Expand to see descriptions of models</Button>
        </Box>

        <Box>
          <Heading as="h2" size="md">
            Chat Interface
          </Heading>
          <HStack spacing={5} mt={2}>
            <Box w="50%">
              <Heading as="h3" size="sm">
                Model A
              </Heading>
              <Textarea mt={2} value="I found a property I would like to buy. Please draft a letter to the owners expressing my interest to purchase and convincing them of completing a private sale with me. List the benefits of private sale and how it will be done with our lawyers." readOnly />
              <Textarea mt={2} value="Sample response from Model A" readOnly />
            </Box>
            <Box w="50%">
              <Heading as="h3" size="sm">
                Model B
              </Heading>
              <Textarea mt={2} value="I found a property I would like to buy. Please draft a letter to the owners expressing my interest to purchase and convincing them of completing a private sale with me. List the benefits of private sale and how it will be done with our lawyers." readOnly />
              <Textarea mt={2} value="Sample response from Model B" readOnly />
            </Box>
          </HStack>
        </Box>

        <Box>
          <Heading as="h2" size="md">
            Voting
          </Heading>
          <HStack spacing={4} mt={2}>
            <Button>A is better</Button>
            <Button>B is better</Button>
            <Button>Tie</Button>
            <Button>Both are bad</Button>
          </HStack>
        </Box>

        <Box>
          <Heading as="h2" size="md">
            Input
          </Heading>
          <HStack spacing={4} mt={2}>
            <Input placeholder="Enter your prompt" />
            <Button>Send</Button>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default ChatbotArena;
