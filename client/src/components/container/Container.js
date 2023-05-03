import CageRequestBtns from '../cage-req/CageRequestBtns';
import HoistLevelBar_Container from '../hoistlevel-bar/HoistLevelBar_Container';
import LiveStream from '../live-stream/LiveStream';
import LevelRequestBtns from '../lvl-req/LevelRequestBtns';
import MetricDisplay from '../metric-disp/MetricDisplay';
import layout from './Container.module.scss';

const Container = () => (
  <main className={layout.Container}>
    <div className={layout.el}>
      <LiveStream />
      <LevelRequestBtns />
      <CageRequestBtns />
      <MetricDisplay />
      <HoistLevelBar_Container />
    </div>
  </main>
);

export default Container;
