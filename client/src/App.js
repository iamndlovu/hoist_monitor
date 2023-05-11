import axios from "axios";
import { useEffect, useState } from "react";
import AlarmBanner from "./components/alarm-banner/AlarmBanner";
import Container from "./components/container/Container";

const App = () => {
  const [speed, setSpeed] = useState(0);
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    setInterval(() => {
      (async () => {
        try {
          const spres = await axios.get("http://localhost:5000/speed");
          const currSpeed = await spres.data;
          setSpeed(currSpeed);

          const weres = await axios.get("http://localhost:5000/weight");
          const currWeight = await weres.data;
          setWeight(currWeight);
        } catch (err) {
          console.error(err);
        }
      })();
    }, 1000);
  }, []);

  return (
    <div className="App">
      <section className="top">
        <header className="App-header">
          <h1>Hoist Monitor</h1>
          <AlarmBanner
            speedMetric={{ speed, hh: 2.6, h: 2.15 }}
            weightMetric={{ weight, hh: 900, h: 800 }}
          />
          <h3>LogIn</h3>
        </header>
      </section>
      <Container
        speedMetric={{ speed, hh: 2.6, h: 2.15, min: 0, max: 3 }}
        weightMetric={{ weight, hh: 900, h: 800, min: 0, max: 1000 }}
      />
    </div>
  );
};

export default App;
