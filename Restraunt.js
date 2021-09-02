import React, { useState } from "react";
import Menu from "./Menu";
//import image from "./public/images";                 //will automatically pick from public folder if a folder named images exist.
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.Category;
    })
  ),
  "All",
]; //above line of code is for the item that is having different category than others which are mentioned in the nav bar
const Restraunt = () => {
  const [menuData, setMenuData] = useState(Menu);
  // eslint-disable-next-line
  const [menuList, setMenuList] = useState(uniqueList); //we can remove setMenuList from here , as this is giving warning of unusable

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    } //above 3 lines of code is for All Category as when "All" get clicked webpage will get blank

    const updatedList = Menu.filter((curElem) => {
      return curElem.Category === category;
    });
    setMenuData(updatedList);
  }; // above code is used when one will click on any of the category showed on navigation bar

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restraunt;
