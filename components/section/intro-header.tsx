import { Box, Heading } from "@chakra-ui/react";

export function IntroHeader() {
    return (
        <Box id='bodyHeader' mb={8}>
            <Heading fontWeight={'normal'} mb={3}>
                Hi!, I&apos;m <b>Ardi Leo </b>👋
            </Heading>
            <Heading fontSize={'xl'} fontWeight={'normal'} fontFamily={'body'} color={'gray.400'}>
                Software Engineer dabbling with things on the interwebs
            </Heading>
        </Box>
    )
}