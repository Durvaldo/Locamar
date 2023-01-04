import Footer from "../src/components/patterns/Footer";
import Header from "../src/components/patterns/Header";

function Container() {

    return (
        <div className="flex flex-col h-screen">
            <Header className="grow-0"/>
            <div className="grow"> Container </div>
            <Footer className="grow-0"/>
        </div>
    )
}
  
export default Container