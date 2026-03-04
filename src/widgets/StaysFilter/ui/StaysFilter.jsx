import styles from "./StaysFilter.module.scss";
import CountryTabs from "@/features/filterByCountry/ui/CountryTabs";
import SuperhostCheckbox from "@/features/filterBySuperhost/ui/SuperhostCheckbox";
import CapacityDropdown from "@/features/filterByCapacity/ui/CapacityDropdown";
function StaysFilter(params) {
  return (
    <nav className={navigation}>
      <CountryTabs></CountryTabs>
      <div>
        <SuperhostCheckbox></SuperhostCheckbox>
        <CapacityDropdown></CapacityDropdown>
      </div>
    </nav>
  );
}
export default StaysFilter;
