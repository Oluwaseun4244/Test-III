import React from "react";
import {
  Text,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Select,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";

export default function DataRow({item}) {
  const navigate = useNavigate();

  const gotoDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <Stack
      py="12px"
      px="30px"
      boxShadow="0px 9px 16px rgba(159, 162, 191, 0.1), 9px 0px 16px rgba(159, 162, 191, 0.1)"
      spacing="2%"
      direction={["row"]}
      rounded="10px"
      bg="#FEFEFE"
      my="10px"
      w="100%"
      cursor="pointer"
      onClick={() => gotoDetails(item)}
    >
      <Box w={{ base: "initial", md: "10%" }}>
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="#363865"
          lineHeight="16px"
        >
          T10786LA
        </Text>
      </Box>
      <Spacer />
      <Box
        w={{ base: "initial", md: "10%" }}
        display={{ base: "none", md: "initial" }}
      >
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="#363865"
          lineHeight="16px"
        >
          03-JAN-2022 14:09
        </Text>
      </Box>
      <Spacer />
      <Box
        w={{ base: "initial", md: "10%" }}
        display={{ base: "initial", md: "none" }}
      >
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="#363865"
          lineHeight="16px"
        >
          03-JAN-2022 14:09
        </Text>
      </Box>
      <Spacer />
      <Box
        w={{ base: "initial", md: "10%" }}
        display={{ base: "none", md: "initial" }}
      >
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="#363865"
          lineHeight="16px"
        >
          03-JAN-2022 14:09
        </Text>
      </Box>
      <Spacer />
      <Box
        w={{ base: "initial", md: "10%" }}
        display={{ base: "none", md: "initial" }}
      >
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="#363865"
          lineHeight="16px"
        >
          72262558
        </Text>
      </Box>
      <Spacer />
      <Box
        w={{ base: "initial", md: "10%" }}
        display={{ base: "none", md: "initial" }}
      >
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="#363865"
          lineHeight="16px"
        >
          Maseliz Ajah Lagos
        </Text>
      </Box>
      <Spacer />
      <Box
        w={{ base: "initial", md: "10%" }}
        display={{ base: "none", md: "initial" }}
      >
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="#363865"
          lineHeight="16px"
        >
          Oregun Depot
        </Text>
      </Box>
      <Spacer />
      <Box w={{ base: "initial", md: "10%" }}>
        <Text
          fontFamily="Roboto"
          fontSize="14px"
          fontWeight="400"
          color="#363865"
          lineHeight="16px"
        >
          40
        </Text>
      </Box>
    </Stack>
  );
}
