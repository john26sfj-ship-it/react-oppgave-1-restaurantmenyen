import styles from "./css-files/Dish.module.css";
// Export for use in Menu.jsx.
// Props destructured like this because oof using spread when sending.
export default function Dish({ tittel, pris, ingredienser, kategori }) {
    return (
        <div className={styles.card}>
            <h2 className={styles.tittel}>{tittel}</h2>
            <h3>Pris: <span className={styles.price}>{pris}</span></h3>
            <p><span className={styles.firstWord}>Ingredienser</span>: <span className={styles.ingredienser}>{ingredienser}</span></p>
            <p><span className={styles.firstWord}>Kategori:</span> {kategori}</p>
        </div>
    );
}
