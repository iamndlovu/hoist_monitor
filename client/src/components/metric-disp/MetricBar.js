import styles from './MetricBar.module.scss';

const MetricBar = ({ head, dimensions }) => {
  const { value, max, min, H, HH, units } = dimensions;
  let high = value >= H && value < HH,
    normal = value < H && value >= min,
    highhigh = value >= HH && value <= max,
    outOfRange = value < min || value > max;

  return (
    <>
      <h4>{head}</h4>
      <div
        className={styles.MetricValue}
        style={{
          background: `${
            (high && 'yellow') ||
            (highhigh && 'red') ||
            (normal && 'green') ||
            (outOfRange && 'gray')
          }`,
        }}
      >
        {value} {units}
      </div>
      <div className={styles.MetricBar}>
        <span
          style={{
            height: `${(outOfRange && 100) || (100 * value) / (max - min)}%`,
            background: `${
              (high && 'yellow') ||
              (highhigh && 'red') ||
              (normal && 'green') ||
              (outOfRange && 'gray')
            }`,
          }}
        ></span>
        <div
          style={{
            bottom: `${(100 * HH) / max}%`,
          }}
        >
          <span>HH</span>
          <span>__</span>
          <span>__</span>
          <span>{HH}</span>
        </div>
        <div
          style={{
            bottom: `${(100 * H) / max}%`,
          }}
        >
          <span>H</span>
          <span>__</span>
          <span>__</span>
          <span>{H}</span>
        </div>
      </div>
    </>
  );
};

export default MetricBar;
