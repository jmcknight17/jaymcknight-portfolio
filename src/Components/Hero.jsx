import styles from "./HeroStyles.module.css";
import themeIcon from "../assets/sun.svg";
import heroImg from "../assets/hero-img.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import twitterIcon from "../assets/twitter-light.svg";
import linkedInIcon from "../assets/linkedin-light.svg";
import githubIcon from "../assets/github-light.svg";
import CV from "../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

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
          <a href="https://x.com/jmck_j" targey="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jay-mcknight-253311274/"
            targey="_blank"
          >
            <img src={linkedInIcon} alt="Twitter Icon" />
          </a>
          <a
            href="https://github.com/https://github.com/jmcknight17"
            targey="_blank"
          >
            <img src={githubIcon} alt="Twitter Icon" />
          </a>
        </span>
        <p className={styles.description}>
          A young developer with a passion to grow personal and professional
          development skills. Eager to learn and apply problem solving skills to
          any projects that need it.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
