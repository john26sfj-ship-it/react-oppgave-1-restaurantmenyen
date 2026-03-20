export default function Dish(props) {
    return 
    <div>
        <h2>{props.tittel}.</h2>
        <h3>{props.pris} kr.</h3>
        <p>{props.ingredienser}.</p>
        <p>{props.kategori}.</p>
    </div>
}