import styles from "./StaysGrid.module.scss";
import StayCard from "@/entities/Stay/ui/StayCard/StayCard";
function StaysGrid({ products }) {
  return (
    <main className={styles.productsBox}>
      <p className={styles.productsBox__label}>Over 200 stays</p>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <StayCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            superhost={product.superhost}
            capacity={product.capacity}
            image={product.image}
          ></StayCard>
        ))}
      </div>
    </main>
  );
}
export default StaysGrid;
