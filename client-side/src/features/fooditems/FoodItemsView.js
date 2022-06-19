import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { added } from "../cart/cartSlice";
import { fetchFoodItems } from "./foodItemsSlice";

const FoodItemsView = () => {
    const { loading, foodItems, error } = useSelector(state => state.foodItems);
    const [category, setCategory] = useState("all");
    const [menu, setMenu] = useState(foodItems);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFoodItems());
    }, [dispatch])

    useEffect(() => {
        if(category.toLowerCase() === "all") {
            setMenu(foodItems);
        } else {
            const selectedFoodItems = foodItems.filter(foodItem => category.toLowerCase() === foodItem.category.toLowerCase());
    
            setMenu(selectedFoodItems);
        }
    }, [category, foodItems])

    // console.log(menu);

    return (
        <div className="mx-[6%] my-8 md:my-16">
            <h1 className="font-righteous leading-tight font-medium text-5xl md:text-center mb-10 md:mb-12">Our Regular Menu</h1>
            <form className="flex gap-8 justify-center items-center mb-10 md:mb-12">
                <input className="pizza menuCategoryBtn" type="button" value="Pizza" onClick={e => {
                    e.preventDefault();
                    
                    document.querySelector(".pizza").classList.toggle("selected");
                    document.querySelector(".burger").classList.remove("selected");
                    document.querySelector(".pasta").classList.remove("selected");
                    document.querySelector(".drinks").classList.remove("selected");

                    if(document.querySelector(".pizza").classList.contains("selected")) {
                        setCategory(e.target.value);
                    } else {
                        setCategory("all");
                    }
                }} />
                <input className="burger menuCategoryBtn" type="button" value="Burger" onClick={e => {
                    e.preventDefault();

                    document.querySelector(".burger").classList.toggle("selected");
                    document.querySelector(".pizza").classList.remove("selected");
                    document.querySelector(".pasta").classList.remove("selected");
                    document.querySelector(".drinks").classList.remove("selected");

                    if(document.querySelector(".burger").classList.contains("selected")) {
                        setCategory(e.target.value);
                    } else {
                        setCategory("all");
                    }
                }} />
                <input className="pasta menuCategoryBtn" type="button" value="Pasta" onClick={e => {
                    e.preventDefault();

                    document.querySelector(".pasta").classList.toggle("selected");
                    document.querySelector(".pizza").classList.remove("selected");
                    document.querySelector(".burger").classList.remove("selected");
                    document.querySelector(".drinks").classList.remove("selected");

                    if(document.querySelector(".pasta").classList.contains("selected")) {
                        setCategory(e.target.value);
                    } else {
                        setCategory("all");
                    }
                }} />
                <input className="drinks menuCategoryBtn" type="button" value="Drinks" onClick={e => {
                    e.preventDefault();

                    document.querySelector(".drinks").classList.toggle("selected");
                    document.querySelector(".pizza").classList.remove("selected");
                    document.querySelector(".burger").classList.remove("selected");
                    document.querySelector(".pasta").classList.remove("selected");

                    if(document.querySelector(".drinks").classList.contains("selected")) {
                        setCategory(e.target.value);
                    } else {
                        setCategory("all");
                    }
                }} />
            </form>
            {loading && <p className="text-center">Loading . . .</p>}
            {!loading && error ? <p className="text-center">Error: {error}</p> : null}
            {!loading && menu.length ? <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center">
                {menu.map(foodItem => (
                    <li className="card" key={foodItem._id}>
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
            </ul> : null}
            {!loading && !error && !menu.length ? <div className="text-center">No Items . . .</div> : null}
        </div>
    );
}

export default FoodItemsView;

