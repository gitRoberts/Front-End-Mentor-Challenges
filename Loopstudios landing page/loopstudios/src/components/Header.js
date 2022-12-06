import React from 'react'
import logo from '../images/logo.svg'
import mobileMenu from "../images/mobile/icons8-hamburger-menu-24.png";
import mobileMenuX from "../images/mobile/icons8-circled-x-24.png";

const Header = function() {

    function showMenu() {
        let imgBtn = document.querySelector("#mobile-menu");
        let nav = document.querySelector("nav");
        let menuBtn = document.querySelector(".menu-btn");

        if(menuBtn.classList.contains("canOpen")) {
            imgBtn.src = mobileMenuX;
            nav.classList.add("openMenu");
            menuBtn.classList.remove("canOpen");
        }else {
            menuBtn.classList.add("canOpen");
            nav.classList.remove("openMenu");
            imgBtn.src = mobileMenu;
        }
    }

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Loopstudios" />
        </div>

        <div className="menu-btn canOpen">
          <img src={mobileMenu} alt="" id="mobile-menu" onClick={() => {showMenu()}}/>
        </div>

        <nav>
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>
              <button>About</button>
            </li>
            <li>
              <button>Careers</button>
            </li>
            <li>
              <button>Events</button>
            </li>
            <li>
              <button>Products</button>
            </li>
            <li>
              <button>Support</button>
            </li>
          </ul>
        </nav>

      </header>
    </>
  )
}

export default Header