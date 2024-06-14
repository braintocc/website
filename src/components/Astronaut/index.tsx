import React, { useState } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import AstronautLight from '@site/src/components/Astronaut/astronauts/AstronautLight';

type Props = { className?: string };

const Astronaut: React.FC<Props> = (props) => {
  const { className } = props;


  return (
    <div className={clsx(styles.Container, className)}>
      <div>
          <AstronautLight />
      </div>
    </div>
  );
};

export default Astronaut;
