import styles from "./ProductGrid.module.scss";
import ProductCard from "@/entities/Product/ui/ProductCard/ProductCard";
function ProductGrid({ products }) {
  return (
    <main className={styles.productsBox}>
      <p className={styles.productsBox__lable}>Over 200 stays</p>
      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            superhost={product.superhost}
            capacity={product.capacity}
            image={product.image}
          ></ProductCard>
        ))}
      </div>
    </main>
  );
}
export default ProductGrid;
