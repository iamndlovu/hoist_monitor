import axios from 'axios';
import {useEffect, useState} from 'react';
import ButtonGrid from '../button-grid/ButtonGrid';
import styles from './CageRequestBtns.module.scss';

const CageRequestBtns = () => {
  const [levels, setLevels] = useState([]);

	useEffect(() => {
		setInterval(() => {
      (async () => {
        try {
          const res = await axios.get('http://localhost:5000/cage-requests');
          const reqLevels = await res.data;
          setLevels(reqLevels);
        } catch (err) {
          console.error(err);
        }
      })();
    } ,1000)
	}, []);

  return(
  <section className={styles.CageRequestBtns}>
    <h4>Cage Requests</h4> <br />
    <ButtonGrid num={25} levels={levels} />
  </section>
)};

export default CageRequestBtns;
