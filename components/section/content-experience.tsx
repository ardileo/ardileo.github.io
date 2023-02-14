import { Box, Card, CardBody, CardHeader, useColorModeValue, Heading, Spacer, Text, SimpleGrid, Flex, Avatar, IconButton, Stack, StackDivider, UnorderedList, ListItem } from "@chakra-ui/react"

export const ContentExperience = ({ title, children }: any) => {
    return (
        <SimpleGrid spacing={4} columns={{ base: 1, md: 2 }} m={5} >
            <Card p={4} size='sm'
                boxShadow='2xl' borderRadius='xl'
                bg={useColorModeValue('#F7FAFC', '#262d35')}
            >
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
            <Card p={4} size='sm'
                boxShadow='2xl' borderRadius='xl'
                bg={useColorModeValue('#F7FAFC', '#262d35')}

            ></Card>
        </SimpleGrid>
    )
}
