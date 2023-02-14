import { Box, Button, Center, Container, Flex, Stack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import SideMenuBlog from './section/side-menu-blog';
import SideMenuMain from './section/side-menu-main';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Layout({ children, page }: any) {
    const pageName: string = page;
    const sideMenu = getRightSideComponent(pageName);
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex
            direction={{ base: 'column', md: 'row' }}>
            <Box
                flex={'1'}
                height="full" transition=".75s ease"
                bg={useColorModeValue('gray.100', 'gray.800')}
                minH={{ base: '90vh', md: '100vh' }}>
                {children}
                {/* <Box height={1280}></Box> */}
            </Box>
            <Box w={{ base: 'full', md: '18rem', lg: '22rem' }}>
                <Box
                    pos={{ md: 'fixed' }}
                    w={{ base: 'full', md: 'inherit' }}
                    h={'full'} transition=".75s ease"
                    bg={useColorModeValue('#F7FAFC', '#151b25')}>

                    <Button onClick={toggleColorMode}
                        pos={{ base: 'absolute', md: 'fixed' }}
                        opacity={.5}
                        m={2} right={0}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}

                    </Button>
                    {sideMenu}
                </Box>
            </Box>
        </Flex >
    );
}

const getRightSideComponent = (pageName: string) => {
    switch (pageName.toLocaleLowerCase()) {
        case 'blog':
            return <SideMenuMain />;
        default:
            return <SideMenuMain />;
    }
}
