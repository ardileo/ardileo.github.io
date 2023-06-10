import React, { useContext, useEffect, useRef, useState } from "react"
import { MainContext } from "../../utils/context/main-context";
import { Box, Flex, Spacer, useColorModeValue, Text, useColorMode, Card, CardBody } from "@chakra-ui/react";
import { render } from "react-dom";
import { ContentSection } from "../../components/section/content-section";
import { ContentExperience } from "../../components/section/content-experience";
import Head from "next/head";
import styles from './styles.module.css'
import SideMenuMain from "../../components/section/side-menu-main";

const usePrevious = (value: any) => {
    const ref = useRef<any>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}


const Full: React.FC<any> = (props: any) => {
    const ctx = useContext(MainContext);
    const heroRef = React.useRef<any>()
    const { colorMode, toggleColorMode } = useColorMode();
    const prevIsHide = usePrevious(ctx.hideSideBar);

    useEffect(() => {
        if (ctx.hideSideBar) {
            window.scroll({ behavior: 'smooth', top: 0 })
        } else {
            window.scroll({ behavior: 'smooth', top: heroRef.current.offsetHeight })
        }

    }, [ctx.hideSideBar, prevIsHide])

    useEffect(() => {
        const onScroll = () => {
            let isShow = false;
            var sticky = heroRef.current.offsetHeight;

            if (window.pageYOffset > sticky || (window.pageYOffset > (sticky / 2))) {
                isShow = false;
            } else {
                isShow = true;
            }
            ctx.setHideSideBar(isShow);

        }
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Flex direction={'column'}>
                <Head>
                    <title>{ctx.meta.name}</title>
                    <meta property="og:title" content={ctx.meta.name} key="title" />
                </Head>

                <Box height={'100vh'}
                    ref={heroRef}
                    className={styles.heroHomeWrapper}>

                    <Flex transition=".75s"
                        h={'full'}
                        bg={useColorModeValue("#c1c1c1ad", "blackAlpha.800")}
                        alignContent={'center'}
                        justifyContent={'center'}

                    >
                        <Box
                            m={{ base: 5, md: 10 }}
                            rounded={'2xl'}
                            minH={'20vh'}
                            shadow={'2xl'}
                            backgroundColor={colorMode === 'light' ? '#f1f4f7b8' : '#363e484f'}
                            backdropFilter="auto"
                            backdropBlur="9px"
                            minW={'30vw'}
                            overflow={'auto'}
                            transition="1s ease-out"
                            // animation={`2s ease ${styles.bounce7}`}
                            transform={!ctx.hideSideBar ? 'scale(0) rotate(60deg) translateY(-240%) translateX(240%)' : undefined}
                            transformOrigin={'100% 90%'}
                        >
                            <SideMenuMain />
                        </Box>
                    </Flex>
                </Box >

                <Flex
                    m={{ base: 6, md: 10 }}
                    direction={'column'}
                >
                    <ContentSection title="Experience">
                        <ContentExperience withDetail={false}></ContentExperience>
                    </ContentSection>
                </Flex >

                <Box height={'70vh'}>
                    {JSON.stringify(ctx)}
                </Box>

            </Flex >
        </>
    )
}

export async function getStaticProps() {
    return {
        // notFound: true,
        props: { dynamicSideBar: true }
    }
}

export default Full