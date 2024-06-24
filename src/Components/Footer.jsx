import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Jay Mcknight. <br />
        All Rights Reserved.
      </p>
    </section>
  );
}

export default Footer;
