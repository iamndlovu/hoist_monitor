import styles from './HoistLevelBar_Container.module.scss';

const HoistLevelBar_Container = () => {
  let levels = [];
  for (let i = 9; i > 0; i--) {
    levels.push(i);
  }

  return (
    <section className={styles.HoistLevelBar_Container}>
      <div className={styles.bar}>
        {levels.map(lvl => (
          <div
            key={`stept_${lvl}`}
            style={{
              position: 'absolute',
              top: `${lvl * 10}%`,
              left: `-235%`,
              display: 'flex',
              flexWrap: 'nowrap',
              width: '900%',
            }}
          >
            {lvl * 11}m ____ level {lvl}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HoistLevelBar_Container;
