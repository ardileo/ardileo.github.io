import {
  Box,
  Card,
  CardBody,
  CardHeader,
  useColorModeValue,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Avatar,
  Stack,
  StackDivider,
  UnorderedList,
  ListItem,
  useColorMode,
  useBreakpoint,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";


import contentExperience from "../../data/experience.json";
import { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCreative, Controller } from "swiper";
import { ContentSectionContext, IContentSectionContext } from "./content-section";

interface ContentSectionProps {
  withDetail?: boolean;
  [x: string]: any;
}

export const ContentExperience = ({ withDetail }: ContentSectionProps) => {
  const { colorMode } = useColorMode();
  const breakpoint = useBreakpoint({ ssr: true });
  const swiperRef = useRef<SwiperRef>();
  const parentContext = useContext<IContentSectionContext>(ContentSectionContext);

  const cardBg = useColorModeValue("whiteAlpha.700", "#262d35");

  const datas = contentExperience.data;
  const getImageByTheme = (companyPicture: { base: string; dark: string }) => {
    return colorMode === "dark" ? companyPicture.dark : companyPicture.base;
  };

  useEffect(() => {
    parentContext.elementTitle.current.style.position = 'relative'
    parentContext.elementTitle.current.style.zIndex = '9999999'
  }, [parentContext])

  const swiperProps: SwiperProps = {
    spaceBetween: 15,
    grabCursor: true,
    navigation: true,
    autoHeight: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
      2000: {
        slidesPerView: 3,
      },
    },
    pagination: { clickable: true, },
    modules: [Pagination, Navigation],
  }

  return (
    <Box maxW="full" mt={25}  >
      <Swiper
        {...swiperProps}
        ref={swiperRef as any}
        style={{
          overflow: "unset",
          zIndex: 'auto',
          padding: useBreakpointValue(
            {
              base: '0 12px',
              sm: '0 17px',
            },
          )
        }}
      >

        {datas.map((item, idx) => (
          <SwiperSlide key={idx} >
            <Card
              p={{ base: 2, md: 4 }}
              size="sm"
              boxShadow="xl"
              borderRadius="xl"
              transition=".25s ease"
              bg={cardBg}
              _hover={{
                transform: "translateY(-3px)",
              }}
            >
              <CardHeader display={"flex"}>
                <Avatar
                  mr={2}
                  name={item.companyName}
                  loading="lazy"
                  src={getImageByTheme(item.companyPicture)}
                />
                <Flex
                  flex={1}
                  flexWrap="wrap"
                  gap={{ base: 1, md: 2 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Box flex="auto">
                    <Heading
                      size={{ base: "sm", md: "md" }}
                      textTransform="uppercase"
                      letterSpacing={1}
                    >
                      {item.companyName}{" "}
                    </Heading>
                    <Text fontSize={{ base: "xs", md: "unset" }}>
                      {item.activeDate}
                    </Text>
                  </Box>
                  <Text width={"auto"} fontSize={{ base: "sm", md: "unset" }}>
                    {item.position}
                  </Text>
                </Flex>
              </CardHeader>
              <CardBody hidden={!withDetail} mt={2}>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Summary
                    </Heading>
                    <UnorderedList pt="2" fontSize="sm" mx={5}>
                      {item.jobSummary.map((sumDat, idx) => (
                        <ListItem key={idx}>{sumDat}</ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}

      </Swiper>

      {swiperRef &&
        <Box
          // bg={'red'}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue("gray.100", "gray.800")}
          className="sliderNavMask"
          height={(swiperRef.current?.swiper.wrapperEl.offsetHeight || 0) + 120}
          marginTop={('-' + (swiperRef.current?.swiper.wrapperEl.offsetHeight || 0) * 2 / 1.3)}
          marginLeft={'-3rem'}
          marginRight={'-2.5rem'}
          marginBottom={-15}
          transition="background .75s ease"
        />
      }
    </Box >
  )
}