import { Footer } from "@/Components/Footer";
import { NavBar } from "@/Components/NavBar";
import { CheckCircle, Phone } from "lucide-react";


export function Contact(){
    return(
        <div className="w-full h-full font-family-grotesk">
            <NavBar/>

            <div className="bg-back w-full py-25 px-8 text-white mb-8 md:py-30 md:text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Get In Touch
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>

            <div className="flex flex-col gap-4 px-8 mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Phone</h1>
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-light text-[#82867E]">Wade: <a href="" className="text-back">(083)-548-2011</a></p>
                    <p className="text-xl font-light text-[#82867E]">Jan: <a href="" className="text-back">(072)-724-9444</a></p>
                </div>
            </div>

            <div className="flex flex-col gap-4 px-8 mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Email</h1>
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-light text-dark">gautenghandyman@gmail.com</p>
                </div>
            </div>

             <div className="flex flex-col gap-4 px-8 mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Working Hours</h1>
                <div className="flex flex-col gap-2">
                    <p className="text-xl font-light text-[#82867E]">Monday - Friday: 7:00AM - 6:00PM</p>
                    <p className="text-xl font-light text-[#82867E]">Saturday: 8:00AM - 2:00PM</p>
                    <p className="text-xl font-light text-[#82867E]">Sunday: Emergency Only</p>
                </div>
            </div>

             <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-2xl shadow-xl flex flex-col mx-2">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Phone size={28} />
                  Emergency Service
                </h3>
                <p className="mb-6 text-red-100">
                  Need immediate assistance? Our emergency team is available 24/7 for urgent repairs.
                </p>
                <a 
                  href="tel:+27835482011"
                  className="block w-full bg-white text-red-600 py-4 px-6 rounded-lg font-bold text-center hover:bg-gray-100 transition text-lg"
                >
                  Call Emergency Line: +27 83 548 2011
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-[#82867E] flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Fast Response Time</strong>
                      <p className="text-gray-600">We respond to all inquiries within 2 hours</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-[#82867E] flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Free Quotes</strong>
                      <p className="text-gray-600">No obligation, transparent pricing</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-[#82867E] flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Licensed & Insured</strong>
                      <p className="text-gray-600">Fully certified professionals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={24} className="text-[#82867E] flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Satisfaction Guaranteed</strong>
                      <p className="text-gray-600">We don't stop until you're happy</p>
                    </div>
                  </li>
                </ul>
              </div>

              <Footer/>

        </div>
    )
}