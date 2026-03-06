import styles from "./Tabs.module.scss";
function Tabs({ selectedLocation, onLocationChange, locations }) {
  return (
    <div className={styles.tabsContainer}>
      {locations.map((location) => (
        <button
          key={location.value}
          className={`${styles.tabs} ${selectedLocation === location.value ? styles["tabs--active"] : ""}`}
          onClick={() => onLocationChange(location.value)}
        >
          {location.label}
        </button>
      ))}
    </div>
  );
}
export default Tabs;
