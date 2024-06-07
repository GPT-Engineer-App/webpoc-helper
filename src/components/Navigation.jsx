import { HStack, Link } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <HStack spacing={4} as="nav">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/github">GitHub</Link>
      <Link href="/paper">Paper</Link>
      <Link href="/dataset">Dataset</Link>
      <Link href="/twitter">Twitter</Link>
      <Link href="/discord">Discord</Link>
    </HStack>
  );
};

export default Navigation;
