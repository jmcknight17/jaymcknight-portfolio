import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../assets/checkmark-light.svg";
import Skill from "../../common/Skill";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <Skill src={checkMarkIcon} skill="HTML" />
        <Skill src={checkMarkIcon} skill="CSS" />
        <Skill src={checkMarkIcon} skill="C#" />
        <Skill src={checkMarkIcon} skill="SQL" />
        <Skill src={checkMarkIcon} skill="Java" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <Skill src={checkMarkIcon} skill="REACT" />
        <Skill src={checkMarkIcon} skill="VUE" />
        <Skill src={checkMarkIcon} skill="ANGULAR" />
        <Skill src={checkMarkIcon} skill="TAILWIND" />
        <Skill src={checkMarkIcon} skill="Java" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
