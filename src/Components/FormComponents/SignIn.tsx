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

interface Props {
  onClick: () => void;
}

export default function SignIn({ onClick }: Props) {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);
  const isError = input === "";

  return (
    <div className="signin-div">
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
              <Heading>Sign In</Heading>
            </Box>
            <Box pl={10}>
              <Text>
                New user ?{" "}
                {/* <Link color="teal.500" href="#">
                  create an account
                </Link> */}
                <Button colorScheme="teal" variant="ghost" onClick={onClick}>
                  create an account
                </Button>
              </Text>
            </Box>
            <Box p={10}>
              <Stack spacing={3}>
                <FormControl>
                  <Input
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
                </FormControl>

                <Input
                  type="password"
                  variant="flushed"
                  placeholder="Password"
                />
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
                Sign in
              </Button>
            </Box>
          </Box>
        </Container>
      </Flex>
    </div>
  );
}
