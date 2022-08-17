import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Sort from "../components/Sort";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetch("https://62f0fdfb25d9e8a2e7c33f6e.mockapi.io/pizzas")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((__, id) => <Skeleton key={id} />)
          : pizzas.map((pizza, id) => <PizzaBlock key={id} {...pizza} />)}
      </div>
    </div>
  );
};

export default Home;
