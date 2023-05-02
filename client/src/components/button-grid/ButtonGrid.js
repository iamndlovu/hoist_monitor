import styles from './ButtonGrid.module.scss';

const ButtonGrid = ({ num }) => {
  let btns = [];
  const cols = Math.floor(Math.sqrt(num));

  for (let i = 1; i <= num; i++) {
    btns.push(<span className={styles.btn}>{i}</span>);
  }

  const gridStyle = {
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
  };

  return (
    <section style={gridStyle} className={styles.ButtonGrid}>
      {btns.map(btn => (
        <>{btn}</>
      ))}
    </section>
  );
};

export default ButtonGrid;
