/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent } from "react";

type PlacesAutocompleteProps = {
  address: string;
  setAddress: (address: string) => void;
  setFullAdressInfo: (fullAddress: Record<string, any>) => void;
};

const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({
  address,
  setAddress,
  setFullAdressInfo,
}) => {
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const fetchSuggestions = async (text: string) => {
    if (!text) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${address}&filter=countrycode:au&apiKey=${process.env.PLACES_AUTOCOMPLETE_API_KEY}`
      );

      if (!response.ok) {
        console.log("Failed to fetch suggestions");
      }

      const data = await response.json();
      setSuggestions(data.features || []);
    } catch (error) {
      console.error("Error fetching autocomplete suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setAddress(text);
    fetchSuggestions(text);
  };

  const handleSuggestionClick = (suggestion: any) => {
    setAddress(suggestion.properties.formatted);
    setFullAdressInfo(suggestion.properties);
    setSuggestions([]); // Clear suggestions after selecting one
  };

  return (
    <div className="flex flex-col max-w-xl items-center w-full">
      <p className="text-white w-[80%] mx-auto mb-4 text-center">
        We ask this so we can give you the most accurate quote possible, we
        won’t share your address with anyone else.
      </p>
      <input
        type="text"
        placeholder="Enter your full address"
        value={address}
        required
        onChange={handleInputChange}
        className="p-3 w-3/4 border border-gray-300 text-[#333333] rounded-lg text-xs md:text-sm shadow-sm focus:outline-none focus:border-blue-500 mb-4"
      />
      {suggestions.length > 0 && (
        <ul className="  bg-white h-[140px]  mb-2 py-2  border border-gray-300 rounded-md shadow-md  overflow-y-scroll">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.properties.place_id}
              className="px-4 text-xs md:text-sm py-2 text-[#333333] cursor-pointer hover:bg-blue-100"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.properties.formatted}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlacesAutocomplete;
