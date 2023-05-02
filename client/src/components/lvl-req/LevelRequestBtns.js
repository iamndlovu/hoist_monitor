import ButtonGrid from '../button-grid/ButtonGrid';
import styles from './LevelRequestBtns.module.scss';

const LevelRequestBtns = () => (
  <section className={styles.LevelRequestBtns}>
    <h4>Level Requests</h4> <br />
    <ButtonGrid num={25} />
  </section>
);

export default LevelRequestBtns;
