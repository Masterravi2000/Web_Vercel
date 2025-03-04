import Description from "../components/article/description/page";
import NewsGrid from "../components/article/hero/page";
import NewsPage from "../components/article/popular/page";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

export default function Articles() {
    return (
        <main className="bg-black">
            <Navbar/> 
            <NewsGrid/>
            <Description/>
            <NewsPage/>
            <Footer/>
        </main>
    )
}