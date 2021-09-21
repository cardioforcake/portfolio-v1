import styles from './Projects.module.css'
import ProjectDesc from './components/ProjectDesc/ProjectDesc'

const projectDesc = {
  'lookUp':'LookUp is a responsive website to help users’ lookup the weekly weather forecast for any major city in the world. It’s built using vanilla HTML, CSS & JavaScript. The website automatically saves the user’s most recent search and their measurement scale preferences for future visits. The design draws inspiration from TheWeatherNetwork.',
  'calendarConnect': 'CalenderConnect is a personal planning app built using Express, EJS and MongoDB. The user is able to add, update, delete and reschedule events and tasks on a calendar. The app is currently only available for desktop usage. Features will be expanded in the future to allow for optimized mobile display of the calendar. The app features Google login authentication through PassportJS.',
  'snakeGame' : ''
}

const projectHref={
  'lookUp': 'https://cardioforcake.github.io/',
  'calendarConnect':'https://cfc-calendar.herokuapp.com/'
}

const projectGitHub={
  'lookUp': 'https://github.com/cardioforcake/cardioforcake.github.io',
  'calendarConnect': 'https://github.com/cardioforcake/portfolio-project-calendar',
}

function Projects(props){
  return(
    <div className={styles.projectContents}>
      <div id={styles.projectOne} className={styles.projectContainer}>
        <ProjectDesc 
          projectDesc={projectDesc['lookUp']} 
          projectHref={projectHref['lookUp']} 
          projectGitHub={projectGitHub['lookUp']}/>
        <div className={styles.projectPreview}>
          <div className={styles.gridContainer}>
            <img src='/lookupdesktop.png' id={styles.lookupDesktop}></img>
            <img src='/lookupmobile.png' id={styles.lookupMobile}></img>
          </div>
        </div>
      </div>
      <div id={styles.projectOne} className={styles.projectContainer}>
        <ProjectDesc 
          projectDesc={projectDesc['calendarConnect']} 
          projectHref={projectHref['calendarConnect']}
          projectGitHub={projectGitHub['calendarConnect']}/>
        <div className={styles.projectPreview}>
          <div className={styles.gridContainer}>
          <img src='/calendarconnectdesktop.png' id={styles.calendarConnectDesktop}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;