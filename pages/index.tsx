import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { ContentExperience } from '../components/section/content-experience';
import { ContentProject } from '../components/section/content-project';
import { ContentSection } from '../components/section/content-section';
import { IntroHeader } from '../components/section/intro-header';
import React, { useContext } from 'react';
import { MainContext } from '../utils/context/main-context';

export default function Main(props: any) {
  const { data } = props
  const { meta } = useContext(MainContext)

  return (
    <Flex
      m={{ base: 6, md: 10 }}
      direction={'column'}
    >
      <Head>
        <title>{meta.name}</title>
        <meta property="og:title" content={meta.name} key="title" />
      </Head>

      <IntroHeader />

      <ContentSection title="Experience">
        <ContentExperience withDetail={false}></ContentExperience>
      </ContentSection>

      <ContentSection title="Projects">
        <ContentProject />
      </ContentSection>

      {/* <ContentSection title="Blogs">
      </ContentSection> */}

    </Flex>
  );
}
