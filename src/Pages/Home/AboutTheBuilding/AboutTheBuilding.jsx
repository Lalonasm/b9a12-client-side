<link rel="stylesheet" href="./AboutTheBuilding.css" />

const AboutTheBuilding = () => {
  return (
    <section class="about-item  bg-b py-10 px-5">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-8">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">About the Building</h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the history and features of our magnificent building, designed with modern amenities and cutting-edge architecture.
          </p>
        </div>

        <div class="bg-white shadow-lg rounded-lg p-8">
          <h3 class="text-2xl font-semibold mb-4">Building Details</h3>
          <p class="text-gray-700 leading-relaxed mb-6">
            Our building, established in 2020, stands as a hallmark of innovative construction. It includes 20 floors of residential units, featuring state-of-the-art security systems, eco-friendly designs, and breathtaking views of the city skyline. Every floor is equipped with high-speed elevators, energy-efficient lighting, and modern interiors.
          </p>

          <div class="flex flex-wrap justify-around mt-8">
            <div class="w-full md:w-1/3 mb-6">
              <h4 class="text-xl font-medium text-gray-800 mb-2">Year Built</h4>
              <p class="text-gray-600">2020</p>
            </div>
            <div class="w-full md:w-1/3 mb-6">
              <h4 class="text-xl font-medium text-gray-800 mb-2">Floors</h4>
              <p class="text-gray-600">20</p>
            </div>
            <div class="w-full md:w-1/3 mb-6">
              <h4 class="text-xl font-medium text-gray-800 mb-2">Amenities</h4>
              <p class="text-gray-600">Pool, Gym, Parking, Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheBuilding;