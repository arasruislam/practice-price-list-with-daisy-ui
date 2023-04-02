import React from 'react';

const FoodCard = (props) => {
    const { name, price, features, imageLink } = props.food;
    return (
      <div className="card w-96 mx-auto bg-indigo-200 shadow-xl">
        <figure>
          <img src={imageLink} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;