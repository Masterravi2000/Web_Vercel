
import CreateArticle from "../components/artickeform/articleform";
 import Footer from "../components/footer/footer";
 import Navbar from "../components/navbar/navbar";
 
 export default function CreateArticlePage() {
   return (
     <main className="bg-black">
       <Navbar />
       <CreateArticle />
       <Footer />
     </main>
   );
 }