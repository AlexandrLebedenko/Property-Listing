import Tabs from "@/shared/ui/Tabs/Tabs";

function CountryTabs({ selectedCountry, onCountryChange, countries }) {
  return <Tabs items={countries} activeTab={selectedCountry} onTabChange={onCountryChange} />;
}
export default CountryTabs;
