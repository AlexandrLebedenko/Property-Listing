import Container from "@/shared/ui/Container/Container";
import Header from "@/widgets/Header/Header";
import styles from "./MainPage.module.scss";
import StaysGrid from "@/widgets/StaysGrid/ui/StaysGrid";
import StaysFilter from "@/widgets/StaysFilter/ui/StaysFilter";
import { useProductFilter } from "@/features/filterProducts/model/useProductFilter";
function MainPage() {
  const { products } = useProductFilter();
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Container>
        <StaysFilter></StaysFilter>
        <StaysGrid products={products}></StaysGrid>
      </Container>
    </div>
  );
}
export default MainPage;
