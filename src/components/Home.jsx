import React from "react";


const Home = () => {
  return (
    <div className="bg-regal-blue h-auto w-full py-10 rounded-b-lg">
      <div className="mx-auto flex flex-col items-center  justify-center sm:h-full px-4 md:flex-row ">
      <div className="lg:w-full  w-full mx-auto transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <img src="https://ik.imagekit.io/aq3ybtarw/landing/mobile-landing.webp?updatedAt=1680626119244" alt="hero-img" fetchpriority="high" class="my-custom-class flex m-auto" width="550" loading="lazy" />
      </div>
      <div>
        <div className="container space-x-2 text-3xl lg:py-4 px-5 mx-auto sm:text-6xl sm:px-20 tracking-normal my-2">
          <h1 className="text-white ">Gauge Water Purifier <span></span>
            <span className="mx-2 rt-textappear text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">Puts an end</span>
            <span className="mx-auto">to RO service pain</span>
          </h1>
        </div>
        <p className="text-gray-400 px-20">Fully automatic water purifier provides the highest water savings while ensuring a seamless service experience.</p>
        <div className="flex flex-col justify-center items-center mx-auto">
      
          <button className="my-10 inline-flex text-white focus:outline-none border-1 rounded-full bg-blue-500 hover:bg-blue-600 py-4 lg:py-5 px-12 mb-7 text-base font-semibold">Take a product Tour
          </button>
          <p className="font-medium text-gray-300 ">Experience Convenience Like Never Before With Our Smart Water Purifier</p>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Home;
