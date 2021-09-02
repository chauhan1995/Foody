import React from "react";

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <h1 className="Header">
        <b>FoodyApp</b>
      </h1>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <>
                <button
                  className="btn-group__item"
                  onClick={() => filterItem(curElem)}
                >
                  <b>{curElem}</b>
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
