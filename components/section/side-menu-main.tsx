import { FaRegEnvelope, FaRegFilePdf, FaLinkedinIn } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";
import {
  Avatar,
  Flex,
  Stack,
  Text,
  Button,
  Heading,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";

export default function SideMenuMain() {
  const profileKu = {
    name: "Ardi Leo",
    username: "@LeyoNaga",
    shortBio: "Developer ∙ Open Sourcerer ∙ Tech Enthusiast",
    avatar: "./assets/img/ardileo_github_io_profile_avatar.jpg",
  };
  const socialMedia = [
    {
      id: "linkedin",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/ardileo/",
    },
    {
      id: "instagram",
      icon: <SiInstagram />,
      url: "https://www.instagram.com/nagaleyo/",
    },
    { id: "twitter", icon: <SlSocialTwitter />, url: "" },
    { id: "email", icon: <FaRegEnvelope />, url: "" },
    { id: "resume", icon: <FaRegFilePdf />, url: "" },
  ];
  return (
    <Flex flexDirection={"column"} h={"full"}>
      <Stack flex={1} pt={"5vh"} px={5} alignItems={"center"}>
        <Avatar size={"2xl"} src={profileKu.avatar} mb={4} pos={"relative"} />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {profileKu.name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {profileKu.username}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {" "}
          {profileKu.shortBio}
        </Text>
      </Stack>
      <Stack
        alignItems={"center"}
        px={10}
        direction={"row"}
        justifyContent="center"
        spacing={-1}
      >
        {socialMedia.map((item) => {
          return (
            <IconButton
              key={item.id}
              onClick={(e) =>
                item.url ? window.open(item.url, "_blank") : e.preventDefault()
              }
              size="lg"
              animation="1s ease-out 0s 1 slideInFromBottom"
              transform="scale(1.1)"
              aria-label={item.id}
              variant={"ghost"}
              isRound
              icon={item.icon}
            />
          );
        })}
        ;
      </Stack>
      <Stack p={10} direction={"row"} spacing={4}>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          _focus={{
            bg: "gray.200",
          }}
        >
          Message
        </Button>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
        >
          Follow
        </Button>
      </Stack>
    </Flex>
  );
}
