import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";

import React from "react";
import SideMenuMain from "./side-menu-main";
import { MainContext } from "../../utils/context/main-context";

export const SideMenuWrapper = ({ pageName, footNote, usingDynamicSideBar }: any) => {
    const { colorMode, toggleColorMode, setColorMode } = useColorMode();
    const refSideNavMenu = React.useRef<HTMLDivElement>();
    const ctx = React.useContext(MainContext);

    React.useEffect(() => {
        if (usingDynamicSideBar) {
            if (ctx.hideSideBar) {
                refSideNavMenu.current?.classList.add('nav-sidebar-hide')
            } else {
                refSideNavMenu.current?.classList.remove('nav-sidebar-hide')
            }
        }
    }, [ctx.hideSideBar, usingDynamicSideBar])

    return (
        <Box w={{ base: "full", md: "18rem", lg: "22rem" }}
            transition=".75s ease"
            ref={refSideNavMenu as any}
        >
            <Box
                pos={{ md: "fixed" }}
                w={{ base: "full", md: "inherit" }}
                h={"full"}
                transition="all ease, background .75s"
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
                <SideMenuComponent pageName={pageName} />
            </Box>
            {footNote}
        </Box>
    )
}

const SideMenuComponent = ({ pageName }: any) => {
    switch (pageName?.toLocaleLowerCase()) {
        case "blog":
            return <SideMenuMain />;
        default:
            return <SideMenuMain />;
    }
};