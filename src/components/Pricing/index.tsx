import React from 'react';
import styles from './styles.module.css';
import Spacer from '@site/src/components/Spacer';

const Pricing: React.FC = () => {
  return (
    <div className={styles.Container} >
      <div className={styles.Content} >
        <div className={styles.HeaderContainer} data-aos="flip-left" data-aos-duration="1000">
          <h3 className={styles.Tagline}>Pricing</h3>
          <Spacer height={20} />
          <p className={styles.Description}>
            show a pricing table
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
