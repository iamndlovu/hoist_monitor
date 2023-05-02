import ButtonGrid from '../button-grid/ButtonGrid';
import styles from './LevelRequestBtns.module.scss';

const levels = [2, 6, 7];

const LevelRequestBtns = () => (
  <section className={styles.LevelRequestBtns}>
    <h4>Level Requests</h4> <br />
    <ButtonGrid num={25} levels={levels} />
  </section>
);

export default LevelRequestBtns;
