import { Footer } from "@/Components/Footer";
import { NavBar } from "@/Components/NavBar";
import { useParams } from "react-router";

export function Services(){
    const { serviceId } = useParams();

    const serviceData = {
        electrical: {
            title: "Electrical Services",
            tagline: "Safe, reliable electrical solutions",
            description: "Our electrician can also fix any problem, whether it is geyser repair, distribution boards, earth leakage, power failure, or power tripping.",
            services: [
                "Electrical Certificates of Compliance",
                "Installation of plugs and outlets",
                "Light fixture installation",
                "Electrical wiring",
                "House re-wiring",
                "Solving tripping of swithces",
                "Earth leakages",
                "Upgrading of distribution boards",
                "Commercial electrical maintenance",
                "Domestic electrical amintenance",
                "Stove and oven repairs",
                "Geyser repairs",
                "Electrical switches",
                "Garage door automation",
                "Gate automation",
                "Electric fencing",
                "Generatoes",
                "Pre-paid electricity meters"
            ],
            pricing: "From R500",
            duration: "1-4 hours"
        },
        plumbing: {
            title: "Plumbing Services",
            tagline: "Expert plumbing solutions",
            description: "From dripping taps to burst pipes we assess situations and bring the best solutions. We can also help you by providing over the phone advice to help you do a minor plumbing repair by yourself e.g. to fix a leaking tap. Its as easy as 123... no more leaking taps",
            services: [
                "Geyser installation and repairs",
                "Leak detection and repair",
                "Pipe repairs",
                "Underground water pipe repair"
            ],
            pricing: "From R450",
            duration: "1-3 hours"
        },
        carpentry: {
            title: "Carpentry Services",
            tagline: "Fast, efficient carpentry services",
            description: "We provide the most reliable carpentry solutions",
            services: [
                "Hanging of bulletin boards, chalk boards and pictures",
                "Door hanging",
                "Carbinet making",
                "Wooden decks",
                "Shop fitting",
                "Wooden bars",
                "Built in bars",
                "Wooden shelves/shelving",
                "Wooden book cases",
                "Wood panelling",
                "Wooden furniture repair",
                "Installing counter tops/work tops"
            ],
            pricing: "From R450",
            duration: "1-3 hours"
        },
        handyman: {
            title: "Handyman Services",
            tagline: "Most efficient and reliable handyman",
            description: "We provide handyman services to home owners and businesses in the Johannesburg area.",
            services: [
                "Electrical installations and COC's, fault finding, lighting, underground cable laying, pre-paid meter installation, change over switches for generators",
                "Installation of low watt and energy efficient LED lights. Down lights/ fluorescent LED's",
                "Plumbing, toilet and cistern fix, leaky shower walls, damp proof sealing, master flow valves",
                "Flooring, built in cupboards (BIC's), skirting boards",
                "Ceilings, geyser and roof repairs. Waterproofing to pitched and flat roofs",
                "Electric gate arms, electric fence upgrades, intercom and CCTV installations/upgrades",
                "Bathroom and kitchen renovations",
                "Appliance connections, oven and stove installation and repairs (convection ovens included)",
                "Pool and Jacuzzi pumps, timers, water feature installations/ repairs and so, so much more in irrigation and sprinkler systems",
            ],
            pricing: "From R450",
            duration: "1-3 hours"
        },
    };

    const service = serviceData[serviceId] || serviceData.handyman;

    return(
        <div className="w-full h-screen font-family-grotesk">
            <NavBar/>

            <section className="py-30 px-6 bg-back">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div>
                                    <h2 className="text-4xl font-bold text-white">
                                        {service.title}
                                    </h2>
                                    <p className="text-[#82867E] text-lg font-medium">
                                        {service.tagline}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-700 text-lg mb-6">
                                {service.description}
                            </p>
                        </div>

                        <div>
                            <img 
                                src={service.image} 
                                alt={service.title}
                                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                            />
                        </div>
                    </div>

                    {/* Services List */}
                    <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
                        <h3 className="text-3xl font-bold mb-6">What We Offer</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {service.services.map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="text-[#82867E]">✓</span>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}