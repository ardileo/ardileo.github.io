import { Box, Card, CardBody, CardHeader, useColorModeValue, Heading, Spacer, Text, SimpleGrid, Flex, Avatar, IconButton, Stack, StackDivider, UnorderedList, ListItem, CardFooter, Button, Container } from "@chakra-ui/react"
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";



export const ContentExperience = ({ title, children }: any) => {
    const settings: Settings = {
        dots: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
    };

    return (
        <Container maxW='full'>
            <Box maxW={{ base: '70vw', }} animation="1s ease-out 0s 1 slideInFromBottom" >
                <Slider {...settings} >
                    <Box p={4} >
                        <Card p={{ base: 2, md: 4 }} size='sm'
                            boxShadow='lg' borderRadius='xl'
                            bg={useColorModeValue('#F7FAFC', '#262d35')} >
                            <CardHeader display={'flex'} mb={2}>
                                <Avatar mr={2} name='Ardi Leo' loading="lazy" src='https://www.ocbcnisp.com/asset/media/OCBC/Favicon/Android/favicon-96x96.png' />
                                <Flex flex={1} flexWrap='wrap' gap={2} direction={{ base: 'column', md: 'row' }}>
                                    <Box flex={1}>
                                        <Heading size='md' textTransform='uppercase' letterSpacing={1}>
                                            PT OCBC NISP
                                        </Heading>
                                        <Text>Jun 2021 - Current</Text>
                                    </Box>
                                    <Text >IT Software Engineer</Text>
                                </Flex>
                            </CardHeader>
                            <CardBody >
                                <Stack divider={<StackDivider />} spacing='4'>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Summary
                                        </Heading>
                                        <UnorderedList pt='2' fontSize='sm' mx={5}>
                                            <ListItem>Lorem ipsum dolor sit amet</ListItem>
                                            <ListItem>Consectetur adipiscing elit</ListItem>
                                            <ListItem>Integer molestie lorem at massa</ListItem>
                                            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                                        </UnorderedList>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Tools
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            Check out the overview of your clients.
                                        </Text>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Box>
                    <Box p={4}>
                        <Card p={3} size='sm'
                            boxShadow='lg' borderRadius='xl'
                            bg={useColorModeValue('#F7FAFC', '#262d35')} >
                        </Card>
                    </Box>

                </Slider>
            </Box>
        </Container>
    );
}
