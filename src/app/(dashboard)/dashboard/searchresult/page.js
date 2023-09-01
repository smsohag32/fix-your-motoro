"use client";
import WorkshopCard from "@/components/PagesSection/Dasboard/Overview/WorkshopCard";
import EmptyState from "@/components/Shared/EmptyState/EmptyState";
import MidSpinner from "@/components/Spinners/MidSpinner";
import Map from "@/components/map/Map";
import SearchContext from "@/context/SearchContext";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
const divisionDistricts = {
  "Dhaka": [
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Narayanganj",
    "Narsingdi",
    "Rajbari",
    "Shariatpur",
    "Tangail",
  ],
  "Chattogram": [
    "Bandarban",
    "Brahmanbaria",
    "Chandpur",
    "Chattogram",
    "Cumilla",
    "Cox's Bazar",
    "Feni",
    "Khagrachari",
    "Lakshmipur",
    "Noakhali",
    "Rangamati",
  ],
  "Rajshahi": [
    "Bogura",
    "Chapai Nawabganj",
    "Joypurhat",
    "Naogaon",
    "Natore",
    "Pabna",
    "Rajshahi",
    "Sirajganj",
  ],
  "Khulna": [
    "Bagerhat",
    "Chuadanga",
    "Jessore",
    "Jhenaidah",
    "Khulna",
    "Kushtia",
    "Magura",
    "Meherpur",
    "Narail",
    "Satkhira",
  ],
  "Barishal": [
    "Barishal",
    "Bhola",
    "Jhalokathi",
    "Patuakhali",
    "Pirojpur",
  ],
  "Sylhet": ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
  "Rangpur": [
    "Dinajpur",
    "Gaibandha",
    "Kurigram",
    "Lalmonirhat",
    "Nilphamari",
    "Panchagarh",
    "Rangpur",
    "Thakurgaon",
  ],
  "Mymensingh": ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"],
};

const SearchResultPage = () => {
  const [loading, setLoading] = useState(false)
  const [selectedDivision, setSelectedDivision] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const {searchText, setSearchText} = useContext(SearchContext);
  const [selectedDistrict, setSelectedDistrict] = useState(searchText);
  const [searchData, setSearchData] = useState([])
  console.log(selectedDistrict, searchText);

  useEffect(() =>{
  },[])
  
  useEffect(() =>{
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await axios(
          `https://fya-backend.vercel.app/api/v1/auth/workshops/search/division?location=${selectedDistrict}`
        );
      
        setSearchData(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedDistrict, searchText])
  
  const handleDivisionChange = (event) => {
    setLoading(true)
    setSelectedDivision(event.target.value);
    setSelectedDistrict(event.target.value)
    setLoading(false)
  };

  const filteredDivisions = Object.keys(divisionDistricts).filter((division) =>
    division.toLowerCase().includes(searchQuery.toLowerCase())
  );




 return (
    <div>
      <div className="px-4 flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-8">
      <div className="px-8 py-5 rounded-md bg-gradient-to-r from-[#f59918f1] to-[#fa4e1f]">
        <input
          type="text"
          className="px-4 py-2 border border-orange-400 rounded-md "
          placeholder="Search division"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="px-8 py-5 items-center flex rounded-md bg-gradient-to-r from-[#f59918f1] to-[#fa4e1f]">
        {filteredDivisions?.length > 0 ? (
          <select
            className="px-4 py-2 border border-orange-400 rounded-md"
            onChange={handleDivisionChange}
            value={selectedDivision}
          >
            <option value="">Select a division</option>
            {filteredDivisions.map((division, index) => (
              <option key={index} value={division}>
                {division}
              </option>
            ))}
          </select>
        ) : (
          <p className="bg-white px-4 py-2 border border-orange-400 rounded-md ">No divisions found</p>
        )}
      </div>
      {selectedDivision && (

<div className="px-8 py-5 rounded-md bg-gradient-to-r from-[#f59918f1] to-[#fa4e1f]">     
<select
            className="px-4 py-2 border border-orange-400 rounded-md "
            defaultValue={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">Select a district</option>
            {divisionDistricts[selectedDivision].map((district, index) => (
              <option key={index} value={district}>
                {district}
              </option>
            ))}
          </select> 
</div>
        )}
      
    </div>

    <div className="my-12">

    {loading ? <MidSpinner/> : 
                searchData?.length > 0 ? searchData.map(item => <WorkshopCard key={item?._id} workshopsData={item}/>) : <EmptyState address={'/dashboard/searchresult'} label={'Search again'} message={'No Workshop found'}/>
            }
    </div>

    </div>
  );
};

export default SearchResultPage;
