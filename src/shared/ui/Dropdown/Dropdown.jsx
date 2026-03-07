import { useState } from "react";
import styles from "./Dropdown.module.scss";
import arrowIcon from "@/assets/icons/Expand_down.svg";

function Dropdown({ value, onChange, options, isActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find((opt) => opt.value === value);

  const displayText = !isActive ? "Property type" : selectedOption?.label || "Property type";

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={() => setIsOpen(!isOpen)}>
        <span>{displayText}</span>
        <img className={`${styles.arrow} ${isOpen ? styles.open : ""}`} src={arrowIcon} alt="arrow icon" />
      </div>

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
