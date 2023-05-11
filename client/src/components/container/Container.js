import CageRequestBtns from "../cage-req/CageRequestBtns";
import HoistLevelBarContainer from "../hoistlevel-bar/HoistLevelBar_Container";
import LiveStream from "../live-stream/LiveStream";
import LevelRequestBtns from "../lvl-req/LevelRequestBtns";
import MetricDisplay from "../metric-disp/MetricDisplay";
import layout from "./Container.module.scss";

const Container = ({ speedMetric, weightMetric }) => (
  <main className={layout.Container}>
    <div className={layout.el}>
      <LiveStream />
      <LevelRequestBtns />
      <CageRequestBtns />
      <MetricDisplay speedMetric={speedMetric} weightMetric={weightMetric} />
      <HoistLevelBarContainer />
    </div>
  </main>
);

export default Container;
