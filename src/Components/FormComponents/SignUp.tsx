import { Button, Center, FormControl } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input, Stack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { FormErrorMessage, FormHelperText } from "@chakra-ui/react";
import SignIn from "./SignIn";

interface Props {
  onClick: () => void;
}

export default function SignUp({ onClick }: Props) {
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);
  const isError = input === "";

  return (
    <div className="signup-div">
      <Flex>
        <Center>
          <Box color={"white"} ml={"20rem"}>
            <Heading>InVoicer</Heading>
          </Box>
        </Center>
        <Spacer />

        <Container pt={"5rem"} mr={"10rem"}>
          <Box
            w="30rem"
            h="36rem"
            color={"black"}
            bg={"white"}
            borderRadius={"1rem"}
          >
            <Box p={10}>
              <Heading>Sign Up</Heading>
            </Box>
            <Box pl={10}>
              <Text>
                Already have account?{" "}
                {/* <Link color="teal.500" href="#">
                  Sign in
                </Link> */}
                <Button colorScheme="teal" variant="ghost" onClick={onClick}>
                  Sign in
                </Button>
              </Text>
            </Box>
            <Box p={10}>
              <Stack spacing={3}>
                <FormControl>
                  <Input
                    mb={4}
                    type="text"
                    value={name}
                    variant="flushed"
                    placeholder="Name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setName(e.target.value)
                    }
                  />
                  <Input
                    mb={4}
                    type="email"
                    value={input}
                    variant="flushed"
                    placeholder="Email"
                    onChange={handleInputChange}
                  />
                  {!isError ? (
                    <FormHelperText>
                      We'll never share your email.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                  <Input
                    mb={4}
                    type="number"
                    variant="flushed"
                    placeholder="Phone no."
                  />
                  <Input
                    mb={4}
                    type="password"
                    variant="flushed"
                    placeholder="Password"
                  />
                </FormControl>
              </Stack>
            </Box>

            <Box ml={"20rem"}>
              <Button
                colorScheme="blue"
                borderRadius={"2rem"}
                w={"8rem"}
                onClick={() => {
                  !isError ? console.log(input) : null;
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </Flex>
    </div>
  );
}
