import axios from "axios";
import { useEffect, useState } from "react";
import ButtonGrid from "../button-grid/ButtonGrid";
import styles from "./LevelRequestBtns.module.scss";

const LevelRequestBtns = () => {
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    setInterval(() => {
      (async () => {
        try {
          const res = await axios.get("http://localhost:5000/level-requests");
          const reqLevels = await res.data;
          setLevels(reqLevels);
        } catch (err) {
          console.error(err);
        }
      })();
    }, 1000);
  }, []);

  return (
    <section className={styles.LevelRequestBtns}>
      <h4>Level Requests</h4> <br />
      <ButtonGrid num={25} levels={levels} />
    </section>
  );
};

export default LevelRequestBtns;
