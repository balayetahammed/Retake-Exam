import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa6";
import MobileNav from "../mobileNav/mobileNav";

const Navbar = () => {
  return (
    <>
      <nav className="navbar_wrap">
        <div className="container">
          <div className="main">
            {/* ========= Main Logo Part Here ======== */}
            <div className="logo">
              <img src="./logo.png" alt="Logo" />
            </div>

            {/* ========= Navbar + CV Download Part Here ======== */}
            <div className=" hidden lg:block">
              <div className="navbar">
                {/* ========= Main Navbar Part ======== */}
                <ul>
                  <li>
                    <Link to={""}>Home</Link>
                  </li>
                  <li>
                    <Link to={""}>About</Link>
                  </li>
                  <li>
                    <Link to={""}>Service</Link>
                  </li>
                  <li>
                    <Link to={""}>Portfolio</Link>
                  </li>
                  <li>
                    <Link to={""}>Blog</Link>
                  </li>
                  <li>
                    <Link to={""}>contect</Link>
                  </li>
                </ul>

                {/* ========= CV Download Part ======== */}
                <div className="cv_download">
                  <Link to={""}>
                    <FaDownload />
                    DOWNLOAD CV
                  </Link>
                </div>
              </div>
            </div>

            {/* ========= Mobile Navbar Part here ======== */}
            <div className="lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
