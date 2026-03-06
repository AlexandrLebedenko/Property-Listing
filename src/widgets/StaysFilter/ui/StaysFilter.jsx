import styles from "./StaysFilter.module.scss";
import CountryTabs from "@/features/filterByCountry/ui/CountryTabs";
import SuperhostCheckbox from "@/features/filterBySuperhost/ui/SuperhostCheckbox";
import CapacityDropdown from "@/features/filterByCapacity/ui/CapacityDropdown";
function StaysFilter({}) {
  return (
    <nav className={styles.navigation}>
      <CountryTabs></CountryTabs>
      <div className={styles.rightSide}>
        <SuperhostCheckbox></SuperhostCheckbox>
        <CapacityDropdown></CapacityDropdown>
      </div>
    </nav>
  );
}
export default StaysFilter;
