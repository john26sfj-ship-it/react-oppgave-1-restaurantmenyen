import Dish from "./Dish.jsx";
import menuArr from "./MenuArray.jsx";

export default function Menu() {
    return (
        <>
            {menuArr.map((menuItem) => (
                <Dish key={menuItem.id} {...menuItem} />
            ))}
        </>
    );
}