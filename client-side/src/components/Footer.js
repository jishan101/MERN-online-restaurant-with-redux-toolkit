import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faInstagram, faLinkedinIn, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="mx-[6%] md:mx-[9%] pt-8 md:pt-16">
            <h1 className="logo cursor-pointer flex items-center text-primary-color text-3xl text-left font-righteous font-medium"><Link to="/"><FontAwesomeIcon icon={faBurger} className="mr-2" /><span className="text-2xl">GoodFood</span></Link></h1>
            <div className="mt-3 py-14 flex flex-col md:flex-row justify-between gap-8 border-t-[1px] border-primary-color">
                <div>
                    <h3 className="mb-6 text-secondary-color text-xl font-righteous font-medium">Social Media Links</h3>
                    <div className="flex gap-3">
                        <a className="px-[12.5px] py-[12px] flex justify-center items-center text-primary-color text-2xl border-2 border-primary-color hover:border-slate-200 rounded-full hover:bg-action-color transition-all duration-[600ms] ease-in-out" href="mailto:rko.jishan@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a className="px-[12px] py-[12px] flex justify-center items-center text-primary-color text-2xl border-2 border-primary-color hover:border-slate-200 rounded-full hover:bg-action-color transition-all duration-[600ms] ease-in-out" href="https://github.com/jishan101" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className="px-[13px] py-[12px] flex justify-center items-center text-primary-color text-2xl border-2 border-primary-color hover:border-slate-200 rounded-full hover:bg-action-color transition-all duration-[600ms] ease-in-out" href="https://www.instagram.com/caped_crusadeer/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a className="px-[13.5px] py-[12px] flex justify-center items-center text-primary-color text-2xl border-2 border-primary-color hover:border-slate-200 rounded-full hover:bg-action-color transition-all duration-[600ms] ease-in-out" href="https://www.linkedin.com/in/irfanulislamjishan/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a className="px-[16px] py-[12px] flex justify-center items-center text-primary-color text-2xl border-2 border-primary-color hover:border-slate-200 rounded-full hover:bg-action-color transition-all duration-[600ms] ease-in-out" href="https://www.facebook.com/rko.jishan/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </div>
                </div>
                <div>
                    <h3 className="mb-5 text-secondary-color text-xl font-righteous font-medium">Services</h3>
                    <div className="text-primary-color flex flex-col gap-3">
                        <p>Online Order</p>
                        <p>Pre-Reservation</p>
                        <p>24/7 Services</p>
                        <p>Foodie Place</p>
                        <p>Super Chefs</p>
                    </div>
                </div>
                <div>
                    <h3 className="mb-5 text-secondary-color text-xl font-righteous font-medium">Quick Links</h3>
                    <div className="text-primary-color flex flex-col gap-3">
                        <Link to="/">Home</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contacts">Contacts</Link>
                        <Link to="/cart">Order Online</Link>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <h3 className="mb-5 text-secondary-color text-xl font-righteous font-medium">Help</h3>
                    <div className="text-primary-color flex flex-col gap-3">
                        <Link to="/contacts">Contacts</Link>
                        <Link to="/contacts">Support</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;

