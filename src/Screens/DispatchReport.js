import {
  Text,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Spacer,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router";

function DispatchReport() {
  const navigate = useNavigate();

  const { dispatch_id } = useParams();
  const data = [
    {
      property: "Truck Number",
      value: "T10786LA",
    },
    {
      property: "Scale Out",
      value: "03-JAN-2022 13:46:00",
    },
    {
      property: "Scale In",
      value: "03-JAN-2022 14:09:00",
    },
    {
      property: "Logon Number",
      value: "724684797",
    },
    {
      property: "Destination",
      value: "Maseliz Ajah Lagos",
    },
    {
      property: "Customer's Name",
      value: "Oregun Depot",
    },
    {
      property: "Tonnage",
      value: "40",
    },
  ];

  const goBack = () => {
    navigate("/");
  };
  return (
    <Box h="full" px={{ base: "24px", md: "50px" }} bg="#F8F8F9">
      <Box pt="50px">
        <Text
          fontFamily="Roboto"
          color="#383452"
          fontWeight="500"
          fontSize="19px"
        >
          Dispatch Report Details
        </Text>
      </Box>

      <Stack pt="18px" direction={["row"]} w="100%">
        <InputGroup size="lg" w={{ base: "55%", md: "180px" }}>
          <InputLeftElement>
            <BsSearch />
          </InputLeftElement>
          <Input bg="#F2F2F2" placeholder="Search Report" />
        </InputGroup>
        {/* <Spacer />
          <Select
            rounded="8px"
            border="1px solid #393B68"
            w="100px"
            color="#363865"
            placeholder="Today"
          /> */}
      </Stack>

      <Box
        px="20px"
        pb="30px"
        mt="16px"
        mb="30px"
        shadow="0px 9px 16px rgba(159, 162, 191, 0.1), 9px 0px 16px rgba(159, 162, 191, 0.1);"
        rounded="8px"
        bg="#FEFEFE"
      >
        <Box rounded="5px" bg="white">
          {data.map((item, i) => (
            <Stack
              key={i}
              alignItems="center"
              pt="16px"
              w="100%"
              direction={["row"]}
            >
              <Box>
                <Text
                  fontFamily="Roboto"
                  fontSize="14px"
                  fontWeight="500"
                  color="#363865"
                  fontStyle="normal"
                >
                  {item.property}
                </Text>
              </Box>
              <Spacer />
              <Box
                w="126px"
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
                  {item.value}
                </Text>
              </Box>
            </Stack>
          ))}

          <Center my="20px">
            <Button onClick={goBack} w="160px" bg="#363865" color="white">
              Close
            </Button>
          </Center>
        </Box>
      </Box>
    </Box>
  );
}

export default DispatchReport;
