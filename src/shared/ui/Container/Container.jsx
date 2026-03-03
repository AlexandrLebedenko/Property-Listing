import styles from "./Container";
function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
export default Container;
