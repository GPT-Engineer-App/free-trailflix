import React from "react";
import { Box, Flex, Text, Spacer, Image, Button, Container, Heading, SimpleGrid, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import { FaPlay, FaStar, FaBars, FaSearch } from "react-icons/fa";

const Index = () => {
  // Sample data for trailers
  const trailers = [
    { id: 1, title: "Movie Title 1", rating: 8.5 },
    { id: 2, title: "Movie Title 2", rating: 7.9 },
    { id: 3, title: "Movie Title 3", rating: 8.2 },
    // Add more trailers if needed
  ];

  return (
    <Box>
      <Flex as="header" p="4" bg="gray.700" color="white" align="center">
        <Heading size="md">TrailerStream</Heading>
        <Spacer />
        <HStack spacing="4">
          <Button leftIcon={<FaBars />} variant="ghost">
            Categories
          </Button>
          <Button leftIcon={<FaSearch />} variant="ghost">
            Search
          </Button>
        </HStack>
      </Flex>

      <Box as="section" bg="blue.600" color="white" py="20" textAlign="center">
        <VStack spacing="4">
          <Heading size="2xl">Watch Trailers Anytime, Anywhere</Heading>
          <Text fontSize="lg">Discover new and trending movie trailers</Text>
          <Button leftIcon={<FaPlay />} colorScheme="red" variant="solid" size="lg">
            Play Now
          </Button>
        </VStack>
      </Box>

      <Container as="main" maxW="container.xl" py="16">
        <Heading size="lg" mb="8">
          Trending Trailers
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
          {trailers.map((trailer) => (
            <Box key={trailer.id} bg="gray.100" borderRadius="md" overflow="hidden">
              <Image src={`https://images.unsplash.com/photo-1580130775562-0ef92da028de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0J0cmFpbGVyLnRpdGxlJTdEJTIwbW92aWUlMjBwb3N0ZXJ8ZW58MHx8fHwxNzEwMTcyNTIzfDA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`${trailer.title} Poster`} />
              <Box p="4">
                <Heading size="md" mb="2">
                  {trailer.title}
                </Heading>
                <Flex align="center">
                  <Icon as={FaStar} color="yellow.400" />
                  <Text ml="2" fontWeight="bold">
                    {trailer.rating}
                  </Text>
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box as="footer" bg="gray.800" color="gray.400" py="4" textAlign="center">
        <Text>&copy; {new Date().getFullYear()} TrailerStream. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
