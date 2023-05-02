import SpeedMetric from './SpeedMetric.js';
import WeightMetric from './WeightMetric.js';
import styles from './MetricDisplay.module.scss';

const MetricDisplay = () => (
  <section className={styles.MetricDisplay}>
    <SpeedMetric />
    <WeightMetric />
  </section>
);

export default MetricDisplay;
