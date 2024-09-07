
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../../assets/image/single6.jpg';
import banner2 from '../../../assets/image/single7.jpg';
import banner3 from '../../../assets/image/single5.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// import Slide from './Slide';

export default function Carousel() {
    return (
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {/* <Slide image={banner1} text='Get Your Web Development Projects Done in minutes'> </Slide> */}
                 <img src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    {/* <Slide image={banner2} text='Get Your Graphics Design Projects Done in minutes.'> </Slide> */}
                    <img src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    {/* <Slide image={banner3} text='Get Your Digital Marketing Projects Done in Minutes '> </Slide> */}
                    <img src={banner3} alt="" />
                </SwiperSlide>


            </Swiper>
        </div>
    );
}
