import Tabs from "@/shared/ui/Tabs/Tabs";

function CountryTabs({ selectedLocation, onLocationChange, locations }) {
  return <Tabs selectedLocation={selectedLocation} onLocationChange={onLocationChange} locations={locations}></Tabs>;
}
export default CountryTabs;
