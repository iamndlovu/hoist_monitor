import { useState } from 'react';
import styles from './DoorStatusCard.module.scss';

const DoorStatusCard = () => {
  const [doorStatus, setDoorStatus] = useState('OPEN');
  return (
    <div className={`${styles.DoorStatusCard} ${styles.danger}`}>
      <article>
        <p>DOOR</p>
        <p>{doorStatus}</p>
      </article>
    </div>
  );
};

export default DoorStatusCard;
