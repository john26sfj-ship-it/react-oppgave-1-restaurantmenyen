// Import dish for return and output.
import Dish from "./Dish.jsx";
// Import array of dishes.
// Different variable name to show it´s not a component?
import menuArr from "./MenuArray.jsx";
import styles from "./css-files/Menu.module.css";
// Export for use in App.jsx
export default function Menu() {
    return (
        // Curlies to use js in "html".
        // Map menu to arrow function.
        // Each menuitem sent to Dish as props, using spread.
        // Why parentheses instead of curlies for arrow block?
        <div className={styles.container}>
            {menuArr.map((menuItem) => (
                <Dish key={menuItem.id} {...menuItem} />
            ))}
        </div>
    );
}