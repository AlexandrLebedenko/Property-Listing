import styles from "./ProductCard.module.scss";
import homeIcon from "@/assets/icons/Home_duotone.svg";
import humanIcon from "@/assets/icons/User_alt_duotone.svg";
import starIcon from "@/assets/icons/Starfill.svg";
function ProductCard({ title, description, price, capacity, rating, superhost, image }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={title} />
      {superhost ? <span className={styles.superhost}>Superhost ⭐</span> : <></>}
      <div className={styles.cardDescription}>
        <div className={styles.cardHeading}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p className={styles.cardText}>{description}</p>
          <div className={styles.capacity}>
            <p className={styles.capacity__item}>
              <img src={homeIcon} alt="home icon" />
              {capacity.bedroom} bedroom
            </p>
            <p className={styles.capacity__item}>
              <img src={humanIcon} alt="human icon" />
              {capacity.people} guests
            </p>
          </div>
        </div>
        <div className={styles.cardPriceRow}>
          <p className={styles.cardPrice}>
            <span>${price}</span>/night
          </p>
          <p className={styles.cardRating}>
            <img src={starIcon} alt="star icon" />
            <span>{rating}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
