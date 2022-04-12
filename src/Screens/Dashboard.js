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
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function Dashboard() {
  const navigate = useNavigate();

  const gotoDetails = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <Box
      // pb="40px"
      px={{ base: "0px", md: "50px" }}
      bg={{ base: "#F8F8F9", md: "#F8F8F9" }}
      py={{ base: "0px", md: "40px" }}
      h="full"
    >
      <Box display={{ base: "none", md: "initial" }}>
        <Text color="#383452" fontWeight="700" fontSize="24px">
          Dashboard
        </Text>
        <Text color="#696A86" fontWeight="500" fontSize="16px">
          Dispatch Report
        </Text>
      </Box>

      <Box
        px="20px"
        my="30px"
        pb="20px"
        mt="16px"
        rounded={{ base: "0px", md: "10px" }}
        bg={{ base: "#FEFEFE", md: "#FEFEFE" }}
      >
        <Stack
          display={{ base: "flex", md: "none" }}
          pt="30px"
          direction={["row"]}
          w="100%"
        >
          <Button
            shadow="0px 4px 90px rgba(163, 171, 185, 0.24)"
            w="160px"
            bg="#363865"
            color="white"
          >
            Dispatch
          </Button>
          <Spacer />
          <Button
            border="1px solid #363865"
            w="160px"
            bg="#F2F2F2"
            color="#363865"
            shadow="0px 4px 90px rgba(163, 171, 185, 0.24)"
          >
            Fuel Log
          </Button>
        </Stack>

        <Stack
          flexDirection={{ base: "row-reverse", md: "row" }}
          pt="30px"
          direction={["row"]}
          w="100%"
        >
          <InputGroup w={{ base: "160px", md: "250px" }}>
            <InputLeftElement>
              <BsSearch />
            </InputLeftElement>
            <Input bg="#F2F2F2" placeholder="Search report" />
          </InputGroup>
          <Spacer />
          <Box
            rounded="10px"
            shadow="0px 4px 90px rgba(163, 171, 185, 0.24)"
            w="100px"
            border="1px solid #393B68"
          >
            <Select border="none" w="100%" placeholder="Today">
              <option>Custom</option>
              <option>Yesterday</option>
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
              <option>Last Month</option>
            </Select>
          </Box>
        </Stack>

        <Stack
          py="12px"
          px={{ base: "20px", md: "30px" }}
          boxShadow="0px 9px 16px rgba(159, 162, 191, 0.1), 9px 0px 16px rgba(159, 162, 191, 0.1)"
          spacing="2%"
          direction={["row"]}
          mt="30px"
          rounded="10px"
          bg="white"
          w="100%"
          alignItems="center"
        >
          <Box w={{ base: "initial", md: "10%" }}>
            <Text
              fontSize="14px"
              fontFamily="Roboto"
              fontWeight="600"
              color="#363865"
            >
              Truck Number
            </Text>
          </Box>
          <Spacer />
          <Box
            w={{ base: "initial", md: "10%" }}
            display={{ base: "none", md: "initial" }}
          >
            <Text
              fontSize="14px"
              fontFamily="Roboto"
              fontWeight="600"
              color="#363865"
            >
              Scale In
            </Text>
          </Box>
          <Spacer />
          <Box
            w={{ base: "initial", md: "10%" }}
            display={{ base: "initial", md: "none" }}
          >
            <Text
              fontSize="14px"
              fontFamily="Roboto"
              fontWeight="600"
              color="#363865"
            >
              Time & date
            </Text>
          </Box>
          <Spacer />

          <Box
            w={{ base: "initial", md: "10%" }}
            display={{ base: "none", md: "initial" }}
          >
            <Text
              fontSize="14px"
              fontFamily="Roboto"
              fontWeight="600"
              color="#363865"
            >
              Scale Out
            </Text>
          </Box>
          <Spacer />
          <Box
            w={{ base: "initial", md: "10%" }}
            display={{ base: "none", md: "initial" }}
          >
            <Text
              fontSize="14px"
              fontFamily="Roboto"
              fontWeight="600"
              color="#363865"
            >
              Logon Number
            </Text>
          </Box>
          <Spacer />
          <Box
            w={{ base: "initial", md: "10%" }}
            display={{ base: "none", md: "initial" }}
          >
            <Text
              fontSize="14px"
              fontFamily="Roboto"
              fontWeight="600"
              color="#363865"
            >
              Destination
            </Text>
          </Box>
          <Spacer />
          <Box
            w={{ base: "initial", md: "10%" }}
            display={{ base: "none", md: "initial" }}
          >
            <Text
              fontSize="14px"
              fontFamily="Roboto"
              fontWeight="600"
              color="#363865"
            >
              Customer's Name
            </Text>
          </Box>
          <Spacer />
          <Box w={{ base: "initial", md: "10%" }}>
            <Text
              fontSize="14px"
              fontFamily="Roboto"
              fontWeight="600"
              color="#363865"
            >
              Tonnage
            </Text>
          </Box>
        </Stack>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
          <Stack
            key={i}
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
        ))}
      </Box>
    </Box>
  );
}

export default Dashboard;
