import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleted, minus, plus } from "./cartSlice";
// import { Link } from "react-router-dom";

const CartView = () => {
  const [total, setTotal] = useState(0);
  const foodItems = useSelector((state) => state.cart.foodItems);

  const dispatch = useDispatch();

  useEffect(() => {
    if (foodItems.length) {
      const totalPrice = foodItems.reduce(
        (accumulator, currentItem) =>
          accumulator + currentItem.quantity * currentItem.price,
        0
      );

      setTotal(totalPrice);
    }
  }, [foodItems]);

  const handleCheckout = () => {
    axios
      .post(
        `${process.env.REACT_APP_GOODFOOD_BACKEND_URL}/stripe/create-checkout-session`,
        {
          cartItems: foodItems.map((foodItem) => {
            return {
              _id: foodItem._id,
              quantity: foodItem.quantity,
            };
          }),
        }
      )
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="mx-[6%] my-8 md:my-16 flex flex-col md:flex-row gap-4 justify-center">
      <ul className="flex flex-col gap-3">
        <div className="cartCard font-righteous text-3xl font-medium">
          Shopping Cart ({foodItems.length})
        </div>
        {!foodItems.length ? <p className="text-center">No Items</p> : null}
        {foodItems.map((foodItem) => (
          <li
            className="cartCard grid grid-cols-7 justify-center items-center gap-3"
            key={foodItem._id}
          >
            <img
              className="col-span-2"
              src={`data:${foodItem.image.contentType};base64,${foodItem.image.data}`}
              width={200}
              alt={foodItem.title}
            />
            <div className="col-span-3 sm:col-span-4 flex flex-col gap-2">
              <h3 className="font-righteous text-xl font-medium text-primary-color">
                {foodItem.title}
              </h3>
              <p>{foodItem.ingredients}</p>
              <p className="font-righteous text-lg font-medium text-primary-color">
                ${foodItem.price}
              </p>
            </div>
            <div className="col-span-2 sm:col-span-1 flex justify-end items-center">
              <button
                className="flex justify-center items-center w-6 h-6 bg-gray-300 rounded-full"
                onClick={() => {
                  foodItem.quantity <= 1
                    ? dispatch(deleted(foodItem._id))
                    : dispatch(minus(foodItem._id));
                }}
              >
                <FontAwesomeIcon icon={faMinus} width={12} />
              </button>
              <p className="w-10 font-righteous text-lg text-center">
                {foodItem.quantity}
              </p>
              <button
                className="flex justify-center items-center w-6 h-6 bg-gray-300 rounded-full"
                onClick={() => {
                  dispatch(plus(foodItem._id));
                }}
              >
                <FontAwesomeIcon icon={faPlus} width={12} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cartCard w-full md:w-fit md:h-fit flex flex-col gap-6 justify-center">
        <h2 className="font-righteous text-3xl font-medium">Order Summary</h2>
        <div className="font-righteous text-xl font-medium text-primary-color flex justify-between">
          <p>Total:</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <button
          className="text-center py-[10px] text-primary-color font-righteous border-[3px] border-slate-200 rounded-[25px] bg-action-color hover:bg-opacity-80 transition-all duration-300 ease-in-out"
          onClick={() => handleCheckout()}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartView;
