import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack spacing={4} align="stretch">
      <Box>
        <Image src={imageSrc} alt={title} />
      </Box>
      <Box>
        <Heading as="h4" size="md">
          {title}
        </Heading>
      </Box>
      <Box>
        <Text fontSize="xs">{description}</Text>
      </Box>
      <Box>
        <HStack>
          <Text as="b">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Box>
    </VStack>
  );
};

export default Card;
