import React from "react";
import {
    chakra,
    Flex,
    HStack,
    Button,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Center,
    Grid,
    GridItem,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <React.Fragment>
            <chakra.header
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >

                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <Flex>
                        <Image src="https://user-images.githubusercontent.com/30518462/172759353-f055f304-6b47-457b-abb1-ba2c2256c7cd.png" alt="Instagram" maxW={"80px"} aria-label="App Logo" />
                        <chakra.h1 fontSize="xl" fontWeight="medium" ml="2" color={"black"}>
                            EdTech
                        </chakra.h1>
                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="black"
                        >
                            <Button to={"/Home"} as={Link} colorScheme='black' variant="ghost">Home</Button>
                            <Button to={"/Kelas"} as={Link} colorScheme='black' variant="ghost">Kelas</Button>
                        </HStack>
                        <HStack
                            spacing={1}
                            mr={1}
                            color={"#006D77"}
                        >
                            <Button onClick={onOpen} colorScheme={"#006D77"} size="sm" variant='ghost'>
                                Login
                            </Button>
                        </HStack>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="white"
                            bg={"#006D77"}
                            borderRadius='20px'
                        >
                            <Button onClick={onOpen} variant="ghost" borderRadius='20px' size="sm">Register</Button>
                        </HStack>
                    </HStack>
                </Flex>
            </chakra.header>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent borderRadius="20" width={{md: "400px", base: "400px"}} height={{md: "500px", base: "500px"}}>
                    <ModalHeader color="#006D77" fontSize={30}><Center>Login EdTech</Center></ModalHeader>
                    <Grid templateColumns='repeat(10, 1fr)' gap={1}>
                        <GridItem colSpan={6} textAlign="right">Don't have account?</GridItem>
                        <GridItem color="red" colStart={8}><a href="#">Register</a></GridItem>
                    </Grid>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex width="full" align="center" justifyContent="center">
                            <Box p={2}>
                                <Box my={4} textAlign="left">
                                    <form>
                                        <FormControl>
                                            <FormLabel>Email</FormLabel>
                                            <Input type="email" placeholder="test@test.com"/>
                                        </FormControl>
                                        <FormControl mt={6}>
                                            <FormLabel>Password</FormLabel>
                                            <Input type="password" placeholder="*******" />
                                        </FormControl>
                                        <Button width="full" mt={2} type="submit">
                                            Sign In
                                        </Button>

                                        <Center fontSize={15} mt={2}><p>Atau Masuk Dengan</p></Center>
                                        <Button width="full" mt={2} type="submit" bg="#CB4539" color={"white"}>
                                        <Image src="https://img.icons8.com/color/20/undefined/google-logo.png" marginRight={5}/>
                                            Login with google
                                        </Button>
                                    </form>
                                </Box>
                            </Box>
                        </Flex>
                    </ModalBody>
                    {/* <ModalFooter>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </React.Fragment>
    );
}