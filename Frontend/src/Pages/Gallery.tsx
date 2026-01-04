import Storage from "@/Components/Storage";
import { NavBar } from "@/Components/NavBar";
import { Card, CardContent, CardDescription, CardTitle} from "@/Components/ui/card";
import { Footer } from "@/Components/Footer";

export function Gallery(){
    return(
        <div>
            <NavBar/>      
            <div className="w-full bg-back text-center mb-16 py-20 px-8 md:py-30">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                    Gallery
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                   Explore our portfolio of completed projects and see the quality craftsmanship we deliver.
                </p>
            </div>

            <div className="grid grid-cols-1 w-full gap-4 md:grid-cols-3 px-4 mb-8">

                {Storage.map((item, index) => (
                <Card className="p-4 rounded-xl bg-secondary flex justify-center items-center " key={index}>
                    <CardContent>
                        <img src={item.image} alt="service-Image" className="w-full h-full object-cover rounded-xl"/>
                    </CardContent>
                    <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
                    <CardDescription className="text-gray-600 mb-4">{item.description}</CardDescription>
                </Card>
                ))}
            </div>

            <Footer/>
        </div>
    )
}