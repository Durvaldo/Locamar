import CacambaMainPage from "../src/components/main_pages/CacambaMainPage";
import Footer from "../src/components/patterns/Footer";
import Header from "../src/components/patterns/Header";

function Cacamba() {
    return (
        <div className="flex flex-col h-screen">
            <Header className="grow-0"/>
            <CacambaMainPage className="grow"/>
            <Footer className="grow-0"/>
        </div>
    )
}
  
export default Cacamba