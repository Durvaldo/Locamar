import Head from "next/head";
import Footer from "../src/components/patterns/Footer";
import Header from "../src/components/patterns/Header";
import HomePageMain from "../src/components/patterns/HomePageMain";

function HomePage() {

    return (
        <div className="flex flex-col h-screen">
            <Head><title>Locamar Locações</title></Head>
            <Header className="grow-0"/>
            <HomePageMain className="grow"/>
            <Footer className="grow-0"/>
        </div>
    )
}
  
export default HomePage