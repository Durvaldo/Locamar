import Footer from "../src/components/patterns/Footer";
import Header from "../src/components/patterns/Header";
import HomePageMain from "../src/components/main_pages/HomePageMain";

function HomePage() {

    return (
        <div className="flex flex-col h-screen">
            <Header className="grow-0"/>
            <HomePageMain className="grow"/>
            <Footer className="grow-0"/>
        </div>
    )
}
  
export default HomePage