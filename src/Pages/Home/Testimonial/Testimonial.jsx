import DivisionTitle from "../../../components/DivisionTitle/DivisionTitle";


const Testimonial = () => {
    return (
        <div>
            <DivisionTitle title={'Testimonial'} subTitle={'What our clients say'}></DivisionTitle>
            <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-10 mx-auto">
                    {/* <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                        What our <span class="text-blue-500 ">clients</span> say
                    </h1>

                    <p class="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
                        alias, adipisci rem similique, at omnis eligendi optio eos harum.
                    </p> */}

                    <section class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                        <div class="p-8 border rounded-lg hover:bg-blue-600  dark:border-gray-700">
                            <p class="leading-loose text-gray-500 hover:text-white dark:text-gray-400">
                                ⭐️⭐️⭐️⭐️⭐️ <br />
                                <p className="text-lg font-bold">

                                    "An exceptional experience!"
                                </p>
                                "Living here has been a breeze! The management team is always responsive, and the facilities are top-notch. I love how organized and well-maintained everything is. Highly recommended!".
                            </p>

                            <div class="flex items-center  mt-8 -mx-2">
                                <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                <div class="mx-2 ">
                                    <h1 class="font-semibold text-gray-800 hover:text-white dark:text-white">Robert</h1>
                                    <span class="text-sm text-gray-500 hover:text-white">CTO, Robert Consultency</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-8 border rounded-lg dark:border-gray-700 hover:bg-blue-600">
                            <p class="leading-loose text-gray-500 dark:text-gray-400 hover:text-white">
                                ⭐️⭐️⭐️⭐️⭐️
                                <br />
                                <p className="text-lg font-bold"> "A place to truly call home!"</p>
                                "From the seamless move-in process to the friendly staff, this building offers everything I could ever want. The amenities are amazing, and I feel so safe and secure here. Thank you for creating such a welcoming environment!".
                            </p>

                            <div class="flex items-center mt-8 -mx-2">
                                <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                                <div class="mx-2">
                                    <h1 class="font-semibold text-gray-800 dark:text-white hover:text-white">Jeny Doe</h1>
                                    <span class="text-sm text-gray-500 hover:text-white">CEO, Jeny Consultency</span>
                                </div>
                            </div>
                        </div>

                        <div class="p-8 border rounded-lg dark:border-gray-700 hover:bg-blue-600">
                            <p class="leading-loose text-gray-500 dark:text-gray-400 hover:text-white">
                                ⭐️⭐️⭐️⭐️⭐️
                                <br />
                                <p className="text-lg font-bold"> "Professional and reliable management!"</p>
                                "Whenever I’ve had a concern, the team has been quick to resolve it. The app for managing payments and maintenance requests is super convenient, too. It’s clear they really care about the residents.".
                            </p>

                            <div class="flex items-center mt-8 -mx-2">
                                <img class="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                                <div class="mx-2">
                                    <h1 class="font-semibold text-gray-800 dark:text-white hover:text-white">Ema Watson </h1>
                                    <span class="text-sm text-gray-500 hover:text-white">Marketing Manager at Stech</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section >
        </div >
    );
};

export default Testimonial;