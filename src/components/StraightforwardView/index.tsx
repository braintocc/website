import React from 'react';
import styles from './styles.module.css';
import Spacer from '@site/src/components/Spacer';

const StraightforwardView: React.FC = () => {
  return (
    <div className={styles.Container} >
      <div className={styles.Content} >
        <div className={styles.HeaderContainer} data-aos="flip-left" data-aos-duration="1000">
          <h3 className={styles.Tagline}>Why choose us?</h3>
          <h1 className={styles.Title}>Straightforward</h1>
          <Spacer height={20} />
          <p className={styles.Description}>
            Brainto saves you the hassle of creating manual connections.
            Just follow our simple steps and you are done.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StraightforwardView;
