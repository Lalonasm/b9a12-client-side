import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categories from "../../../components/Categories/Categories";


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Safoon Estate | Vacation Homes & Condo Rentals </title>
            </Helmet>
            <Categories></Categories>
<Banner></Banner>
        </div>
    );
};

export default Home;