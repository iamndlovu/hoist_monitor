import MetricBar from './MetricBar';

const WeightMetric = () => {
  return (
    <div>
      <MetricBar
        head="WEIGHT"
        dimensions={{
          value: 901,
          HH: 900,
          H: 800,
          max: 1000,
          min: 0,
          units: 'kg',
        }}
      />
    </div>
  );
};

export default WeightMetric;
