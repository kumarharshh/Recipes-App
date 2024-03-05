import { useState } from "react";
import PropTypes from "prop-types";
import {useForm} from "react-hook-form"

const SetMenu=({searches,setMenuItems})=> {
    const [addItem, setAddItem] = useState(searches);
    const [show, setShow] = useState(false);
    const{register,handleSubmit,formState:{errors}}=useForm();

    const AddingItem=(data)=>{
      const newItem={
        title:data.Title,
        imgSrc:data.imgSrc,
        spicy:data.spicy,
        veg:data.veg,
        nonveg:data.nonveg,
        american:data.american,
        chinese:data.chinese,
        indian:data.indian,
        italian:data.italian,
        All:data.All
      }
      setAddItem([...addItem,newItem])
      setMenuItems([...addItem,newItem])
      setShow(true);
    }
    return (
      <div>
        <h1>SetMenu</h1>
        <form onSubmit={handleSubmit(AddingItem)}>
          <div>
            <label htmlFor="Title" className="block text-sm font-medium text-gray-600">Title:</label>
            <input type="text" name="Title" {...register("Title",{required:true})} className={`text-white mt-1 p-2 w-85 border${errors.Title ? "-red-500" : "-gray-300"} rounded-md focus:outline-none focus:border-indigo-500`} />
            {errors.Title && <span className="text-red-500 text-sm mt-1">This field is required</span>}
            <label htmlFor="imgSrc" className="block text-sm font-medium text-gray-600">imgSrc:</label>
            <input type="text" name="imgSrc" {...register("imgSrc",{required:true})} className={`text-white mt-1 p-2 w-85 border${errors.Title ? "-red-500" : "-gray-300"} rounded-md focus:outline-none focus:border-indigo-500`} />
            {errors.imgSrc && <span className="text-red-500 text-sm mt-1">This field is required</span>}
            <label htmlFor="spicy" className="block text-sm font-medium text-gray-600">Spicy:</label>
            <input type="checkbox" name="spicy" {...register("spicy")}/>
            <label htmlFor="veg" className="block text-sm font-medium text-gray-600">Veg:</label>
            <input type="checkbox" name="veg" {...register("veg")}/>
            <label htmlFor="nonveg" className="block text-sm font-medium text-gray-600">NonVeg:</label>
            <input type="checkbox" name="nonveg" {...register("nonveg")}/>
            <label htmlFor="american" className="block text-sm font-medium text-gray-600">American:</label>
            <input type="checkbox" name="american" {...register("american")}/>
            <label htmlFor="italian" className="block text-sm font-medium text-gray-600">Italian:</label>
            <input type="checkbox" name="italian" {...register("italian")}/><br/>
            <label htmlFor="chinese" className="block text-sm font-medium text-gray-600">Chinese:</label>
            <input type="checkbox" name="chinese" {...register("chinese")}/>
            <label htmlFor="indian" className="block text-sm font-medium text-gray-600">Indian:</label>
            <input type="checkbox" name="indian" {...register("indian")}/>
            <label htmlFor="All" className="block text-sm font-medium text-gray-600">Is it Safe?</label>
            <input type="checkbox" name="All" {...register("All",{required:true})} className={`mt-1 p-2 w-full border${errors.Title ? "-red-500" : "-gray-300"} rounded-md focus:outline-none focus:border-indigo-500`}/>
            {errors.All && <span className="text-red-500 text-sm mt-1">This field is required</span>}
          </div>
          <div className="mb-4">
            <input type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 cursor-pointer" />
          </div>
        </form>
        {show &&<div className="mb-4">
        <h2 className="text-lg font-medium mb-2">Updated Menu Items</h2>
        <ul className="pl-6">
          {addItem.map((item, index) => (
            <li key={index} className="text-gray-700 mb-2">{item.title}</li>
          ))}
        </ul>
      </div>}

      </div>
    )
  }

  SetMenu.propTypes = {
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
    setMenuItems: PropTypes.func.isRequired,
  };
  export default SetMenu;