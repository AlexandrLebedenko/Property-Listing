import styles from "./StaysGrid.module.scss";
import StayCard from "@/entities/Stay/ui/StayCard/StayCard";
function StaysGrid({ stays }) {
  return (
    <main className={styles.productsBox}>
      <p className={styles.productsBox__label}>Over 200 stays</p>
      <div className={styles.productsGrid}>
        {stays.map((stay) => (
          <StayCard
            key={stay.id}
            title={stay.title}
            description={stay.description}
            price={stay.price}
            rating={stay.rating}
            superhost={stay.superhost}
            capacity={stay.capacity}
            image={stay.image}
          ></StayCard>
        ))}
      </div>
    </main>
  );
}
export default StaysGrid;
