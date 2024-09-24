import styles from './MeselfStyles.module.css';
import mainImg from '../../assets/profile_pic.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Meself() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id = "Meself" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img 
                className={styles.Meself} 
                src={mainImg} 
                alt="Profile picture of Emilio Magana" 
                />
                <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt="Color mode icon" 
                onClick={toggleTheme}
                />
            </div>
            <div className = {styles.info} >
                <h1>
                    Emilio
                    <br/>
                    Magaña
                </h1>
                <h2>Computer Engineer</h2>
                <span>
                    <a href="https://linkedin.com/" target="_blank">
                        <img src={linkedinIcon} alt=" Linkedin Icon" />
                    </a>
                    <a href="https://github.com/" target="_blank">
                        <img src={githubIcon} alt=" Github Icon" />
                    </a>
                </span>
                <p className={styles.description}>
                    #1 hayter
                </p>
                <a href={CV} download> 
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>
        </section>
    );
}

export default Meself