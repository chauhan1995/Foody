import React from "react";

const MenuCard = ({ menuData }) => {
  //console.log(menuData);
  return (
    <>
      {menuData.map((curElem) => {
        return (
          <>
            <section className="sec-box">
              <div className="card-details" key={curElem.id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-cont-subtle">
                      <b>{curElem.id}</b>
                    </span>
                    <br></br>
                    <span className="card-cont-catg">{curElem.Category}</span>
                    <br></br>
                    <h1>
                      <b>{curElem.name}</b>
                    </h1>
                    <fieldset className="descrip">
                      {curElem.Description}

                      {/* <textarea rows="4" column="6">{curElem.Description}</textarea> */}
                    </fieldset>
                    <b>...Read</b>
                    <br></br>
                  </div>
                  <div>
                    <img
                      src={curElem.image}
                      alt="images.jpg"
                      width="200px"
                      // margin-right="250px"
                      // margin-left="50px"
                    />
                    <div>
                      <button
                        className="btnd"
                        onClick="Item Added To Your Cart"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};
export default MenuCard;
