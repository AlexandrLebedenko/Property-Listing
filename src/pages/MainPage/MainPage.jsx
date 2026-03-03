import Container from "@/shared/ui/Container/Container";
import Header from "@/widgets/Header/Header";
import styles from "./MainPage.module.scss";
import ProductGrid from "@/widgets/ProductGrid/ui/ProductGrid";
import { useProductFilter } from "@/features/filterProducts/model/useProductFilter";
function MainPage() {
  const { products } = useProductFilter();
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <Container>
        <ProductGrid products={products}></ProductGrid>
      </Container>
    </div>
  );
}
export default MainPage;
