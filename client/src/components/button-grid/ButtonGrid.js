import styles from './ButtonGrid.module.scss';

const ButtonGrid = ({ num, levels }) => {
  let btns = [];
  const cols = Math.floor(Math.sqrt(num));

  for (let i = 1; i <= num; i++) {
    btns.push(
      <span
        key={i}
        className={`${styles.btn} ${levels.includes(i) && styles.btn_on}`}
      >
        {i}
      </span>
    );
  }

  const gridStyle = {
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
  };

  return (
    <section style={gridStyle} className={styles.ButtonGrid}>
      {btns.map(btn => btn)}
    </section>
  );
};

export default ButtonGrid;
