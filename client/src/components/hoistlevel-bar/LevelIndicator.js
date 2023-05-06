import styles from './LevelIndicator.module.scss';

const LevelIndicator = ({ distance }) => {
  return (
    <div
      className={styles.LevelIndicator}
      style={{ top: `${(distance * 10) / 11}%` }}
    >
      <span>{distance}m</span>
      <span></span>
    </div>
  );
};

export default LevelIndicator;
