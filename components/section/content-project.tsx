import { SearchIcon } from "@chakra-ui/icons";
import {
  Image,
  Box,
  useColorModeValue,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Button,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import contentProjects from "../../data/project.json";
type DataType = typeof contentProjects.data[0];

export const ContentProject = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDetail, setSelectedDetail] = useState<DataType>();

  const datas = contentProjects.data;
  const handleDetailClick = (item: DataType) => {
    setSelectedDetail(item);
    onOpen();
  };
  const boxBg = useColorModeValue("whiteAlpha.700", "#262d35");
  const boxAfter = {
    transition: "all .3s ease",
    content: '""',
    w: "full",
    h: "full",
    pos: "absolute",
    top: 2,
    left: 0,
    backgroundColor: useColorModeValue("gray.300", "gray.800"),
    filter: "blur(10px)",
    zIndex: -1,
  };
  const boxHover = {
    backgroundColor: useColorModeValue("#b0dff4", "#314556"),
    filter: "blur(20px)",
  };

  const iconButtonHover = {
    bg: useColorModeValue("gray.200", "gray.800"),
  };
  return (
    <Box maxW="full" mt={55} mx={{ base: 0, md: ".75rem" }}>
      <SimpleGrid
        columns={{ base: 2, sm: 2, md: 3 }}
        spacingX={{ base: 3, md: 5 }}
        spacingY={{ base: 65, md: 55 }}
      >
        {datas.map((item, keyIdx) => (
          <Box
            key={keyIdx}
            role={"group"}
            p={{ base: 3, md: 6 }}
            w={"full"}
            bg={boxBg}
            boxShadow={"lg"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              animation="1s ease-out 0s 1 slideInFromBottom"
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              cursor="zoom-in"
              onClick={() => handleDetailClick(item)}
              _after={boxAfter}
              _groupHover={{
                _after: { boxHover },
              }}
            >
              <Image
                rounded={"md"}
                width={"full"}
                objectFit={"cover"}
                alt={item.title}
                fallbackSrc="https://via.placeholder.com/480x320?text=Visit+Blogging.com+Now"
                src={item.thumbnail}
              />
            </Box>
            <Stack
              pt={5}
              direction={{ base: "column", sm: "row" }}
              align={"center"}
              textAlign={{ base: "center", md: "unset" }}
            >
              <Box flex={1}>
                <Text color={"gray.500"} fontSize={"xs"}>
                  {item.date}
                </Text>
                <Heading
                  fontSize={{ base: "sm", md: "md" }}
                  fontFamily={"body"}
                  my={1}
                  fontWeight={500}
                  w="full"
                >
                  {item.title}
                </Heading>
                <Text
                  color={"gray.500"}
                  fontSize={"xs"}
                  textTransform={"uppercase"}
                >
                  {item.category}
                </Text>
              </Box>
              <IconButton
                itemID="clickers"
                variant={"ghost"}
                w={{ base: "full", md: "unset" }}
                aria-label="Search database"
                onClick={() => handleDetailClick(item)}
                rounded={20}
                _hover={iconButtonHover}
                icon={<SearchIcon />}
              />
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"3xl"}
        closeOnOverlayClick={true}
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay
          backdropFilter={"grayscale(90%) blur(12px)"}
          bg="blackAlpha.300"
        />
        <ModalContent>
          <Image
            alt={selectedDetail?.title}
            width={"full"}
            objectFit={"cover"}
            fallbackSrc="https://via.placeholder.com/480x320?text=Visit+Blogging.com+Now"
            src={selectedDetail?.thumbnail}
          />
          {/* <ModalHeader>
                        <Text color={'gray.500'} fontSize={'xs'} >
                            {selectedDetail?.date}
                        </Text>
                        <Heading fontSize={{ base: 'sm', md: 'md' }} fontFamily={'body'} my={1} fontWeight={500} w="full">
                            {selectedDetail?.title}
                        </Heading>
                        <Text color={'gray.500'} fontSize={'xs'} textTransform={'uppercase'}>
                            {selectedDetail?.category}
                        </Text>
                    </ModalHeader> */}
          <ModalCloseButton />
          <ModalFooter>
            <Button colorScheme="blue" variant="outline">
              Visit
            </Button>
            <Button
              colorScheme="red"
              variant="outline"
              ml={3}
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
