import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Spacer,
  Square,
  Stack,
  Text,
  useBreakpoint,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Error from 'next/error';

import SideMenuBlog from "./section/side-menu-blog";
import SideMenuMain from "./section/side-menu-main";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import getBreakPoint from "../utils/breakpoint";
import { useRouter } from "next/router";
import { ReactElement } from "react";


interface ILayoutProps {
  children: ReactElement
  pageProps: any
  data: any
}
export default function Layout({ children, pageProps, data }: ILayoutProps) {
  // const route = useRouter()
  // const pageError = data?.statusCode ? {
  //   statusCode: data.statusCode
  // } : null;


  // if (pageError) {
  //   return <Error statusCode={pageError.statusCode} />
  // }

  return <MainLayout {...{ children }} />
}

const MainLayout = ({ children }: any) => {
  const pageName: string = children.key;
  const breakpoint = useBreakpoint({ ssr: true });
  const { colorMode, toggleColorMode } = useColorMode();
  const sideMenu = getRightSideComponent(pageName);

  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <Box
        flex={1}
        justifyContent={'center'}
        transition=".75s ease"
        bg={useColorModeValue("gray.100", "gray.800")}
        minH={{ base: "90vh", md: "100vh" }}
        overflow={'hidden'}
      >
        {children}

        {(getBreakPoint(breakpoint) > 480) && <FootNote />}
      </Box>
      <Box w={{ base: "full", md: "18rem", lg: "22rem" }}>
        <Box
          pos={{ md: "fixed" }}
          w={{ base: "full", md: "inherit" }}
          h={"full"}
          transition=".75s ease"
          bg={useColorModeValue("#F7FAFC", "#151b25")}
        >
          <Button
            onClick={toggleColorMode}
            pos={{ base: "absolute", md: "fixed" }}
            opacity={0.5}
            m={2}
            right={0}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          {sideMenu}
        </Box>

        {(getBreakPoint(breakpoint) <= 480) && <>
          <FootNote forSidePosition />
        </>}

      </Box>
    </Flex >
  )
}

const getRightSideComponent = (pageName: string) => {
  switch (pageName?.toLocaleLowerCase()) {
    case "blog":
      return <SideMenuMain />;
    default:
      return <SideMenuMain />;
  }
};


const FootNote = ({ forSidePosition }: any) => {
  return (
    <Box id="footNote"
      alignItems={'center'}
      px={5}
      pb={forSidePosition ? 10 : 3}
      pt={3}
      borderTop={'1px solid'}
      borderTopColor={useColorModeValue("#e3e8eb", "#262d35")}
      transition=".75s ease"
      bg={useColorModeValue("#F7FAFC", "#151b25")}
    >
      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
        fontSize='sm'
        colorScheme="gray"
      >
        Copyleft ©{new Date().getFullYear()} - Made with ❤️ by ardileo
      </Text>
    </Box>
  )
}