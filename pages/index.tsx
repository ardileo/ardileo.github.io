import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { ContentExperience } from '../components/section/content-experience';
import { ContentProject } from '../components/section/content-project';
import { ContentSection } from '../components/section/content-section';
import { IntroHeader } from '../components/section/intro-header';
import { useContext } from 'react';
import { MyAppContext } from '../utils/context';

export default function Main({ data }: any) {
  const { meta } = useContext(MyAppContext)

  return (
    <Flex
      rounded={'md'}
      m={{ base: 6, md: 10 }}
      direction={'column'}
    >
      <Head>
        <title>{meta.name}</title>
        <meta property="og:title" content={meta.name} key="title" />
      </Head>
      <IntroHeader />
      <ContentSection title="Experience">
        <ContentExperience withDetail={true}></ContentExperience>
      </ContentSection>
      <ContentSection title="Projects">
        <ContentProject />
      </ContentSection>
      {/* <ContentSection title="Blogs">
      </ContentSection> */}

    </Flex>
  );
}
