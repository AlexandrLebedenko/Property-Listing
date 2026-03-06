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
  const superhostFilter = useSuperhostFilter();
  const capacityFilter = useCapacityFilter();
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Container>
        <StaysFilter {...countryFilter}></StaysFilter>
        <StaysGrid stays={countryFilter.filteredStays}></StaysGrid>
      </Container>
    </div>
  );
}
export default MainPage;
