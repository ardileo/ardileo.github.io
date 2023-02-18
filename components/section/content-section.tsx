import { Box, Divider, Heading, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContentSectionProps {
    title: string,
    children: ReactNode
}

export const ContentSection = ({ title, children }: ContentSectionProps) => {
    return (
        <Box my={{ base: 8, md: 5 }}>
            <Heading
                textAlign={{ base: 'center', md: 'unset' }}
                color={useColorModeValue('gray.700', 'gray.400')}
                textTransform={'uppercase'} fontSize={'xl'} fontWeight={'400'} letterSpacing={5}
            >
                {title}
            </Heading>
            {children}
        </Box>
    )
}