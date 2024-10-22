import { useEffect, useState } from "react";

const Location = () => {
  const [searchText, setSearchText] = useState("");
  const [locations, setLocations] = useState([]);

  

  const fetchLocation = async () => {
    const response = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/misc/place-autocomplete?input=" +
        searchText
    );
    const json = await response.json();
    setLocations(json.data);
  };

  useEffect(() => {
    if (searchText.length >= 3) {
      fetchLocation();
    } else {
      setLocations([]);
    }
  }, [searchText]);

  return (
    <div className="flex items-center h-full mt-20 flex-col">
      <input
        type="text"
        placeholder="search places"
        className="px-3 py-2 w-96 mb-5 border-2 border-black border-solid"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="flex flex-col">
        {locations &&
          locations.map((loc) => (
            <div
              className="shadow p-3 w-96 my-2 font-bold cursor-pointer"
              key={loc.place_id} 
            >
              {" "}
              {loc.structured_formatting.main_text} <br />{" "}
              {loc.structured_formatting.secondary_text}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Location;
