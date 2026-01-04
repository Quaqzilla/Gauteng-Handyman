import { NavBar } from "@/Components/NavBar";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle,} from "@/Components/ui/alert";
import { Calendar, CheckCircle, CheckCircle2Icon, Clock, DollarSign, FileText, Mail, MapPin, Phone, User } from "lucide-react";
import { Footer } from "@/Components/Footer";

export function Request(){
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',

        serviceType: '',
        urgency: '',
        preferredDate: '',
        preferredTime: '',

        projectDescription: '',
        propertyType: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const nextStep = () => {
        setStep(step + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const prevStep = () => {
        setStep(step - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = () => {
        console.log('Quote Request Submitted:', formData);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const serviceTypes = [
        'Electrical Services',
        'Plumbing Services',
        'Carpentry Services',
        'General Handyman',
        'Maintenance Services',
        'Emergency Repair',
        'Multiple Services',
        'Other'
    ];

    const urgencyLevels = [
        { value: 'emergency', label: 'Emergency (Within 24 hours)', color: 'text-red-600' },
        { value: 'urgent', label: 'Urgent (Within 3 days)', color: 'text-orange-600' },
        { value: 'normal', label: 'Normal (Within 1 week)', color: 'text-blue-600' },
        { value: 'flexible', label: 'Flexible (Anytime)', color: 'text-green-600' }
    ];

    const propertyTypes = [
        'Residential House',
        'Apartment/Flat',
        'Townhouse',
        'Commercial Property',
        'Office Building',
        'Other'
    ];

    if(isSubmitted){
        return(
            <div className="w-full">
                <NavBar/>
                <div className="w-full h-full px-8 py-30 flex flex-col justify-center items-center gap-6 ">
                  <Alert className="w-full border border-primary">
                    <CheckCircle2Icon/>
                    <AlertTitle>Success! Your quotation request has been logged</AlertTitle>
                    <AlertDescription>You will receive an email or phone call from us soon.</AlertDescription>
                  </Alert>

                  <button className="bg-[#82867E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#82867E]  transform hover:scale-105 transition shadow-xl cursor-pointer">
                        Return To Home Page
                    </button> 
                </div>
                
                <Footer/>
            </div>
        )
    }


    return(
        <div className="w-full h-screen font-family-grotesk">
            <NavBar/>

            <div className="w-full bg-back text-center mb-16 py-20 px-8 md:py-30">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                    Request a Free Quotation
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                    Get an accurate estimate for your project in 3 simple steps
                    </p>
            </div>

            <div className="mb-12 w-full px-4 md:px-6">
                <div className="flex items-center justify-between max-w-2xl mx-auto">
                    {[1, 2, 3].map((num) => (
                        <div key={num} className="flex items-center flex-1 last:flex-none">
                            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-base md:text-lg transition-all ${
                                step >= num ? 'bg-[#82867E] text-white scale-110' : 'bg-gray-700 text-gray-400'
                            }`}>
                                {num}
                            </div>
                            {num < 3 && (
                                <div className={`flex-1 h-1 mx-2 md:mx-4 transition-all ${
                                    step > num ? 'bg-[#82867E]' : 'bg-gray-700'
                                }`} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#82867E] rounded-lg flex items-center justify-center">
                  <User size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Personal Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#82867E] focus:outline-none transition"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#82867E] focus:outline-none transition"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#82867E] focus:outline-none transition"
                    placeholder="john.smith@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#82867E] focus:outline-none transition"
                    placeholder="+27 82 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Property Address *</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-4 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#82867E] focus:outline-none transition"
                    placeholder="123 Main Street"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#82867E] focus:outline-none transition"
                    placeholder="Johannesburg"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#82867E] focus:outline-none transition"
                    placeholder="2000"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Service Details */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#82867E] rounded-lg flex items-center justify-center">
                  <FileText size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Service Details</h2>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Service Type *</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#82867E] focus:outline-none transition bg-white"
                >
                  <option value="">Select a service...</option>
                  {serviceTypes.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-3">Urgency Level *</label>
                <div className="space-y-3">
                  {urgencyLevels.map((level) => (
                    <label
                      key={level.value}
                      className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                        formData.urgency === level.value
                          ? 'border-[#82867E] bg-[#82867E]/5'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="urgency"
                        value={level.value}
                        checked={formData.urgency === level.value}
                        onChange={handleChange}
                        className="w-5 h-5 text-[#82867E]"
                      />
                      <span className={`ml-3 font-medium ${level.color}`}>{level.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#82867E] focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#82867E] focus:outline-none transition bg-white"
                    >
                      <option value="">Select time...</option>
                      <option value="morning">Morning (8AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 6PM)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Property Type *</label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#82867E] focus:outline-none transition bg-white"
                >
                  <option value="">Select property type...</option>
                  {propertyTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Project Information */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#82867E] rounded-lg flex items-center justify-center">
                  <DollarSign size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Project Information</h2>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Project Description *</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#82867E] focus:outline-none transition resize-none"
                  placeholder="Please describe your project in detail. Include information about what needs to be done, any specific requirements, and existing conditions..."
                />
                <p className="text-sm text-gray-500 mt-2">Be as detailed as possible for an accurate quote</p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 pt-8 border-t-2 border-gray-200 flex-col md:flex-row">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="flex-1 bg-gray-200 text-gray-700 py-4 px-8 rounded-lg font-bold text-lg hover:bg-gray-300 transition"
              >
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={nextStep}
                className="flex-1 bg-[#82867E] text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-[#6a6e5e] transition"
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 bg-[#82867E] text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-[#6a6e5e] transition flex items-center justify-center gap-3"
              >
                <CheckCircle size={24} />
                Submit Quote Request
              </button>
            )}
          </div>
        </div>

        <Footer/>

        </div>
    )
}