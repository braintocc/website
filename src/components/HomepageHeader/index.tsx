import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Spacer from '@site/src/components/Spacer';
import styles from './styles.module.css';
import BrainToAnimated from '@site/static/img/brainto.svg';
import Typist from 'react-text-typist';
import { TypeAnimation } from "react-type-animation";

const HeaderView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const [toTypeWords] = useState([
      'To Social Media',
      'To Podcast Outlets',
      'To Video Outlets',
      'To Blogging Outlets',
    ]);

  return (
    <div
      className={styles.Container}
      style={{ height: 700 }}>
      <div>
        <h1 className={styles.HeaderTitle}>
          Your Knowledge Base <span className={styles.SeparatorText}>Connected</span>
        </h1>
        <Spacer height={10} />
        <TypeAnimation
          className={styles.HeaderTyper}
          sequence={toTypeWords}
          />
        <Spacer height={20} />
        <p className={styles.DescriptionText}>{siteConfig.tagline}</p>
        <Spacer height={50} />
        <div className={styles.ButtonContainer}>
          <a className={"button button--primary"} href="#tally-open=mOPVGp&tally-layout=modal&tally-width=500&tally-hide-title=1&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=0">Join The Waiting List</a>
        </div>
      </div>
      <BrainToAnimated className={styles.BraintoImage}/>
    </div>
  );
};

export default HeaderView;
