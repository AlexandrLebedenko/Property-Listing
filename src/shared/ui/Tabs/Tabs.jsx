import styles from "./Tabs.module.scss";
function Tabs({ selectedLocation, onLocationChange, locations }) {
  return (
    <div className={styles.tabsContainer}>
      {locations.map((location) => (
        <button
          key={location.value}
          className={`${styles.tab} ${selectedLocation === location.value ? styles.active : ""}`}
          onClick={() => onLocationChange(location.value)}
        >
          {location.label}
        </button>
      ))}
    </div>
  );
}
export default Tabs;
