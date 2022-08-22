import React from "react";

export default function Categories({ categoryId, onChangeCategory }) {
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
            onClick={() => onChangeCategory(id)}
            className={categoryId === id ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}
