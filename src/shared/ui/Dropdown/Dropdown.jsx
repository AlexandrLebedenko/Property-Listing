import { useState } from "react";
import styles from "./Dropdown.module.scss";
import arrowIcon from "@/assets/icons/Expand_down.svg";
function Dropdown({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  // Находим выбранный элемент для отображения
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className={styles.dropdown}>
      {/* Заголовок (всегда виден) */}
      <div className={styles.dropdownHeader} onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedOption?.label || "Property type"}</span>
        <img className={`${styles.arrow} ${isOpen ? styles.open : ""}`} src={arrowIcon} alt="arrow icon" />
      </div>
      {/* Dropdown list */}
      {isOpen && (
        <ul className={styles.dropdownList} role="listbox">
          {options.map((option) => (
            <li
              role="option"
              key={option.value}
              className={`${styles.dropdownItem} ${value === option.value ? styles.selected : ""}`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Dropdown;
