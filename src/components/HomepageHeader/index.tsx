import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HeaderTyper from '@site/src/components/HeaderTyper';
import Spacer from '@site/src/components/Spacer';
import styles from './styles.module.css';
import Astronaut from '@site/src/components/Astronaut';

const HeaderView: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const [toTypeWords] = useState([
      'Simple',
      'Straightforward',
      'Transparent',
      'Centralized',
      'Fun',
    ]);

  return (
    <div
      className={styles.Container}
      style={{ height: 700 }}>
      <div>
        <h1 className={styles.HeaderTitle}>
          Online Systems Connections <span className={styles.SeparatorText}>Made</span>
        </h1>
        <Spacer height={20} />
        <HeaderTyper
          className={styles.HeaderTyper}
          words={toTypeWords}
          delay={5000}
          defaultText={toTypeWords[0] || 'simple'}
        />
        <Spacer height={50} />
        <p className={styles.DescriptionText}>{siteConfig.tagline}</p>
        <Spacer height={50} />
        <div className={styles.ButtonContainer}>
          <a className={"button button--primary"} href="#tally-open=mOPVGp&tally-layout=modal&tally-width=450&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave">Join The Waiting List</a>
        </div>
      </div>
      <Astronaut className={styles.AstronautImage} />
    </div>
  );
};

export default HeaderView;
