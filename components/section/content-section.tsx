import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import React, { MutableRefObject, useState } from "react";
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
}

export interface IContentSectionContext {
  elementWrapper: MutableRefObject<HTMLElement>
  elementTitle: MutableRefObject<HTMLElement>
}

export const ContentSectionContext = React.createContext({} as IContentSectionContext);

export const ContentSection = ({ title, children }: ContentSectionProps) => {
  const elementWrapper = React.useRef({} as any);
  const elementTitle = React.useRef({} as any);

  return (
    <ContentSectionContext.Provider value={{ elementWrapper, elementTitle }}>
      <Box my={{ base: 8, md: 5 }}  >
        <Heading
          textAlign={{ base: "center", md: "unset" }}
          color={useColorModeValue("gray.700", "gray.400")}
          textTransform={"uppercase"}
          fontSize={"xl"}
          fontWeight={"400"}
          letterSpacing={5}
          ref={elementTitle}
        >
          {title}
        </Heading>
        {children}
      </Box>
    </ContentSectionContext.Provider>
  );
};
