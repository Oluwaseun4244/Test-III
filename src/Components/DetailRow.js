import React from "react";
import { Text, Box, Stack, Spacer } from "@chakra-ui/react";

function DetailRow({ property, value }) {
  return (
    <Stack alignItems="center" pt="16px" w="100%" direction={["row"]}>
      <Box>
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="500"
          color="#363865"
          fontStyle="normal"
        >
          {property}
        </Text>
      </Box>
      <Spacer />
      <Box
        w={{ base: "126px", md: "300px" }}
        px={2}
        py={{ base: "15px", md: "15px" }}
        bg="#F4F6F6"
        rounded="6px"
        h="60px"
      >
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          textAlign="center"
          color="#363865"
          fontWeight="600"
        >
          {" "}
          {value}
        </Text>
      </Box>
    </Stack>
  );
}

export default DetailRow;
