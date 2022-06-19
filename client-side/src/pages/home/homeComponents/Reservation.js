import { Link } from "react-router-dom";

const Reservation = () => {
    return (
        <div className="mx-[6%] md:mx-[12%] my-8 md:my-16 flex flex-col md:flex-row gap-12 md:gap-0 items-center">
            <div className="md:w-1/2">
                <h1 className="font-righteous leading-tight font-medium text-5xl">Do You Have Any Dinner Plan Today? Reserve Your Table</h1>
                <p className="my-10">This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks. Make your Reservation now.</p>
                <Link to="#about"><button className="btnAction">Make Reservation</button></Link>
            </div>
            <div className="md:w-1/2">
                <div className="mx-auto md:mr-0 w-[86.5vw] h-[86.5vw] md:w-[35vw] md:h-[35vw] bg-red-100 rounded-[50%] flex justify-center items-center relative">
                    <div className="absolute h-full w-16 bg-white rotate-[30deg]"></div>
                    <div className="absolute h-full w-16 bg-white -rotate-[30deg]"></div>
                    <div className="absolute h-full w-16 bg-white rotate-[90deg]"></div>
                    <img src="pizza.png" alt="pasta" className="absolute w-[70vw] md:w-[28vw]" />
                </div>
            </div>
        </div>
    );
}

export default Reservation;

