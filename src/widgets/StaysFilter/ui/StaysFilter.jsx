import styles from "./StaysFilter.module.scss";
import CountryTabs from "@/features/filterByCountry/ui/CountryTabs";
import SuperhostCheckbox from "@/features/filterBySuperhost/ui/SuperhostCheckbox";
import CapacityDropdown from "@/features/filterByCapacity/ui/CapacityDropdown";
function StaysFilter({ selectedLocation, setSelectedLocation, locations, showAll, setShowAll, minBedrooms, setMinBedrooms, capacityOptions }) {
  return (
    <nav className={styles.navigation}>
      <CountryTabs selectedLocation={selectedLocation} onLocationChange={setSelectedLocation} locations={locations}></CountryTabs>
      <div className={styles.rightSide}>
        <SuperhostCheckbox showAll={showAll} setShowAll={setShowAll}></SuperhostCheckbox>
        <CapacityDropdown minBedrooms={minBedrooms} setMinBedrooms={setMinBedrooms} capacityOptions={capacityOptions}></CapacityDropdown>
      </div>
    </nav>
  );
}
export default StaysFilter;
