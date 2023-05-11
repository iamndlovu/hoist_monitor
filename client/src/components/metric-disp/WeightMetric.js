import MetricBar from "./MetricBar";

const WeightMetric = ({ weight, hh, h, min, max }) => {
  return (
    <div>
      <MetricBar
        head="WEIGHT"
        dimensions={{
          value: weight,
          HH: hh,
          H: h,
          max,
          min,
          units: "kg",
        }}
      />
    </div>
  );
};

export default WeightMetric;
