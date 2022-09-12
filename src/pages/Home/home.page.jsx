import React from "react";
import Cards from "../../components/cards";
import CarouselComponent from "../../components/carsoules/carsoul.component";
import Products from "../../components/carsoules/products";
import TopCollections from "../../components/carsoules/topCollections";
import LgNavbar from "../../components/Navbar/navbar";
import Aboutpage from "../about/about";

const HomePage = () => {
  return (
    <div>
      {/* <CarouselComponent />
      <div className="px-20 flex flex-col gap-20">
        <Cards />
        <TopCollections />
        <Products name={"Leg Protection"} />
        <Products name="Hand Protection" />
        <Products name="New Arrivals" />
      </div> */}
      <div className="flex flex-col items-center justify-center gap-44 pb-80">
        <div className="w-full h-screen relative">
          <img
            src="https://www.armacell-beyond-better.com/sites/default/files/styles/hero_media_l/public/media/images/iStock-532129583.webp?h=06fc8605&itok=i9A0j84K"
            alt=""
            className="w-full h-full"
          />
          <div className="absolute top-0 left-20 w-1/2 h-screen bg-lime-600 text-gray-50 pl-20 py-20 flex flex-col items-start gap-10">
            <h1 className="text-7xl font-bold w-11/12">
              PASSIV FIRE PROTECTION - THE UNSEEN PROTECTOR
            </h1>
            <p className="text-xl font-semibold w-11/12">
              When a fire happens, people only have three minutes to escape
              before a flashover occurs. With Armacell’s passive fire protection
              solutions, you can take your fire safety measures BEYOND BETTER,
              enhancing safety levels to protect property and save lives in the
              event of fire.
            </p>
            <button className="bg-gray-50 px-4 py-2 text-lime-600 font-semibold rounded-md">
              Talk To An Expert
            </button>
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-between">
          <div className="w-1/2 h-full flex flex-col items-start justify-center gap-10 px-20">
            <h2 className="text-5xl font-bold text-lime-700">
              Whitepaper on passive fire protection
            </h2>
            <p className="text-lg font-semibold">
              Fire safety is a matter of life and death. How do you find the
              best solution for minimising the risk of fire spreading and
              causing damage? Learn how to find the right passive fire
              protection solution by downloading and reading our whitepaper.
            </p>
            <button className="bg-lime-600 text-gray-50 px-4 py-2 font-semibold rounded-md">
              PASSIVE FIRE PROTECTION - THE HIDDEN PROTECTOR
            </button>
          </div>
          <div className="w-1/2 h-full">
            <img
              src="https://www.armacell-beyond-better.com/sites/default/files/styles/cta_image_l/public/media/images/Armacell-Whitepaper-Fire%20Safety.webp?itok=MZ-c-vK-"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="px-72">
          <div className="flex flex-col items-start justify-center gap-4">
            <h3 className="text-4xl font-bold text-lime-700">
              Taking fire safety Beyond Better
            </h3>
            <p className="text-lg text-gray-600">
              Watch this video and discover how our passive fire protection
              solutions go Beyond Better to help minimise the spread of fire,
              limit damages and costs and improve safety for building occupants.
            </p>
          </div>
          <div className="w-full flex items-center justify-center mt-20">
            <iframe
              width="900"
              height="500"
              src="https://www.youtube.com/embed/YoXTO60j91g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="w-full flex flex-col gap-20">
          <div className="flex flex-col items-start justify-center gap-4 px-64">
            <h3 className="text-4xl font-bold text-lime-700">
              The importance of passive fire protection
            </h3>
            <p className="text-md text-gray-600">
              When a fire occurs, it takes only about three minutes before a
              flashover occurs. A flashover is a thermally-driven event during
              which every combustible surface exposed to heat radiation in a
              compartment or enclosed space rapidly and simultaneously ignites,
              threatening the lives of people. As buildings are equipped with
              mechanical and electric systems that connect through pipe and
              cable networks and penetrate through fire-rated walls, floors and
              service shafts, it is crucial to prevent the spread of fire and
              smoke.{" "}
            </p>
          </div>
          <div className="flex items-center justify-center gap-8">
            <div className="w-4/12 h-auto">
              <img
                src="https://www.armacell-beyond-better.com/sites/default/files/styles/text_media/public/media/images/iStock-635732164.webp?itok=8SJ4VviX"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="w-4/12">
              <h2 className="text-3xl font-bold text-lime-700">
                Fire compartmentation is key
              </h2>
              <p className="text-lg font-light text-gray-800">
                A key part of a holistic fire safety approach is fire
                compartmentation, which aims to contain the fire within a
                limited area of the building. This provides multiple levels of
                safety in a fire event by providing building users sufficient
                time to safely escape from the building. Passive fire protection
                systems are an important part of a building’s fire
                compartmentation strategy designed to seal the penetrations of
                such networks and support containment when required.
                Compartmentation also keeps escape routes free from smoke and
                other toxic gases and allows emergency responders to safely
                enter the scene.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-20">
          <h1 className="text-lime-700 text-4xl font-bold">Testimonials</h1>
          <div className="flex items-center justify-center gap-10">
            <div className="w-3/12 flex items-center justify-center gap-5 bg-gray-50 px-6 py-2 border border-gray-100 rounded-lg shadow-xl">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="w-16 h-16 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-500">
                Milton Austin
              </h3>
            </div>
            <div className="w-6/12 text-lg font-light text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam quisquam voluptatem, iure accusantium deleniti nulla ab
            </div>
          </div>
          <div className="flex items-center justify-center gap-10">
            <div className="w-3/12 flex items-center justify-center gap-5 bg-gray-50 px-6 py-2 border border-gray-100 rounded-lg shadow-xl">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="w-16 h-16 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-500">
                Milton Austin
              </h3>
            </div>
            <div className="w-6/12 text-lg font-light text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam quisquam voluptatem, iure accusantium deleniti nulla ab
            </div>
          </div>
          <div className="flex items-center justify-center gap-10">
            <div className="w-3/12 flex items-center justify-center gap-5 bg-gray-50 px-6 py-2 border border-gray-100 rounded-lg shadow-xl">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="w-16 h-16 rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-500">
                Milton Austin
              </h3>
            </div>
            <div className="w-6/12 text-lg font-light text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam quisquam voluptatem, iure accusantium deleniti nulla ab
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
