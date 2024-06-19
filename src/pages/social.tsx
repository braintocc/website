import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Social from "../components/social";

export default function Home(): JSX.Element {  
    const {siteConfig} = useDocusaurusContext();
return (
  <Layout
    title={`${siteConfig.title}`}
    description="Private User Area">
    <main>
        <Social />
    </main>
  </Layout>)
}
