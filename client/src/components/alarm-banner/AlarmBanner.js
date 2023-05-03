import { useState, useEffect } from 'react';
import styles from './AlarmBanner.module.scss';
const alarms = [
  {
    metric: 'speed',
    level: 80,
    msg: 'speed high',
    value: '2.15 m/s',
  },
  {
    metric: 'weight',
    level: 90,
    msg: 'load very heavy',
    value: '901 KG',
  },
];

const AlarmBanner = () => {
  return (
    alarms && (
      <section className={styles.AlarmBanner}>
        <table>
          {alarms.map(({ metric, level, msg, value }) => (
            <tr
              className={
                (level >= 80 && level < 90 && styles.high) ||
                (level >= 90 && styles['very-high'])
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
