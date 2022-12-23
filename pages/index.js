import Footer from "../src/components/patterns/Footer";
import Header from "../src/components/patterns/Header";

function HomePage() {

    return (
        <div className="flex flex-col h-screen">
            <Header className="grow-0"/>
            <div className="grow">Conteudo</div>
            <Footer className="grow-0"/>
        </div>
    )
}
  
export default HomePage