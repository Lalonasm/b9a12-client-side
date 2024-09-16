import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categories from "../../../components/Categories/Categories";
import AboutTheBuilding from "../AboutTheBuilding/AboutTheBuilding";



const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Safoon Estate | Vacation Homes & Condo Rentals </title>
            </Helmet>
            {/* <Categories></Categories> */}
            <Banner></Banner>
            <AboutTheBuilding></AboutTheBuilding>
        </div>
    );
};

export default Home;