import {
  Box,
  Flex,
  Text,
  useBreakpoint,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Error from 'next/error';

import getBreakPoint from "../utils/breakpoint";

import { ReactElement, useContext, } from "react";
import { MainContext } from "../utils/context/main-context";
import React from "react";
import { SideMenuWrapper } from "./section/side-menu-wrapper";


interface ILayoutProps {
  children: ReactElement
  pageProps: any
}

export default function Layout({ children, pageProps }: ILayoutProps) {
  const Component = children;
  const { type, props: { statusCode: pageStatusCode } } = Component;
  const isPageError: boolean = pageStatusCode && pageStatusCode !== 200;
  const { colorMode, toggleColorMode } = useColorMode();
  if (isPageError) {
    children = (
      <>
        <Error
          statusCode={pageStatusCode}
          withDarkMode={colorMode === 'dark'}
        />
      </>
    )
  }

  return <MainLayout {...{ children }} />
}

const MainLayout = ({ children }: any) => {
  const pageName: string = children.key;
  const usingDynamicSideBar = children.props.dynamicSideBar;
  const breakpoint = useBreakpoint({ ssr: true });
  const ctx = useContext(MainContext);

  return (
    <>
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

        <SideMenuWrapper
          pageName={pageName}
          usingDynamicSideBar={usingDynamicSideBar}
          footNote={(getBreakPoint(breakpoint) <= 480) && <FootNote forSidePosition />} />

      </Flex >
    </>
  )
}

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
