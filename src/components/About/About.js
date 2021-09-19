import {useEffect, useState} from 'react'
import styles from './About.module.css'

function About(props){
  
  const [ltrOpacity, setLtrOpacity]= useState(0)

  useEffect(()=>{
    setLtrOpacity(1);
  },[])


  return(
    <div>
      <span className={styles.one} style={{opacity: ltrOpacity}}>Hi,</span> 
      <span className={styles.two} style={{opacity: ltrOpacity}}> my</span>
      <span className={styles.three} style={{opacity: ltrOpacity}}> name</span> 
      <span className={styles.four} style={{opacity: ltrOpacity}}> is</span> 
      <span className={styles.five} style={{opacity: ltrOpacity}}> Stan</span> 
    </div>
  );
};

export default About;