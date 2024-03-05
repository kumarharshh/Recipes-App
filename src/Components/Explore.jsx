import { useState } from "react";
import PropTypes from "prop-types";

const FILTERS =["All","Spicy", "Veg", "Nonveg"];
const Explore=({searches})=> {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchedTerm, setSearchedTerm] = useState("");
  const searchElements = searches
  .filter(({spicy, veg, nonveg,All})=>{
    if(selectedFilter===""){
      return true;
    }
    else if (selectedFilter==="Veg"){
      return veg;
    }
    else if(selectedFilter==="Spicy"){
      return spicy;
    }
    else if(selectedFilter==="Nonveg"){
      return nonveg
    }
    else if(selectedFilter==="All"){
      return All
    }
  })
  .filter(({ title }) => title.toLowerCase().includes(searchedTerm.toLowerCase()))
  .map(({ imgSrc, title }, index) => (
    <div className='m-4 p-8 border border-indigo-800' key={index}>
      <img src={imgSrc} className='w-32' alt={title}/>
      <p className='text-center'>{title}</p>
    </div>
  ))
  return (
    <div className='w-full flex flex-col items-center justify-center mt-5'>
      <input
        className='bg-white px-4 py-2 w-1/2 border border-indigo-800 rounded-full'
        placeholder='Know what you want? Search it!'
        value={searchedTerm}
        onChange={(e) => setSearchedTerm(e.target.value)}
      ></input>
      <div className="flex gap-5">{FILTERS.map((filter,index)=>(<button className={`border border-indigo-800 rounded-full py-1 px-3 my-5 ${(selectedFilter===filter)? "bg-indigo-800 text-white":""}`} key={index} onClick={()=>setSelectedFilter(filter)}>{filter}</button>))}</div>
      <div className='grid grid-cols-3'>{searchElements}</div>
    </div>
  )
}
Explore.propTypes = {
  searches: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      spicy: PropTypes.bool.isRequired,
      veg: PropTypes.bool.isRequired,
      nonveg: PropTypes.bool.isRequired,
      All: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default Explore