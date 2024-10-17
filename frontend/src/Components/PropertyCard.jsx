import propertyImage from "../assets/propertyImage.png";
import data from '../assets/data.json'; // Make sure the path to the JSON file is correct
import area from '../assets/area.png'
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
            <div className="p-4 flex-1">
              <div className="uppercase mt-6 tracking-wide text-2xl text-black font-extrabold">
                {property.title}
              </div>
              <p className="block mt-1 text-sm leading-tight font-medium text-black opacity-50">
              <FontAwesomeIcon className="px-2" icon={faLocationPin} />
                {property.location}
              </p>
              {/* <p className="mt-2 text-gray-500">{property.status}</p> */}
              <p className="mt-4 text-black-500">Configuration</p> 
              <div className="mt-4 flex gap-4">
                {property.configurations.map((config, configIndex) => (
                  <div key={configIndex} className="border bg-[#FFF6EF] p-6 rounded-lg shadow-sm text-center">
                    <p className="text-2xl font-extrabold">{config.type}</p>
                    <div className="flex">
                    <img src={area} alt="" />
                    <span className="text-sm text-gray-600 ml-2">{config.size}</span>
                    </div>
                    <p className="text-orange-500 text-lg font-bold">{config.price}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-x-2">
              <p className="text-sm  mt-4 bg-[#FFF6EF] text-[#FF7A00] rounded px-2 w-auto">{property.emiInfo}</p>
              <p className="text-sm  mt-4 bg-[#FDE7D7] text-black rounded-3xl font-semibold px-2 w-auto">{property.brokerage}</p>
              </div>
              <div className="mt-8 flex justify-end gap-x-2 ">
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
      ))}
    </div>
  );
};

export default PropertyCard;
