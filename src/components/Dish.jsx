export default function Dish({ tittel, pris, ingredienser, kategori }) {
    return (
        <div>
            <h2>{tittel}</h2>
            <h3>{pris}</h3>
            <p>{ingredienser}</p>
            <p>{kategori}</p>
        </div>
    );
}
