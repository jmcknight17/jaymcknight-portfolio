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
        <Skill src={checkMarkIcon} skill="Python" />
        <Skill src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <Skill src={checkMarkIcon} skill="React" />
        <Skill src={checkMarkIcon} skill="Angular" />
        <Skill src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
