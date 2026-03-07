import Container from "@/shared/ui/Container/Container";
import Header from "@/widgets/Header/Header";
import styles from "./MainPage.module.scss";
import StaysGrid from "@/widgets/StaysGrid/ui/StaysGrid";
import StaysFilter from "@/widgets/StaysFilter/ui/StaysFilter";
import { useCountryFilter } from "@/features/filterByCountry/model/useCountryFilter";
import { useSuperhostFilter } from "@/features/filterBySuperhost/model/useSuperhostFilter";
import { useCapacityFilter } from "@/features/filterByCapacity/model/useCapacityFilter";
function MainPage() {
  const countryFilter = useCountryFilter();
  const superhostFilter = useSuperhostFilter(countryFilter.allStays);
  const capacityFilter = useCapacityFilter(countryFilter.allStays);
  const filteredStays = countryFilter.filteredStays
    .filter((stay) => (superhostFilter.showAll ? true : !stay.superhost))
    .filter((stay) => stay.capacity.bedroom >= capacityFilter.minBedrooms);
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Container>
        <StaysFilter {...countryFilter} {...superhostFilter} {...capacityFilter}></StaysFilter>
        <StaysGrid stays={filteredStays}></StaysGrid>
      </Container>
    </div>
  );
}
export default MainPage;
