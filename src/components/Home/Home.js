import {useEffect, useState} from 'react'
import styles from './Home.module.css'

function Home(props){
  const [ltrOpacity, setLtrOpacity]= useState(0)

  useEffect(()=>{
    setLtrOpacity(1);
  },[])


  return(
    <div className={styles.homeContent}>
      <div className={styles.intro}>
        <p className={styles.delayedLtrsContainer}>
          <span className={styles.delayedLetters} id={styles.ltr1} style={{opacity: ltrOpacity}}>Hi,</span> 
          <span className={styles.delayedLetters} id={styles.ltr2} style={{opacity: ltrOpacity}}>&nbsp;my</span>
          <span className={styles.delayedLetters} id={styles.ltr3} style={{opacity: ltrOpacity}}>&nbsp;name</span> 
          <span className={styles.delayedLetters} id={styles.ltr4} style={{opacity: ltrOpacity}}>&nbsp;is</span> 
          <span className={styles.delayedLetters} id={styles.ltr5} style={{opacity: ltrOpacity}}>&nbsp;Stan,</span>
        </p>
        <p className={styles.delayedLtrsContainer}>
          <span className={styles.delayedLetters} id={styles.ltr6} style={{opacity: ltrOpacity}}>A</span>
          <span className={styles.delayedLetters} id={styles.ltr7} style={{opacity: ltrOpacity}}>&nbsp;full-stack</span>
          <span className={styles.delayedLetters} id={styles.ltr8} style={{opacity: ltrOpacity}}>&nbsp;web</span>
          <span className={styles.delayedLetters} id={styles.ltr9} style={{opacity: ltrOpacity}}>&nbsp;developer.</span>
        </p>
        <p className={styles.delayedLtrsContainer}>
          <span className={styles.delayedLetters} id={styles.ltr10} style={{opacity: ltrOpacity}}>Welcome</span>
          <span className={styles.delayedLetters} id={styles.ltr11} style={{opacity: ltrOpacity}}>&nbsp;to</span>
          <span className={styles.delayedLetters} id={styles.ltr12} style={{opacity: ltrOpacity}}>&nbsp;my</span>
          <span className={styles.delayedLetters} id={styles.ltr13} style={{opacity: ltrOpacity}}>&nbsp;website!</span>
        </p>
      </div>

    </div>
  );
};

export default Home;