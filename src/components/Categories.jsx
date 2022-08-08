import React, { useState } from "react";

export default function Categories() {
    const [activeIdx, setActiveIdx] = useState(0);

    const categories = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые",
    ];

    return (
        <div className="categories">
            <ul>
                {categories.map((category, id) => (
                    <li
                        key={id}
                        onClick={() => setActiveIdx(id)}
                        className={activeIdx === id ? "active" : ""}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
}
