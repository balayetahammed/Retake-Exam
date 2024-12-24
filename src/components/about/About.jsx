import React from "react";
import "./About.css";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container">
          <div className="aboutTop">
            <div className="aboutMe">
              <h2>About Me</h2>
              <p>I like creating a cool design project</p>
              <div className="socialIcons">
                <button className="cv">
                  <FaDownload />
                  DOWNLOAD CV
                </button>
                <div className="icons">
                  <Link to={""}>
                    <img src="./tw.png" alt="Twitter" />
                  </Link>
                  <Link to={""}>
                    <img src="./insta.png" alt="instagram" />
                  </Link>
                  <Link to={""}>
                    <img src="./fb.png" alt="Facebook" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="sign">
              <p>
                Lorem ipsum dolor sit amet consectetur. Nibh quis a ut dignissim
                dolor enim ultricies sit vitae. Turpis lorem libero nisl mattis
                fermentum. Enim lectus pretium auctor diam morbi vulputate. Nec
                tortor nunc proin purus.{" "}
              </p>
              <img src="./sign.png" alt="sign" />
            </div>
          </div>
          <div className="aboutBottom">
            <div className="contect">
              <ul>
                <li>
                  <span className="mr-[120px]">Age:</span>
                  <span>29</span>
                </li>
                <li>
                  <span className="mr-[48px]">Residence:</span>
                  <span>USA</span>
                </li>
                <li>
                  <span className="mr-[70px]">Address:</span>
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li>
                  <span className="mr-[90px]">E-mail:</span>
                  <span>email@example.com</span>
                </li>
                <li>
                  <span className="mr-[88px]">Phone:</span>
                  <span>011254698751</span>
                </li>
                <li>
                  <span className="mr-[50px]">Freelance:</span>
                  <span>Available</span>
                </li>
              </ul>
            </div>
            <div className="skills">
              <div className="boxs">
                <h4>50%</h4>
                <p>Lorem ipsum</p>
              </div>
              <div className="boxs">
                <h4>75%</h4>
                <p>Lorem ipsum</p>
              </div>
              <div className="boxs">
                <h4>38%</h4>
                <p>Lorem ipsum</p>
              </div>
              <div className="boxs">
                <h4>63%</h4>
                <p>Lorem ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
