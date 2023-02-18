import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { ContentExperience } from '../components/section/content-experience';
import { ContentProject } from '../components/section/content-project';
import { ContentSection } from '../components/section/content-section';
import { IntroHeader } from '../components/section/intro-header';

export default function Main({ data }: any) {
  return (
    <Flex
      rounded={'md'}
      m={{ base: 6, md: 10 }}
      direction={'column'}
    >
      <Head>
        <title>Ardi Leo</title>
        {/* <meta property="og:title" content="My page title" key="title" /> */}
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
