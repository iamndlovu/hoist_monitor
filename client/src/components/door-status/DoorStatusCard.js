import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./DoorStatusCard.module.scss";

const DoorStatusCard = () => {
  const [doorStatus, setDoorStatus] = useState("OPEN");

  useEffect(() => {
    setInterval(() => {
      (async () => {
        try {
          const res = await axios.get("http://localhost:5000/door");
          const doorstatusr = await res.data;
          setDoorStatus(doorstatusr);
        } catch (err) {
          console.error(err);
        }
      })();
    }, 1000);
  }, []);

  return (
    <div
      className={`${styles.DoorStatusCard} ${
        doorStatus.toUpperCase() === "OPEN" && styles.danger
      }`}
    >
      <article>
        <p>DOOR</p>
        <p>{doorStatus.toUpperCase()}</p>
      </article>
    </div>
  );
};

export default DoorStatusCard;
