import styles from "./HeroStyles.module.css";
import themeIcon from "../assets/sun.svg";
import heroImg from "../assets/hero-img.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import twitterLight from "../assets/twitter-light.svg";
import linkedInLight from "../assets/linkedin-light.svg";
import githubLight from "../assets/github-light.svg";
import twitterDark from "../assets/twitter-dark.svg";
import githubDark from "../assets/github-dark.svg";
import linkedInDark from "../assets/linkedin-dark.svg";
import CV from "../assets/Jay Mcknight CV.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.Hero} src={heroImg} alt="Profile picture" />
        <img
          src={themeIcon}
          className={styles.colorMode}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Jay <br />
          Mcknight
        </h1>
        <h2>Software Engineer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/jay-mcknight-253311274/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/jmcknight17" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Full-Stack Software Engineer specializing in resilient backend systems, cloud-native architecture, 
          and modern web applications. Passionate about building high-performance APIs and scalable integrations 
          using C#/.NET, React, and Azure. First-Class Honours graduate with proven commercial experience delivering 
          mission-critical software.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
