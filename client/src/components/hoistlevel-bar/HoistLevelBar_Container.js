import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./HoistLevelBar_Container.module.scss";
import LevelIndicator from "./LevelIndicator";

const HoistLevelBar_Container = () => {
  let levels = [];
  for (let i = 9; i > 0; i--) {
    levels.push(i);
  }

  const [distance, setDistance] = useState(1);

  useEffect(() => {
    setInterval(() => {
      (async () => {
        try {
          const res = await axios.get("http://localhost:5000/distance");
          const distance_r = await res.data;
          setDistance(distance_r);
        } catch (err) {
          console.error(err);
        }
      })();
    }, 400);
  }, []);

  return (
    <section className={styles.HoistLevelBar_Container}>
      <div className={styles.bar}>
        {levels.map((lvl) => (
          <div
            key={`stept_${lvl}`}
            style={{
              position: "absolute",
              top: `${lvl * 10}%`,
              left: `-2.67rem`,
              width: "900%",
            }}
          >
            {lvl * 11}m{" "}
            <span
              style={{
                display: "inline-block",
                transform: "translateY(-0.3rem)",
              }}
            >
              ____
            </span>{" "}
            level {lvl}
          </div>
        ))}
        <LevelIndicator distance={distance} />
      </div>
    </section>
  );
};

export default HoistLevelBar_Container;
