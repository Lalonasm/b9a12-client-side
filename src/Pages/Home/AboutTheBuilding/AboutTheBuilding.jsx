// import DivisionTitle from "../../../components/DivisionTitle/DivisionTitle";
// import feature from '../../../assets/image/feature.jpg';
// import feature2 from '../../../assets/image/feature2.jpg';
// import feature3 from '../../../assets/image/feature3.png';


// import './AboutTheBuilding.css'
// {/* <link rel="stylesheet" href="./AboutTheBuilding.css" /> */ }

// const AboutTheBuilding = () => {
//   return (
//     <div class=" container px-6 py-10 mx-auto">
//       <section class="about-item bg-fixed pt-8 my-20">
//         {/* <div class="text-center mb-8">
//           <h2 class="text-4xl font-bold text-gray-800 mb-4">About the Building</h2>
//           <p class="text-gray-600 text-lg max-w-2xl mx-auto">
//             Discover the history and features of our magnificent building, designed with modern amenities and cutting-edge architecture.
//           </p>
//         </div> */}
//         <DivisionTitle title={'About the Building'} subTitle={'Discover the history and features of our magnificent building, designed with modern amenities and cutting-edge architecture.'} ></DivisionTitle>

//         {/* <div className="md:flex bg-slate-500 bg-opacity-40  justify-center items-center pb-20 pt-12 px-36">
//           <div>
//             <img className="rounded" src={feature} alt="" />
//           </div>
//           <div className="md:ml-10">


//             <p className="text-white">

//               Welcome to Safoon Estate, a modern and secure residential space offering comfortable apartments with state-of-the-art amenities. </p>
//             <button className="btn btn-outline border-0 border-b-4 mt-4">Explore Now</button>
//           </div>




//         </div> */}
//         <div
//           className="hero min-h-screen"
//           style={{
//             // backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
//             backgroundImage: { feature2 },
//           }}>
//           <div className="hero-overlay bg-opacity-60"></div>
//           <div className="hero-content text-neutral-content text-center">
//             <div className="max-w-md">
//               {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
//               <p className="mb-5 text-2xl">
//                 Welcome to Safoon Estate, a modern and secure residential space offering comfortable apartments with state-of-the-art amenities.
//               </p>
//               {/* <button className="btn btn-primary">Get Started</button> */}
//               <button className="btn btn-outline border-0  hover:bg-blue-600  border-b-4 mt-4">Explore Now</button>
//             </div>
//           </div>
//         </div>
//       </section >
//     </div >
//   );
// };

// export default AboutTheBuilding;
import React from 'react';

const AboutBuilding = () => {
  return (
    <section className="bg-gray-100 hover:bg-blue-600 bg-fixed py-16 px-6 md:px-12"
    // style={{
    //   backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    //   backgroundImage: { feature2 },
    // }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Our Building</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Welcome to our modern and well-maintained building, designed to provide a perfect blend of comfort and convenience.
          Strategically located in a vibrant neighborhood, our property features state-of-the-art amenities, secure living spaces,
          and a welcoming community atmosphere. Whether you're a working professional or a family, our apartments are tailored to meet
          your needs and ensure a delightful living experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Modern Design</h3>
            <p className="text-gray-600">
              Enjoy spacious apartments with sleek interiors, contemporary layouts, and premium finishes that define luxury living.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Prime Location</h3>
            <p className="text-gray-600">
              Conveniently located near schools, shopping centers, and public transport, making your daily life effortless.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Secure Living</h3>
            <p className="text-gray-600">
              Our building is equipped with 24/7 security, surveillance systems, and a professional management team for peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutBuilding;