import SpeedMetric from "./SpeedMetric.js";
import WeightMetric from "./WeightMetric.js";
import DoorStatusCard from "../door-status/DoorStatusCard.js";
import styles from "./MetricDisplay.module.scss";

const MetricDisplay = ({ speedMetric, weightMetric }) => (
  <section className={styles.MetricDisplay}>
    <SpeedMetric
      speed={speedMetric.speed}
      hh={speedMetric.hh}
      h={speedMetric.h}
      max={speedMetric.max}
      min={speedMetric.min}
    />
    <DoorStatusCard />
    <WeightMetric
      weight={weightMetric.weight}
      hh={weightMetric.hh}
      h={weightMetric.h}
      max={weightMetric.max}
      min={weightMetric.min}
    />
  </section>
);

export default MetricDisplay;
