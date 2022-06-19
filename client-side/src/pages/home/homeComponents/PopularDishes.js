import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFoodItems } from "../../../features/fooditems/foodItemsSlice";
import { added } from "../../../features/cart/cartSlice";

const PopularDishes = () => {
    const { loading, foodItems, error } = useSelector(state => state.foodItems);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFoodItems());
    }, [dispatch])

    const popularDishesLeftScroll = () => {
        const popularDishesElm = document.querySelector(".popularDishes");
        popularDishesElm.scrollLeft -= 320;
    }

    const popularDishesRightScroll = () => {
        const popularDishesElm = document.querySelector(".popularDishes");
        popularDishesElm.scrollLeft += 320;
    }

    return (
        <div className="my-8 md:my-16">
            <div className="mx-[6%] mb-10 md:mb-12 sm:flex justify-between items-center">
                <h1 className="font-righteous leading-tight font-medium text-5xl">Popular Dishes</h1>
                <div className="hidden sm:flex gap-3">
                    <FontAwesomeIcon className="popularDishesLeft arrowBtn" onClick={popularDishesLeftScroll} icon={faArrowLeft} />
                    <FontAwesomeIcon className="popularDishesRight arrowBtn" onClick={popularDishesRightScroll} icon={faArrowRight} />
                </div>
            </div>
            {loading && <p className="mx-[6%] text-center">Loading . . .</p>}
            {!loading && error ? <p className="mx-[6%] text-center">Error: {error}</p> : null}
            {!loading && foodItems.length ? <div className="overflow-hidden">
                <ul className="popularDishes px-[6%] py-4 max-w-[100vw] flex gap-5 items-center overflow-scroll scroll-smooth">
                    {foodItems.map(foodItem => (
                        <li className="card min-w-[270px] sm:min-w-[321px]" key={foodItem._id}>
                            <img className="aspect-video my-6" src={`data:${foodItem.image.contentType};base64,${foodItem.image.data}`} alt={foodItem.title} />
                            <h1 className="cardTitle font-righteous text-2xl font-medium text-primary-color text-center"><abbr className="no-underline" title={foodItem.title}>{foodItem.title}</abbr></h1>
                            <p className="cardIngredients my-6"><abbr className="no-underline" title={foodItem.ingredients}>{foodItem.ingredients}</abbr></p>
                            <div className="flex justify-between items-center">
                                <p className="font-righteous text-2xl font-medium text-primary-color">${foodItem.price}</p>
                                <button className="cardBtn" onClick={() => {
                                    dispatch(added(foodItem))
                                }}>Add to Cart</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div> : null}
            {!loading && !error && !foodItems.length ? <div className="mx-[6%] text-center">No Items . . .</div> : null}
        </div>
    );
}

export default PopularDishes;

