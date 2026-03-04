import styles from "./Tabs.module.scss";
function Tabs({ activeTab, onTabChange }) {
  return (
    <div className={styles.tabsContainer}>
      {items.map((item) => (
        <button className={`${styles.tab} ${activeTab === item.value ? styles.active : ""}`} onClick={() => onTabChange(item.value)}>
          {location}
        </button>
      ))}
    </div>
  );
}
export default Tabs;
