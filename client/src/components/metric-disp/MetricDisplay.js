import SpeedMetric from './SpeedMetric.js';
import WeightMetric from './WeightMetric.js';
import DoorStatusCard from '../door-status/DoorStatusCard.js';
import styles from './MetricDisplay.module.scss';

const MetricDisplay = () => (
  <section className={styles.MetricDisplay}>
    <SpeedMetric />
    <DoorStatusCard />
    <WeightMetric />
  </section>
);

export default MetricDisplay;
