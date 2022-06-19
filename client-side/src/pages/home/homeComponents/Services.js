import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div className="mx-[6%] md:mx-[8%] my-8 md:my-16 flex flex-col-reverse md:flex-row gap-12 md:gap-24 items-center">
            <div className="md:w-1/2">
                <img src="chef.jpg" alt="chef" />
            </div>
            <div className="md:w-1/2">
                <h1 className="font-righteous leading-tight font-medium text-5xl">We Are More Than Multiple Services</h1>
                <p className="my-10">This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks. The term comes from the rench word meaning food.</p>
                <Link to="#about"><button className="btnAction">About Us</button></Link>
            </div>
        </div>
    );
}

export default Services;

