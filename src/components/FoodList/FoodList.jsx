import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard/FoodCard";

const FoodList = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("FoodList.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div>
      <h1 className=" text-center text-2xl py-4 bg-indigo-300 font-bold">
        Picked Up Your Favorite Foodies !
      </h1>

      <div className="grid md:grid-cols-3 gap-4 mt-8">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
