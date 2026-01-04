import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "../assets/Images/Logo.webp";
import { useNavigate } from "react-router";

export function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();

    const About = () => {
        try{
            navigate("/About-Us")
        }catch{
            console.error("An error has occured going into the About page")
        }
    };

    const Home = () => {
        try{
            navigate("/")
        }catch{
            console.error("An error has occured going into the About page")
        }
    };

    const Gallery = () => {
        try{
            navigate("/Gallery")
        }catch{
            console.error("An error has occured going into the About page")
        }
    };

    const Request = () => {
        try{
            navigate("/Request-A-Quotation")
        }catch{
            console.error("An error has occured going into the About page")
        }
    };

    const Contact = () => {
        try{
            navigate("/Contact-Us")
        }catch{
            console.error("An error has occured going into the About page")
        }
    };

    const menuItems = [
        { label: 'About Us', href: '#about' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Contact Us', href: '#contact' },
    ];

     useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className={`w-full py-5 text-white px-4 text-md font-family-grotesk font-medium flex fixed justify-between items-center md:justify-evenly z-50 ${isScrolled ? 'bg-[#171E27]' : 'bg-transparent'}`}>
            <img src={logo} alt="logo" className="w-15 h-15" onClick={Home}/>
            
                <ul className="hidden md:flex gap-4">
                    <a href="" className="hover:text-[#82867E] hover:font-lg duration-200" onClick={About}>About Us</a>
                    <a href="" className="hover:text-[#82867E] hover:font-lg duration-200"onClick={Gallery}>Gallery</a>
                    <a href="" className="hover:text-[#82867E] hover:font-lg duration-200"onClick={Contact}>Contact Us</a>
                </ul>
                
                {/*Hamburger menu Mobile */}
                <button
                onClick={toggleMenu}
                className="bg-[#82867E] text-black rounded-xl backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-500 p-3 group md:hidden relative z-50"
                aria-label="Toggle menu"
                >
                    <div className="relative w-6 h-6">
                        <Menu
                        size={26}
                        className={`absolute inset-0 transition-all duration-300 ${ isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`}
                        />
                        <X
                        size={26}
                        className={`absolute inset-0 transition-all duration-300 ${ isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}
                        />

                    </div>

                </button>

                <div
                    className={`fixed inset-0 bg-black/80 backdrop-blur-md z-40 transition-all duration-500 md:hidden ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={toggleMenu}
                />

                <div
                    className={`fixed top-0 right-0 h-full w-80 bg-[#82867E] border-l border-white/10 z-40 transform transition-all duration-500 ease-out md:hidden ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full p-8 pt-28">
                        <nav className="flex-1 space-y-2">
                            {menuItems.map((item, index) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className={`group flex items-center justify-between p-4 rounded-xl text-gray-300 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 border border-transparent hover:border-white/10 transform hover:translate-x-2 ${
                                        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`}
                                    style={{
                                        transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                                    }}
                                    onClick={toggleMenu}
                                >
                                    <span className="text-lg font-medium">{item.label}</span>
                                    <ChevronRight
                                        size={20}
                                        className="opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300"
                                    />
                                </a>
                            ))}
                        </nav>

                        <button
                            className={`w-full py-4 px-6 bg-[#BABCC0] text-black font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                            style={{ transitionDelay: isOpen ? '200ms' : '0ms' }}
                            onClick={Request}
                        >
                            Request A Quote
                        </button>
                    </div>
                </div>
                
            

            <button className="cursor-pointer hidden px-5 py-3 bg-[#82867E] text-white font-bold rounded-xl backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 p-3 md:flex">Request A Quote</button>
        </div>
    )
}