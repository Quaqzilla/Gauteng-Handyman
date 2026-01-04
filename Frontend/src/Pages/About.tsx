import { Footer } from "@/Components/Footer";
import { NavBar } from "@/Components/NavBar";
import { CheckCircle } from "lucide-react";


export function About(){

    const certifications = [
        "Licensed & Insured",
        "Electrical COC Certified",
        "Plumbing Accredited",
        "Safety Certified",
        "Quality Assured",
        "BBB Accredited"
    ];

    return(
        <div className="w-full h-screen font-family-grotesk">
            <NavBar/>
            
            <div className="w-full bg-back text-center mb-16 py-20 px-8 md:py-30">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                About <span className="text-[#82867E]">Gauteng Handyman</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Your trusted partner for professional electrical, plumbing, carpentry and handyman services in Johannesburg and surrounding areas since 2006.
                </p>
            </div>

            <div className="w-full text-center mb-6 px-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
                What We Offer
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Our teams offer quality, reliable, safe and trusted electrical, plumbing, carpentry and handyman services to clients in and around Johannesburg. We offer superb workmanship with good, contactable references from guest houses, private homes and certain businesses. 
                </p>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mt-4">
                We operate 24 hours 7 days a week and will have a handyman available in most areas in and around Johannesburg, even after peak hours in the case that you have an emergency, such as no electricity, a burst pipe in the ceiling or the electric fence not working that weekend.
                </p>
            </div>

            <div className="w-full text-center mb-16 px-8 py-8 text-white">
                 <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                        Licensed & Certified
                        </h2>
                        <p className="text-xl text-gray-600">
                        Fully qualified and insured for your peace of mind
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {certifications.map((cert, index) => (
                        <div 
                            key={index} 
                            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border flex justify-center flex-col border-[#82867E]/30 hover:border-[#82867E] transition-all text-center md:h-50"
                        >
                            <CheckCircle size={32} className="text-[#82867E] mx-auto mb-3" />
                            <p className="text-sm font-semibold">{cert}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>


            <Footer/>
        </div>
    )
}