import ButtonGrid from '../button-grid/ButtonGrid';
import styles from './CageRequestBtns.module.scss';

const levels = [1, 4, 9];

const CageRequestBtns = () => (
  <section className={styles.CageRequestBtns}>
    <h4>Cage Requests</h4> <br />
    <ButtonGrid num={25} levels={levels} />
  </section>
);

export default CageRequestBtns;
