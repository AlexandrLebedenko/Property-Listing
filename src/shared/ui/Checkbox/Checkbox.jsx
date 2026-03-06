import styles from "./Checkbox.module.scss";
function Checkbox({ checked, onChange }) {
  return (
    <div className={styles.checkboxBox}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className={styles.checkbox}
          name="superhost filter"
          id="superhost"
        />
      </label>

      <span className={styles.checkboxLabel}>Superhost</span>
    </div>
  );
}
export default Checkbox;
