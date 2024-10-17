import propertyImage from "../assets/propertyImage.png";
import data from '../assets/data.json'; // Make sure the path to the JSON file is correct
import area from '../assets/area.png'
import cost from '../assets/cost.png'
import kumar from '../assets/kumar.png'
import time from '../assets/time.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
const PropertyCard = () => {
  return (
    <div>
      {data.map((property, index) => (
        <div key={index} className="bg-white h-96 w-auto rounded-xl shadow-md overflow-hidden my-3">
          <div className="flex">
            <div className="shrink-0">
              <img
                className="h-96 w-full object-cover p-4"
                src={propertyImage}
                alt="Property"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className=" uppercase mt-6 tracking-wide text-xl text-black font-extrabold ">
                  {property.title}
                </div>
                <div><p className=" bg-[#F3FFDA] text-xs rounded-sm p-1 mt-6 mr-20 text-gray-400 ">RERA</p></div>
                <div><p className=" bg-[#FDE7D7] mt-6 px-3 font-semibold rounded-md py-1">Ready To Move</p></div>
              </div>
              <p className="block mt-1 text-sm leading-tight font-medium text-black opacity-50">
                <FontAwesomeIcon className="px-2" icon={faLocationPin} />
                {property.location}
              </p>
              {/* <p className="mt-2 text-gray-500">{property.status}</p> */}
              <p className="mt-4 px-4 text-black-500">Configuration</p>
              <div className="mt-4 flex gap-4 px-4">
                {property.configurations.map((config, configIndex) => (
                  <div key={configIndex} className="border bg-[#FFF6EF] pr-12 pl-4 py-2 rounded-lg shadow-sm ">
                    <p className="text-2xl font-extrabold">{config.type}</p>
                    <div className="flex">
                      <div className="">
                        <img className="object-fill mt-2 w-2 h-2" src={area} alt="size" />
                      </div>
                      <span className="text-sm text-gray-600 pl-2">{config.size}</span>
                    </div>
                    <div className="flex">
                      <img className="object-fill mt-2 w-3 h-3" src={cost} alt="size" />
                      <p className="text-orange-500 text-lg font-bold pl-2">{config.price}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-x-2 px-6 mt-4">
                <p className="text-sm  mt-4 bg-[#FFF6EF] text-[#FF7A00] px-2 rounded  w-auto">{property.emiInfo}</p>
                <p className="text-sm  mt-4 bg-[#FDE7D7] text-black rounded-3xl px-2 font-semibold w-auto">{property.brokerage}</p>
              </div>
              <div className="mt-8 flex justify-between items-center px-8">
                <div className="flex items-center gap-x-3">
                  <img src={kumar} alt="Kumar Corp." className="w-8 h-8 rounded" />
                  <div>
                    <h2 className="text-sm font-semibold">Kumar Corp.</h2>
                    <p className="text-xs text-gray-600">Developer</p>
                  </div>
                  <div className="border-l border-gray-300 h-6 mx-2"></div>
                  <img src={time} alt="Another Corp." className="w-4 h-4 rounded" />
                  <div>
                    <h2 className="text-sm text-black text-opacity-30">5 Days ago</h2>
                    {/* <p className="text-xs text-gray-600">Designer</p> */}
                  </div>
                </div>
                <div className="flex gap-x-2">
                  <button className="bg-gray-200 text-gray-800 font-semibold py-1 px-2 rounded">
                    View More
                  </button>
                  <button className="bg-orange-500 text-white font-semibold py-1 px-2 rounded">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
