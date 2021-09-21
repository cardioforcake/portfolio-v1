import styles from './Projects.module.css'
import ProjectDesc from './components/ProjectDesc/ProjectDesc'

const projectDesc = {
  'lookUp':'LookUp is a responsive website to help users’ lookup the weekly weather forecast for any major city in the world. It’s built using vanilla HTML, CSS & JavaScript. The website automatically saves the user’s most recent search and their measurement scale preferences for future visits. The design draws inspiration from TheWeatherNetwork.',
  'calendarConnect': 'CalenderConnect is a personal planning app built using Express, EJS and MongoDB. The user is able to add, update, delete and reschedule events and tasks on a calendar. The app is currently only available for desktop usage. Features will be expanded in the future to allow for optimized mobile display of the calendar. The app features Google login authentication through PassportJS.',
  'gameCentre' : 'GameCentre is a web app building using the MERN stack. Users can play various mini-games and have the option of login in to save their progress. There is currently only one game right now but I’m in the middle of developing a second game for the website.',
  'fizen': 'Fizen is a responsive financial planning app building using the MERN stack. This project was completed as part of a hackathon where I acted as the team leader & front-end developer. The app allows the user to set future financial goals and helps the user visualize how they might reach those goals. The project came in second for the hackathon competition.',
}

const projectHref={
  'lookUp': 'https://cardioforcake.github.io/',
  'calendarConnect':'https://cfc-calendar.herokuapp.com/',
  'gameCentre' : 'https://cfc-portfolio.netlify.app/',
  'fizen': 'http://taganov.net:2015/',
}

const projectGitHub={
  'lookUp': 'https://github.com/cardioforcake/cardioforcake.github.io',
  'calendarConnect': 'https://github.com/cardioforcake/portfolio-project-calendar',
  'gameCentre' : 'https://github.com/cardioforcake/portfolio-frontend-cardioforcake',
  'fizen': 'https://github.com/cardioforcake/portfolio-project-fizen-frontend',
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
            <img alt="LookUp desktop preview" src='/lookupdesktop.png' id={styles.lookupDesktop}></img>
            <img alt="LookUp mobile preview" src='/lookupmobile.png' id={styles.lookupMobile}></img>
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
          <img alt="Calendar Connect desktop preview" src='/calendarconnectdesktop.png' id={styles.calendarConnectDesktop}></img>
          </div>
        </div>
      </div>
      <div id={styles.projectOne} className={styles.projectContainer}>
        <ProjectDesc 
          projectDesc={projectDesc['gameCentre']} 
          projectHref={projectHref['gameCentre']}
          projectGitHub={projectGitHub['gameCentre']}/>
        <div className={styles.projectPreview}>
          <div className={styles.gridContainer}>
          <img alt="Game Centre desktop preview" src='/snakedesktop.png' id={styles.gameCentreDesktop}></img>
          </div>
        </div>
      </div>
      <div id={styles.projectOne} className={styles.projectContainer}>
        <ProjectDesc 
          projectDesc={projectDesc['fizen']} 
          projectHref={projectHref['fizen']}
          projectGitHub={projectGitHub['fizen']}/>
        <div className={styles.projectPreview}>
          <div className={styles.gridContainer}>
          <img alt="Fizen desktop preview" src='/fizendesktop.png' id={styles.fizenDesktop}></img>
          <img alt="Fizen mobile preview" src='/fizenmobile.png' id={styles.fizenMobile}></img>
          <img alt="Fizen tablet preview" src='/fizentablet.png' id={styles.fizenTablet}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;