import Dropdown from "@/shared/ui/Dropdown/Dropdown";
function CapacityDropdown({ minBedrooms, setMinBedrooms, capacityOptions }) {
  return <Dropdown value={minBedrooms} onChange={setMinBedrooms} options={capacityOptions}></Dropdown>;
}
export default CapacityDropdown;
