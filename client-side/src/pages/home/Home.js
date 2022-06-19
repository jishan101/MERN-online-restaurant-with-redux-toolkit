import Hero from "./homeComponents/Hero";
import PopularDishes from "./homeComponents/PopularDishes";
import Reservation from "./homeComponents/Reservation";
import Services from "./homeComponents/Services";

const Home = () => {
    return (
        <div>
            <Hero />
            <PopularDishes />
            <Services />
            <Reservation />
        </div>
    );
}
 
export default Home;

