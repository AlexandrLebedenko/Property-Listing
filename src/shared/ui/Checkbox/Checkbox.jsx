import styles from "./Radio.module.scss";
function Checkbox(params) {
  return (
    <div className={styles.checkboxBox}>
      <label>
        <input className={styles.checkbox} type="checkbox" name="superhost filter" id="superhost" />
      </label>

      <span className={styles.checkboxLabel}>Superhost</span>
    </div>
  );
}
export default Checkbox;
