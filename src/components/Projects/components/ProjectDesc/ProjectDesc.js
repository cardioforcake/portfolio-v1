import styles from './ProjectDesc.module.css'

function ProjectDesc(props){
  return (
    <div className={styles.projectDescContainer}>
      <p className={styles.projectDesc}>
        {props.projectDesc}
      </p>
      <div className={styles.projectLinks}>
        <a href={props.projectHref} className={styles.visitBtn} target="_blank">VISIT WEBSITE</a>
        <a href={props.projectGitHub} target="_blank" className={styles.icon}>
          <img src="/github.png" className={styles.iconImg}></img>
        </a>
      </div>
    </div>
  )
}

export default ProjectDesc