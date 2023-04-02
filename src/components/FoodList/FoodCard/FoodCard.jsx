import React, { useState } from "react";
import Feature from "./Feature/Feature";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FoodCard = (props) => {
  const [love, setLove] = useState(false);

  const { name, imageLink, price, features } = props.food;

  const bookmarkToast = () => {
    setLove(!love);
    if (love === true) {
      toast.warn("Removed Bookmarked!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Bookmarked!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="card w-96 mx-auto bg-indigo-200 shadow-xl">
      <figure>
        <img className="h-{380px} w-{256px}" src={imageLink} alt="FoodItem" />
      </figure>
      <div className="card-body">
        <h1 className="font-bold text-4xl text-pink-500">${price}</h1>
        <h2 className="card-title text-2xl my-2">{name}</h2>
        <h3 className="text-xl underline font-bold text-orange-600">
          Used Item:
        </h3>
        {features.map((feature, id) => (
          <Feature key={id} feature={feature}></Feature>
        ))}
        {/* <p></p> */}
        <div className="card-actions mt-auto items-center justify-between">
          <div className="rating gap-1" onClick={bookmarkToast}>
            <span>
              {love === true ? (
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-red-400"
                />
              ) : (
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-yellow-400"
                />
              )}
            </span>
            <ToastContainer />
          </div>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
