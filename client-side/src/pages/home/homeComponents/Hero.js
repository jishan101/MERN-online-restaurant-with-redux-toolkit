import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="mx-[6%] my-8 md:my-16 flex flex-col md:flex-row gap-12 md:gap-0 items-center">
            <div className="md:w-1/2">
                <h1 className="font-righteous leading-tight font-medium text-7xl">We Serve The Test You Love</h1>
                <p className="my-10">This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks. The term comes from the rench word meaning food.</p>
                <Link to="/menu"><button className="btnAction mr-3 sm:mr-6">Explore Food</button></Link>
                <Link to="/cart"><button className="btn">Order Online</button></Link>
            </div>
            <div className="md:w-1/2">
                <div className="w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-secondary-back-color rounded-[50%] flex justify-center items-center">
                    <div className="w-[67vw] h-[67vw] md:w-[33vw] md:h-[33vw] rounded-[50%] border-[1px] border-gray-300 relative">
                        <div className="w-[60vw] h-[60vw] md:w-[29.5vw] md:h-[29.5vw] rounded-[50%] border-[1px] border-gray-300 absolute top-[5%] left-0"></div>
                        <img src="italian-cuisine-pasta.png" alt="pasta" className="absolute w-[57vw] md:w-[27vw] -left-2 top-[7.5%] md:top-[9%]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;

