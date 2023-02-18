import { Box, Card, CardBody, CardHeader, useColorModeValue, Heading, Text, SimpleGrid, Flex, Avatar, Stack, StackDivider, UnorderedList, ListItem, useColorMode } from "@chakra-ui/react"
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import contentExperience from '../../data/experience.json';

interface ContentSectionProps {
    withDetail?: boolean,
    [x: string]: any
}

export const ContentExperience = ({ withDetail }: ContentSectionProps) => {
    const { colorMode } = useColorMode();
    const settings: Settings = {
        dots: true,
        slidesToShow: 2,
        rows: 1,
        infinite: false,
        slidesToScroll: 1,
        adaptiveHeight: true,
        initialSlide: 0,
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 576, // small
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992, // large / horizon tab
                settings: {
                    slidesToShow: 3,
                }
            },
        ],
    };

    const datas = contentExperience.data;
    const getImageByTheme = (companyPicture: { base: string; dark: string; }) => {
        return colorMode === "dark" ? companyPicture.dark : companyPicture.base;
    }
    const cardBg = useColorModeValue('whiteAlpha.700', '#262d35');
    return (
        <SimpleGrid columns={1}>
            <Slider {...settings}>
                {datas.map((item, keyIdx) => (
                    <Box p={4} key={keyIdx}>
                        <Card p={{ base: 2, md: 4 }} size='sm'
                            boxShadow='lg' borderRadius='xl'
                            bg={cardBg}>
                            <CardHeader display={'flex'} >
                                <Avatar mr={2} name={item.companyName} loading="lazy" src={getImageByTheme(item.companyPicture)} />
                                <Flex flex={1} flexWrap='wrap' gap={{ base: 1, md: 2 }} direction={{ base: 'column', md: 'row' }}>
                                    <Box flex="auto"  >
                                        <Heading size={{ base: 'sm', md: 'md' }} textTransform='uppercase' letterSpacing={1}> {item.companyName} </Heading>
                                        <Text fontSize={{ base: 'xs', md: 'unset' }}>{item.activeDate}</Text>
                                    </Box>
                                    <Text width={'auto'} fontSize={{ base: 'sm', md: 'unset' }} >{item.position}</Text>
                                </Flex>
                            </CardHeader>
                            <CardBody hidden={!withDetail} mt={2}>
                                <Stack divider={<StackDivider />} spacing='4'>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>Summary</Heading>
                                        <UnorderedList pt='2' fontSize='sm' mx={5}>
                                            {item.jobSummary.map((sumDat, idx) => (<ListItem key={idx}>{sumDat}</ListItem>))}
                                        </UnorderedList>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Tools
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {item.tools.map(el => el.title).join(', ')}
                                        </Text>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Box>
                ))}
            </Slider>
        </SimpleGrid>
    );
}
