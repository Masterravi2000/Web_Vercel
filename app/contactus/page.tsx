import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import ContactForm from "./card";
import { InfiniteMovingCardsDemo } from "./infinity";

export default function Contactus()
{
    return(
        <main className="bg-black">
            <Navbar/>
            <div className="flex flex-col items-center justify-center py-10 max-w-6xl mx-auto">
                <p className="text-white text-4xl font-bold">Contact Us</p>
                <span className="text-gray-50 pt-4">Any question or remarks? Just write us a message!</span>
            </div>
            <ContactForm/>
                <InfiniteMovingCardsDemo/>
            <Footer/>
        </main>
    )
}