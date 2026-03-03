import styles from "./Header.module.scss";
function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Peace, nature,<br></br> dream
      </h1>
      <p className={styles.subtitle}>Find and book a great experience.</p>
    </header>
  );
}
export default Header;
