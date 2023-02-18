import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import Typed from "typed.js";

export function IntroHeader() {
    const data = {
        name: 'Ardi Leo',
        subtitle: 'Android Developer,Web Developer,Web Designer,UI/UX Designer'
    };

    useEffect(() => {
        const typed = new Typed('.text-slider', {
            strings: data.subtitle.split(','),
            typeSpeed: 80,
            loop: true,
            backDelay: 1100,
            backSpeed: 30
        });

        return () => {
            typed.destroy();
        };
    }, [])

    return (
        <Box id='bodyHeader' mb={8} >
            <Heading textAlign={{ base: 'center', md: 'unset' }} mb={3} fontWeight={'normal'}            >
                Hi!, I&apos;m <b>{data.name} </b>👋
            </Heading>
            <Heading textAlign={{ base: 'center', md: 'unset' }} fontSize={'xl'} fontWeight={'normal'} fontFamily={'body'} color={'gray.400'} >
                <span className="text-slider"></span>
            </Heading>
        </Box >
    )
}