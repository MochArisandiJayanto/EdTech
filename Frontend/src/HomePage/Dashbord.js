import React from "react";
import { Grid, GridItem, Heading, Flex, Box, Image } from '@chakra-ui/react'
import "./Dashbord.css";

export default function Dashbord() {
    return (
        <Flex direction={"column"} alignItems='center' marginTop={30}>
            <h1 className="judul">Welcome to EdTEch!</h1>
            <p class="jdul">Situs website yang memberikan sebuah informasi mengenai lomba, seminar, beasiswa dan modul-modul pembelajaran yang up to date</p>

            <Grid gridTemplateColumns={'repeat(3, 1fr)'} gap={3} marginTop={100}>

                <GridItem>
                    <Box position={"relative"} transition={'.2s'} _hover={{ transform: 'scale(1.1)', zIndex: 5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}>
                        <Image height="-moz-min-content" src="https://user-images.githubusercontent.com/30518462/173663571-a418fbd7-cb38-4941-a723-0c1b0bcebca5.png" alt='Content image' />
                    </Box>
                </GridItem>
                <GridItem marginTop={10}>
                    <Box position={"relative"} transition={'.2s'} _hover={{ transform: 'scale(1.1)', zIndex: 5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}>
                        <Image height="-moz-min-content" src="https://user-images.githubusercontent.com/30518462/173665075-a40f8799-c145-4a89-b1c0-5ba52e85b59c.png" alt='Content image' />
                    </Box>
                </GridItem>
                <GridItem>
                    <Box position={"relative"} transition={'.2s'} _hover={{ transform: 'scale(1.1)', zIndex: 5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}>
                        <Image height="-moz-min-content" src="https://user-images.githubusercontent.com/30518462/173665758-18f597fe-bafb-4bd7-935a-7f8a1c1a5c03.png" alt='Content image' />
                    </Box>
                </GridItem>
            </Grid>
        </Flex>
    )
}