import { useState } from "react";
import Explore from "./Explore";
import ExploreRegion from "./ExploreRegion";
import SetMenu from "./SetMenu";
import imgUrl from "../assets/Samosa.webp";
import chickenbiryani from "../assets/chickenbiryani.webp";
import chillichicken from "../assets/chillichicken.webp";
import whitesaucepasta from "../assets/whitesaucepasta.webp";
import vegpizza from "../assets/vegpizza.webp";
import nonvegburger from "../assets/nonvegburger.webp";
const searches = [
  {
    imgSrc: nonvegburger,
    title: "Non Veg Burger",
    spicy:true,
    veg:false,
    nonveg:true,
    american:true,
    All:true
  },
  {
    imgSrc: imgUrl,
    title: "Samosa",
    spicy:true,
    veg:true,
    nonveg:false,
    indian:true,
    All:true
  },
  {
    imgSrc: chillichicken,
    title: "Chilli Chicken",
    spicy:true,
    veg:false,
    nonveg:true,
    chinese:true,
    All:true
  },
  {
    imgSrc: whitesaucepasta,
    title: "White Sauce Pasta",
    spicy:false,
    veg:true,
    nonveg:false,
    italian:true,
    All:true
  },
  {
    imgSrc: vegpizza,
    title: "Veg Pizza",
    spicy:true,
    veg:true,
    nonveg:false,
    italian:true,
    All:true
  },
  {
    imgSrc: chickenbiryani,
    title: "Chicken Biryani",
    spicy:true,
    veg:false,
    nonveg:true,
    indian:true,
    All:true
  },
]
const tabs=['Explore', 'ExploreRegion', 'SetMenu'] ;
function Header() {
const [menuItems, setMenuItems] = useState(searches);
const [tabSelected, setTabSelected] = useState(0);

 let selectedView=<Explore searches={menuItems}></Explore>

 if(tabSelected===1){
    selectedView=<ExploreRegion searches={menuItems}></ExploreRegion>
 }else if(tabSelected===2){
    selectedView=<SetMenu searches={searches} setMenuItems={setMenuItems}></SetMenu>
 }
  return (
    <div className="flex flex-col justify-center w-full items-center m-10">
      <h1 className="text-2xl">Recipes</h1>
      <div className='flex gap-10'>
        {tabs.map((tab,index)=>(
          <button 
          key={tab}
          className={tabSelected===index ? "border-b-4 borde border-indigo-800" : 
          "border-b-4 borde border-orange-100"} 
          onClick={()=>setTabSelected(index)}>
            {tab}
          </button>
        ))}
      </div>
      <div className='w-full'>{selectedView}</div>
    </div>
  )
}
export default Header;