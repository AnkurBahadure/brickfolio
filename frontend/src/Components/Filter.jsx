import React, { useState } from "react";

// Reusable component for filter dropdowns
const FilterSelect = ({ options, defaultOption, onChange, selectedValue }) => {
  return (
    <select
      className="border-gray-300 text-gray-600 focus:outline-none rounded-sm px-2 py-1"
      value={selectedValue}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{defaultOption}</option>
      {options
        .map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
    </select>
  );
};

const Filter = () => {
  const locations = ["Kharadi", "Viman Nagar", "Kalyani Nagar"];
  const priceRange = ["₹0 - ₹5.00 Cr"];
  const bhkTypes = ["1 BHK", "2 BHK", "3 BHK"];
  const propertyTypes = ["Apartment", "Villa", "Studio"];
  const saleTypes = ["New", "Resale"];
  const possessionStatus = ["Ready to Move", "Under Construction"];
  const amenities = ["Swimming Pool", "Gym", "Club House"];

  // State for selected values
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedBhkType, setSelectedBhkType] = useState("");
  const [selectedBuyInPune, setSelectedBuyInPune] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedSaleType, setSelectedSaleType] = useState("");
  const [selectedPossessionStatus, setSelectedPossessionStatus] = useState("");
  const [selectedAmenities, setSelectedAmenities] = useState("");

  return (
    <>
      <div className="bg-[#FF7A00] h-auto w-full flex justify-center py-3 gap-4">
        <div className="font-semibold flex w-full overflow-x-auto gap-4 px-2">
          {/* Add the FilterSelect components */}
          <FilterSelect
            options={locations}
            defaultOption="Sort"
            selectedValue={selectedLocation}
            onChange={setSelectedLocation}
          />
          <FilterSelect
            options={propertyTypes}
            defaultOption="Property Type"
            selectedValue={selectedPropertyType}
            onChange={setSelectedPropertyType}
          />
          <FilterSelect
            options={bhkTypes}
            defaultOption="BHK Type"
            selectedValue={selectedBhkType}
            onChange={setSelectedBhkType}
          />
          <FilterSelect
            options={locations}
            defaultOption="Buy In Pune"
            selectedValue={selectedBuyInPune}
            onChange={setSelectedBuyInPune}
          />
          <FilterSelect
            options={priceRange}
            defaultOption="₹0 - ₹5.00 Cr"
            selectedValue={selectedPriceRange}
            onChange={setSelectedPriceRange}
          />
          <FilterSelect
            options={saleTypes}
            defaultOption="Sale Type"
            selectedValue={selectedSaleType}
            onChange={setSelectedSaleType}
          />
          <FilterSelect
            options={possessionStatus}
            defaultOption="Possession Status"
            selectedValue={selectedPossessionStatus}
            onChange={setSelectedPossessionStatus}
          />
          <FilterSelect
            options={amenities}
            defaultOption="Amenities"
            selectedValue={selectedAmenities}
            onChange={setSelectedAmenities}
          />
        </div>
      </div>
    </>
  );
};

export default Filter;
