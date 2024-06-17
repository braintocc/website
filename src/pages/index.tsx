import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StraightforwardView from '@site/src/components/StraightforwardView';
import { ManageYour } from '@site/src/components/ManageYour';

import Tweet from '@site/src/components/Tweet';
import Tweets, {type TweetItem} from '@site/src/data/tweets';

import Quotes from '@site/src/data/quotes';
import clsx from 'clsx';
import styles from './index.module.css';


import Translate, {translate} from '@docusaurus/Translate';



function TweetsSection() {
  const tweetColumns: TweetItem[][] = [[], [], []];
  Tweets.filter((tweet) => tweet.showOnHomepage).forEach((tweet, i) =>
    tweetColumns[i % 3]!.push(tweet),
  );

  return (
    <div className={clsx(styles.section)}>
      <div className="container">
        <div as="h2" className={clsx('margin-bottom--lg', 'text--center')}>
        <h1>Loved By Content Creators</h1>
        </div>
        <div className={clsx('row', styles.tweetsSection)}>
          {tweetColumns.map((tweetItems, i) => (
            <div className="col col--4" key={i}>
              {tweetItems.map((tweet) => (
                <Tweet {...tweet} key={tweet.url} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuotesSection() {
  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className="row">
          {Quotes.map((quote) => (
            <div className="col" key={quote.name}>
               <div className="avatar avatar--vertical margin-bottom--sm">
                <img
                  alt={quote.name}
                  className="avatar__photo avatar__photo--xl"
                  src={quote.thumbnail}
                  style={{overflow: 'hidden'}}
                />
                <div className="avatar__intro padding-top--sm">
                  <div className="avatar__name">{quote.name}</div>
                  <small className="avatar__subtitle">{quote.title}</small>
                </div>
              </div>
              <p className="text--center text--italic padding-horiz--md">
                {quote.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
        <StraightforwardView />
        <TweetsSection />
        <QuotesSection />
      </main>
    </Layout>
  );
}
