import React from "react";
import "./Bannar.css";
import { Link } from "react-router-dom";

const Bannar = () => {
  return (
    <>
      <section className="bannar_wrap">
        <div className="container">
          <div className="main">
            <div className="contents--">
              <h1>HELLO I AM</h1>
              <h2>Lorehm ipsmum</h2>
              <p className="pera">
                Lorem ipsum dolor sit amet consectetur. Mollis feugiat .
              </p>
              <div>
                <div className="consulting">
                  <Link to={""}>START CONSULTING</Link>
                  <p className="text">
                    <span></span>
                    Lorem ipsum dolor sit
                  </p>
                </div>
              </div>
            </div>
            <div className="profile">
              <img src="./profile.png" alt="profile" />
              <div className="profileContent">
                <h4>10K</h4>
                <p>Lorem ipsum dolor sit</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="shapeOne"></div> */}
        <div className=" absolute w-full bottom-[-30px] left-0 -z-10">
          <img className="w-full" src="./bannar.png" alt="" />
        </div>
      </section>
    </>
  );
};

export default Bannar;
