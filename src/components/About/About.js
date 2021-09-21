import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import styles from './About.module.css'
import {useHistory} from 'react-router-dom'
import {navigate} from '../service-functions/service-functions'

function About(props){
  
  const [parOpacity, setParOpacity]= useState(0)
  const [parSpacing, setParSpacing]= useState(5)
  const [parColor, setParColor] = useState('#36B85D')

  const history = useHistory()

  useEffect(()=>{
    setParOpacity(1);
    setParSpacing(2)
    setParColor('#FFFFFF')
  },[])


  return(
    <div className={styles.aboutContent}>
      <div className={styles.profilePicContainer}>
        <img alt="profile" src="/profile.png" id={styles.profilePic}></img>
      </div>
      <div className={styles.aboutText}>
        <p id={styles.p1} className={styles.parContent} style={{opacity: parOpacity, paddingBottom: `${parSpacing}rem`, color: parColor}}>
          My name is Stan Chao. I’m a full-stack developer based in Vancouver, BC. 
        </p>
        <p id={styles.p2} className={styles.parContent} style={{opacity: parOpacity, paddingBottom: `${parSpacing}rem`, color: parColor}}>
          I have a background in retail banking and applied mathematics but have recently found my calling as a web developer. I love solving puzzles and finding interesting ways to work around restrictions and limitations. 
        </p>
        <p id={styles.p3} className={styles.parContent} style={{opacity: parOpacity, paddingBottom: `${parSpacing}rem`, color: parColor}}>
          If you have a project you would like help with or think I might be able to contribute to your organization, I would love to <span id={styles.connect} onClick={()=>{navigate('/contact', history)}}>connect</span> with you!
        </p>
      </div>
      <div className={styles.iconContainer}>
        <a href="https://www.linkedin.com/in/stan-chao-dev" target="_blank" className={styles.icon}>
          <img alt="LinkedIn Link" src="/linkedin.png" className={styles.iconImg}></img>
        </a>
        <a href="https://github.com/cardioforcake" target="_blank" className={styles.icon}>
          <img alt="GitHub Link" src="/github.png" className={styles.iconImg}></img>
        </a>
        <Link to="/Stan-Chao-Resume.pdf" target="_blank" download id={styles.resumeText} className={styles.icon}>RESUME</Link>
      </div>
    </div>
  );
};

export default About;