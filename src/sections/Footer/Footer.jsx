import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Emilio Magaña. <br />
        All rights reserved. Icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </p>
    </section>
  );
}

export default Footer;
