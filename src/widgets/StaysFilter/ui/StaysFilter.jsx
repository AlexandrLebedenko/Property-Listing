import styles from "./StaysFilter.module.scss";
import CountryTabs from "@/features/filterByCountry/ui/CountryTabs";
import SuperhostCheckbox from "@/features/filterBySuperhost/ui/SuperhostCheckbox";
import CapacityDropdown from "@/features/filterByCapacity/ui/CapacityDropdown";
function StaysFilter({ selectedLocation, setSelectedLocation, locations, superhostOnly, setSuperhostOnly }) {
  return (
    <nav className={styles.navigation}>
      <CountryTabs selectedLocation={selectedLocation} onLocationChange={setSelectedLocation} locations={locations}></CountryTabs>
      <div className={styles.rightSide}>
        <SuperhostCheckbox superhostOnly={superhostOnly} setSuperhostOnly={setSuperhostOnly}></SuperhostCheckbox>
        <CapacityDropdown></CapacityDropdown>
      </div>
    </nav>
  );
}
export default StaysFilter;
