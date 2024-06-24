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
import CV from "../assets/cv.pdf";
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
        <h2>Junior Software Engineer</h2>
        <span>
          <a href="https://x.com/jmck_j" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jay-mcknight-253311274/"
            target="_blank"
          >
            <img src={linkedInIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/jmcknight17" target="_blank">
            <img src={githubIcon} alt="Twitter Icon" />
          </a>
        </span>
        <p className={styles.description}>
          A junior developer with a passion for growing both personal and
          professional development skills. Eager to apply my problem-solving
          abilities, honed through two years of industry experience and a
          Bachelor's degree in Computing.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
