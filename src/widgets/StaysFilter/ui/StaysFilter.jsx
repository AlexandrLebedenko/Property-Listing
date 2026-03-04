import styles from "./StaysFilter.module.scss";
import CountryTabs from "@/features/filterByCountry/ui/CountryTabs";
function StaysFilter(params) {
  return (
    <nav className={navigation}>
      <CountryTabs></CountryTabs>
      <div></div>
    </nav>
  );
}
export default StaysFilter;
