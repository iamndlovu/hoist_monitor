import styles from "./AlarmBanner.module.scss";

const AlarmBanner = ({ speedMetric, weightMetric }) => {
  return (
    <section className={styles.AlarmBanner}>
      <table>
        <tbody>
          {speedMetric.speed >= speedMetric.h && (
            <tr
              className={
                (speedMetric.speed >= speedMetric.h &&
                  speedMetric.speed < speedMetric.hh &&
                  styles.high) ||
                (speedMetric.speed >= speedMetric.hh && styles["very-high"])
              }
            >
              <td>speed</td>
              <td>warning</td>
              <td>{speedMetric.speed}</td>
            </tr>
          )}
          {weightMetric.weight >= weightMetric.h && (
            <tr
              className={
                (weightMetric.weight >= weightMetric.h &&
                  weightMetric.weight < weightMetric.hh &&
                  styles.high) ||
                (weightMetric.weight >= weightMetric.hh && styles["very-high"])
              }
            >
              <td>weight</td>
              <td>warning</td>
              <td>{weightMetric.weight}</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default AlarmBanner;
