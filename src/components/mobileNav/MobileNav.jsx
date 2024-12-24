import React, { useState } from "react";
import "./MobileNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const MobileNav = () => {
  // ======== Create an UseState =========
  const [show, setShow] = useState(false);

  return (
    <>
      <section className="mobileNav">
        <GiHamburgerMenu onClick={() => setShow(!show)} className="menuIcon" />
        {show && (
          <div className="menu">
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
                <Link to={""}>Contect</Link>
              </li>
            </ul>
          </div>
        )}
      </section>
    </>
  );
};

export default MobileNav;
