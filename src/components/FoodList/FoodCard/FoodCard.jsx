import React from "react";
import Feature from "./Feature/Feature";

const FoodCard = (props) => {
  console.log(props.food);
  const { name, imageLink, price, features } = props.food;
  return (
    <div className="card w-96 mx-auto bg-indigo-200 shadow-xl">
      <figure>
        <img className="h-{380px} w-{256px}" src={imageLink} alt="FoodItem" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="text-xl underline font-bold text-orange-600">
          Used Item:
        </h3>
        {features.map((feature, id) => (
          <Feature key={id} feature={feature}></Feature>
        ))}
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
