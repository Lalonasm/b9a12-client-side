import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categories from "../../../components/Categories/Categories";
import AboutTheBuilding from "../AboutTheBuilding/AboutTheBuilding";
import ApartmentLocation from "../ApartmentLocation/ApartmentLocation";



const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Safoon Estate | Vacation Homes & Condo Rentals </title>
            </Helmet>
            {/* <Categories></Categories> */}
            <Banner></Banner>
            <AboutTheBuilding></AboutTheBuilding>
            <ApartmentLocation></ApartmentLocation>
        </div>
    );
};

export default Home;