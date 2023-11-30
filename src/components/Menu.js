import { NavLink } from "react-router-dom";
import React from "react";

export default function Menu() {
  const rates = [
    {
      url: " ",
      name: "Главная",
    },
    {
      url: "drift",
      name: "Дрифт-такси",
    },
    {
      url: "timeattack",
      name: "Time Attack",
    },
    {
      url: "forza",
      name: "Forza Carting",
    },
  ];

  return (
    <nav className="menu">
      {rates.map((item) => (
        <NavLink
          to={`/${item.url}`}
          className={({ isActive }) =>
            ["menu__item", isActive ? "menu__item-active" : null]
              .filter(Boolean)
              .join(" ")
          }
          key={item.url}
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
