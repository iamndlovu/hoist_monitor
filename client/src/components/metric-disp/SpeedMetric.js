import MetricBar from "./MetricBar";

const SpeedMetric = ({ speed, hh, h, min, max }) => {
  return (
    <div>
      <MetricBar
        head="SPEED"
        dimensions={{
          value: speed,
          HH: hh,
          H: h,
          max,
          min,
          units: "m/s",
        }}
      />
    </div>
  );
};

export default SpeedMetric;
