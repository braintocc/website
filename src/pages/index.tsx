import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import Head from '@docusaurus/Head';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();

  AOS.init();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <Head>
      <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
