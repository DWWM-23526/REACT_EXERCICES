import { useState } from "react";

const items = ["Apple", "Banana", "Carrot", "Date", "Eggplant", "Fig", "Grape"];

function SearchFilter() {
    const [search, setSearch] = useState("");
    
    function handleInputChange(event) {
        setSearch(event.target.value);
        console.log("input value changed", event.target.value);
    }

    const filteredItems = items.filter((item) => {
        console.log("filtering items");
        return item.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div>
            {console.log("filtered items updated => rendering", filteredItems)}
            <input type="text" value={search} onChange={handleInputChange} />
            <ul>
                {filteredItems.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchFilter;
