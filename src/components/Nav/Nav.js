import {Link, useHistory} from 'react-router-dom';
import styles from './Nav.module.css'
import {useState} from 'react'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import {scrollRight, scrollLeft} from '../service-functions/service-functions'

const route = ['/','/about','/projects','/contact']
const label = ['HOME','ABOUT','PROJECTS','CONTACT']

function Nav(props){
  const [contentPage, setContentPage] = useState(0)
  const history = useHistory()

  return(
    <>
    <nav className={styles.navi}>
        <div className={styles.naviLabelContainer}>
          <Link to="/" className={styles.naviLabel}>
            HOME
          </Link>
        </div>
        <div className={styles.naviLabelContainer}>
          <Link to="/about" className={styles.naviLabel}>
            ABOUT
          </Link>
        </div>
        <div className={styles.naviLabelContainer}>
          <Link to="/projects" className={styles.naviLabel}>
            PROJECTS
          </Link>
        </div>
        <div className={styles.naviLabelContainer}>
          <Link to="/Contact" className={styles.naviLabel}>
            CONTACT
          </Link>
        </div>
    </nav>
    <nav className={styles.naviSmall}>
      {
        contentPage > 0 ?
        <div 
          className={styles.arrowContainer} 
          onClick={()=>{scrollLeft(contentPage, setContentPage, history, route[contentPage-1])}}
        >
          <div className={styles.arrowLeft}></div>
        </div>
        :
        <div className={styles.arrowContainer}></div>
      }  
      <div className={styles.naviLabelContainer}>
        {label[contentPage]}
      </div>
      {
            contentPage < 3 ?
            <div 
              className={styles.arrowContainer} 
              onClick={()=>{scrollRight(contentPage, setContentPage, history, route[contentPage+1])}}>
              <div className={styles.arrowRight}></div>
            </div>
            :
            <div className={styles.arrowContainer}></div>
          }   
    </nav>
    </>
  );
};

export default Nav;