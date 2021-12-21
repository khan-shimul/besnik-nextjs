import Banner from "./banner";
import NavBar from "./navbar";
import Services from "./service";
import WhyWe from "./whyWe";

const Landing = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <Services />
            <WhyWe />
        </div>
    );
}

export default Landing;