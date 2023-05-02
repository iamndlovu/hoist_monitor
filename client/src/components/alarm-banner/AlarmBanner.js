import { useState, useEffect } from 'react';
import styles from './AlarmBanner.module.scss';
const alarms =
  [
    {
      metric: 'speed',
      level: 90,
      msg: 'level very high',
      value: '10 m/s',
    },
    {
      metric: 'weight',
      level: 80,
      msg: 'level high',
      value: '3000 KG',
    },
  ] && false;

const AlarmBanner = () => {
  const [showBg, setShowBg] = useState(true);

  useEffect(() => {
    alarms &&
      setInterval(() => {
        setShowBg(!showBg);
      }, 1500);
  }, [showBg]);

  return (
    alarms && (
      <section className={styles.AlarmBanner}>
        <table>
          {alarms.map(({ metric, level, msg, value }) => (
            <tr
              className={
                (showBg && level >= 80 && level < 90 && styles.high) ||
                (showBg && level >= 90 && styles['very-high'])
              }
            >
              <td>{metric}</td>
              <td>{msg}</td>
              <td>{value}</td>
            </tr>
          ))}
        </table>
      </section>
    )
  );
};

export default AlarmBanner;
