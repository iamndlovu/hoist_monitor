import MetricBar from './MetricBar';

const SpeedMetric = () => {
  return (
    <div>
      <MetricBar
        head="SPEED"
        dimensions={{
          value: 2.15,
          HH: 2.6,
          H: 2.15,
          max: 3,
          min: 0,
          units: 'm/s',
        }}
      />
    </div>
  );
};

export default SpeedMetric;
