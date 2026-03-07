import Dropdown from "@/shared/ui/Dropdown/Dropdown";
function CapacityDropdown({ minBedrooms, setMinBedrooms, capacityOptions, isActive }) {
  return <Dropdown value={minBedrooms} onChange={setMinBedrooms} options={capacityOptions} isActive={isActive}></Dropdown>;
}
export default CapacityDropdown;
