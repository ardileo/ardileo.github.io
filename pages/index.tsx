import { Box, Container, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { ContentExperience } from '../components/section/content-experience';
import { ContentSection } from '../components/section/content-section';
import { IntroHeader } from '../components/section/intro-header';

export default function Main() {

  return (
    <Flex
      rounded={'md'}
      m={10}
      direction={'column'}
    >
      <IntroHeader />
      <ContentSection
        title="Experience">
        <ContentExperience />
      </ContentSection>
      <ContentSection
        title="Project">

      </ContentSection>
      <ContentSection
        title="Blogs">

      </ContentSection>

    </Flex>
  );
}
