import ButtonGrid from '../button-grid/ButtonGrid';
import styles from './CageRequestBtns.module.scss';

const CageRequestBtns = () => (
  <section className={styles.CageRequestBtns}>
    <h4>Cage Requests</h4> <br />
    <ButtonGrid num={25} />
  </section>
);

export default CageRequestBtns;
