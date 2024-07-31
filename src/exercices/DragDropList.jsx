import { useState } from "react";

const initialItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

function DragDropList() {
    const [items, setItems] = useState(initialItems);
    const [draggingItemIndex, setDraggingItemIndex] = useState(null);

    function handleDragStart(draggingItemIndex) {
        console.log("dragging item index : ", draggingItemIndex)
        setDraggingItemIndex(draggingItemIndex);
    }

    // function handleDragEnd(){
    //     console.log("dragging ends")
    //     setDraggingItemIndex(null);
    // }

    function handleDragOver(overItemIndex) {
        console.log("dragging over item with index : ", overItemIndex)

        // if (draggingItemIndex === null) return;
        if (draggingItemIndex === overItemIndex) return;
    
        const newItems = [...items];
        const draggingItemValue = newItems[draggingItemIndex];
        newItems.splice(draggingItemIndex, 1);
        newItems.splice(overItemIndex, 0, draggingItemValue);
    
        setDraggingItemIndex(overItemIndex);
        setItems(newItems);
    }

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index} draggable 
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={() => handleDragOver(index)}
                        // onDragEnd={handleDragEnd}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DragDropList;
