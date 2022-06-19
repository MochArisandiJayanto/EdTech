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



export default function Register() {

  return (
    <React.Fragment>
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
        <ModalContent borderRadius="20" width={{md: "400px", base: "400px"}} height={{md: "600px", base: "600px"}}>
            <ModalHeader color="#006D77" fontSize={30}><Center>Register EdTech</Center></ModalHeader>
            <Grid templateColumns='repeat(10, 1fr)' gap={1}>
                <GridItem colSpan={6} textAlign="right">Already have account?</GridItem>
                <GridItem color="red" colStart={8}><a href="#">Login</a></GridItem>
            </Grid>
            <ModalCloseButton />
            <ModalBody>
                <Flex width="full" align="center" justifyContent="center">
                    <Box p={2}>
                        <Box my={4} textAlign="left">
                            <form>
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <Input type="email" placeholder="Masukkan Email"/>
                                </FormControl>
                                <FormControl mt={6}>
                                    <FormLabel>Nama</FormLabel>
                                    <Input type="nama" placeholder="Masukkan nama lengkap" />
                                </FormControl>
                                <FormControl mt={6}>
                                    <FormLabel>Nomor Hp</FormLabel>
                                    <Input type="nomor hp" placeholder="Masukkan nomor hp" />
                                </FormControl>
                                <FormControl mt={6}>
                                    <FormLabel>Password</FormLabel>
                                    <Input type="password" placeholder="Masukkan Password" />
                                </FormControl>
                                <Button width="full" mt={2} type="submit" bg="#CB4539" color={"white"}>
                                    Register
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Flex>
            </ModalBody>
        </ModalContent>
    </Modal>
</React.Fragment>
  )
}
