import { faBurger, faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const header = document.querySelector("header");

            const currentScroll = window.pageYOffset;
            if (currentScroll <= 0) {
                header.classList.remove("shadow-header");
                return;
            }

            if (currentScroll > lastScroll && !header.classList.contains("-translate-y-full")) {
                header.classList.add("-translate-y-full");
            } else if (currentScroll < lastScroll && header.classList.contains("-translate-y-full")) {
                header.classList.remove("-translate-y-full");
                header.classList.add("shadow-header");
            }

            setLastScroll(currentScroll);
        });
    }, [lastScroll]);

    return (
        <header className="z-10 w-[100%] sticky top-0 left-0 right-0 transition-all ease-in-out duration-300">
            <nav className="flex justify-between items-center w-[100%] px-[6%] py-4 mt-6 bg-[#FFFCF7] bg-opacity-[0.95]">
                <h1 className="logo cursor-pointer flex items-center text-primary-color z-20 text-3xl text-left font-righteous font-medium"><Link to="/"><FontAwesomeIcon icon={faBurger} className="mr-2" /><span className="text-2xl">GoodFood</span></Link></h1>
                <ul className="links hidden overflow-hidden text-lg font-medium md:flex items-center gap-14">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/menu">Menu</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                    <li><NavLink to="/cart"><FontAwesomeIcon icon={faBasketShopping} className="flex justify-center items-center px-3 py-3 text-primary-color font-righteous border-[3px] border-action-color hover:border-slate-200 rounded-full hover:bg-action-color transition-all duration-[600ms] ease-in-out" /></NavLink></li>
                </ul>
                <div className="flex gap-3 justify-center items-center md:hidden">
                    <NavLink to="/cart"><FontAwesomeIcon icon={faBasketShopping} className="flex justify-center items-center px-3 py-3 text-primary-color font-righteous border-[3px] border-action-color hover:border-slate-200 rounded-full hover:bg-action-color transition-all duration-[600ms] ease-in-out" /></NavLink>
                    <div className="menu-bars z-20 relative" onClick={() => {
                        document.querySelector(".menu-bars").classList.toggle("is-open");
                        document.querySelector("body").classList.toggle("overflow-hidden");

                        const menuMobile = document.querySelector(".menu-mobile");
                        if (menuMobile.classList.contains("hidden")) {
                            menuMobile.classList.remove("hidden");
                            setTimeout(() => {
                                menuMobile.classList.remove("visually-hidden");
                                menuMobile.classList.add("is-open");
                            }, 20);
                        } else {
                            menuMobile.classList.add("visually-hidden");
                            menuMobile.classList.remove("is-open");
                            menuMobile.addEventListener("transitionend", () => {
                                menuMobile.classList.add("hidden");
                            }, {
                                capture: false,
                                once: true,
                                passive: false
                            });
                        }
                    }}>
                        <div className="bars w-[30px] h-[19px]">
                            <span className="block w-full h-[3px] mt-0 ml-auto rounded-sm bg-primary-color"></span>
                            <span className="block w-full h-[3px] mt-[5px] ml-auto rounded-sm bg-primary-color"></span>
                            <span className="block w-[17px] h-[3px] mt-[5px] ml-auto rounded-sm bg-primary-color"></span>
                        </div>
                        <div className="other-bar h-[0px] w-[3px] rounded-sm bg-primary-color absolute left-[45%] top-[-6px]"></div>
                    </div>
                </div>
            </nav>
            <nav className="menu-mobile hidden fixed top-0 bottom-0 right-0 w-full h-screen backdrop-blur-[8px]" onClick={() => {
                document.querySelector(".menu-bars").classList.remove("is-open");
                const menuMobile = document.querySelector(".menu-mobile");
                document.querySelector("body").classList.remove("overflow-hidden");

                menuMobile.classList.add("visually-hidden");
                menuMobile.classList.remove("is-open");
                menuMobile.addEventListener("transitionend", () => {
                    menuMobile.classList.add("hidden");
                }, {
                    capture: false,
                    once: true,
                    passive: false
                });
            }}>
                <div className="mobile-links w-[60%] h-screen bg-[#FFF7EA] absolute top-0 bottom-0 right-0 md:hidden text-sm text-primary-color overflow-hidden">
                    <ul className="links mt-[40%] sm:mt-[25%] ml-[10%] text-sm text-secondary-color">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li className="mt-[18px]"><NavLink to="/menu">Menu</NavLink></li>
                        <li className="mt-[18px]"><NavLink to="/about">About Us</NavLink></li>
                        <li className="mt-[18px]"><NavLink to="/contacts">Contacts</NavLink></li>
                        <li className="mt-[18px]"></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;

