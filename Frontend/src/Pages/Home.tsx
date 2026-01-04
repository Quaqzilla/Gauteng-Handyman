import { NavBar } from "../Components/NavBar";
import * as React from "react"
import hero from "../assets/Images/hero.webp";
import plumbing from "../assets/Images/plumbing.webp";
import carpentry from "../assets/Images/Carpentry.webp";
import electrical from "../assets/Images/Electrical.webp";
import handyman from "../assets/Images/Handyman.webp";
import maintenance from "../assets/Images/Maintenance.webp";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent} from "@/Components/ui/card";
import { Carousel, CarouselContent, CarouselItem} from "@/Components/ui/carousel";
import Storage from "../Components/Storage";
import { Footer } from "@/Components/Footer";
import { useNavigate } from "react-router";

export function Home(){
    const navigate = useNavigate();

    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: false,stopOnFocusIn: false, stopOnMouseEnter: false, stopOnLastSnap: false})
    )

    const servicesOffered = [
        {id:'electrical', serviceType: "Electrical", description: "Electrical Certificates of Compliance, Installation of plugs, Installation of lights, Electrical wiring, House re-wiring, Solving tripping of switches, Earth leakages and many more", image: electrical },
        {id:'plumbing', serviceType: "Plumbing", description: "Geysers, Leaking & Burst Pipes, Toilets & Cisterns", image: plumbing },
        {id:'carpentry', serviceType: "Carpentry", description: "Doors & Windows, Built In Cupboards, Cupboard Repair, Furniture Repair, Skirtings", image: carpentry },
        {id:'handyman', serviceType: "Handyman", description: "Doors, Windows & Garage Doors, Gates, Ceilings & Cornices", image: handyman },
        {id:'maintenance', serviceType: "Maintenance", description: "Pool and Jacuzzi pumps, timers, water feature installations/ repairs sprinkler systems", image: maintenance }
    ]

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


    return(
        <div className="w-full h-screen font-family-grotesk">
            <NavBar/>

            {/*Hero Section*/}
            <div 
            style={{backgroundImage: `url(${hero})`}}
            className="py-20 px-8 w-full bg-cover bg-center bg-no-repeat text-white flex flex-col gap-12 items-center md:flex-row md:justify-left md:h-screen">
                
                <div className="flex flex-col justify-evenly gap-4 py-5 md:w-150">
                    <h1 className="text-6xl font-semibold md:text-6xl leading-tight">Gauteng Handyman Services </h1>
                    <p className="text-xl font-light text-[#82867E] md:text-2xl">Your one stop solution for electrical, plumbing, carpentry and handyman services.</p>
                    
                    <div className="flex gap-4">
                        <button className="bg-white text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transform hover:scale-105 transition shadow-xl cursor-pointer" onClick={Request}>
                            Book Now
                        </button>
                        <button className="bg-[#82867E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#82867E]  transform hover:scale-105 transition shadow-xl cursor-pointer" onClick={Contact}>
                            Call Us
                        </button>
                    </div>
                </div>
            </div>

            {/*Services Section*/}
            <div className="w-full text-black flex flex-col items-center px-4 py-4 md:px-8 md:py-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
                    <p className="text-xl text-gray-600">Our teams offer quality, reliable, safe and trusted services to clients in and around <b className="text-[#82867E]">Johannesburg</b>.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {servicesOffered.map((item, index) => 
                    <div className="bg-[#BABCC0] rounded-2xl shadow-lg overflow-hidden" key={index} onClick={() => navigate(`/services/${item.id}`)}>
                        <div className="image-overlay h-64 relative">
                            <img src={item.image} alt="Services Image" className="w-full h-full object-cover"/>
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                <h3 className="text-2xl font-bold ">{item.serviceType}</h3>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <button className="font-semibold hover:text-[#82867E] transition cursor-pointer" >Learn More →</button>
                        </div>
                    </div> 
                    )}
                </div>

                
            </div>

            {/*Past Projects Section*/}
            <div className="w-full text-black flex flex-col items-center px-4 py-4 md:px-8 md:py-8">
                <div className="text-center mb-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Recent Projects</h1>
                    <p className="text-xl text-gray-600">See the quality of our craftsmanship</p>
                </div>

                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-sm md:max-w-300"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    >
                    <CarouselContent>
                        {Storage.slice(0,5).map((item, index) => 
                        <CarouselItem key={index} className="pt-1 sm:basis-1 md:basis-1/4">
                            <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6 rounded-xl">
                                <span className="text-4xl font-semibold">
                                    <img src={item.image} alt="" className="w-full h-64 object-cover rounded-lg" />
                                </span>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        )}
                    </CarouselContent>
                </Carousel>
            </div>

            {/*Map Section*/}
            <div className="w-full text-black flex flex-col items-center px-4 py-4 md:px-8 md:py-8">
                <div className="text-center mb-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Areas We Cover</h1>
                    <p className="text-xl text-gray-600">Gauteng Handyman Services operates in Johannesburg as a whole</p>
                </div>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d343350.33934526425!2d28.05547783339364!3d-26.17692112574668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1767467540205!5m2!1sen!2sza" 
                loading="lazy"
                allowFullScreen
                className="border-none w-full h-100 rounded-xl"
                />
            </div>

            {/*Contact Section*/}
            <div className="w-full text-black flex flex-col items-center px-4 py-4 md:px-8 md:py-10 bg-primary">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h1>
                    <p className="text-xl text-white">Get a free quote today and see why we're the most trusted handyman service in town.</p>
                </div>

                <div className="flex flex-col gap-4 md:flex-row">
                    <button className="bg-white text-black px-20 py-4 rounded-lg font-bold text-lg hover:bg-black hover:text-white transform hover:scale-105 transition shadow-xl cursor-pointer" onClick={Request}>
                        Request Quote
                    </button>
                    <button className="bg-secondary text-black px-20 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 hover:text-white transform hover:scale-105 transition shadow-xl cursor-pointer" onClick={Contact}>
                        Call Us
                    </button>
                </div>
            </div>
            
            <Footer/>

        </div>
    )
}