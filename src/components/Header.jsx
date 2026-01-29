import { NavLink } from "react-router-dom";
import "../css/Header.css";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active link color handler
  const handleActiveColor = ({ isActive }) => ({
    color: isActive ? "#e91c24" : "#333",
  });

  return (
    <>
      <nav>
        <div className="header">
          <div>
            <NavLink to="/">
              <img
                className="logo-i"
                src="assets/boat_logo.svg"
                alt="boAt Logo"
              />
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img src="menu.svg" alt="Menu" width="24" height="24" />
          </button>

          <div className={`header-c ${isMobileMenuOpen ? "active" : ""}`}>
            <ul className="nav-items">
              <li>
                <NavLink
                  to="/categories"
                  className="nav-c"
                  style={handleActiveColor}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/personalisation"
                  className="nav-c"
                  style={handleActiveColor}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  boAt Personalisation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/orders"
                  className="nav-c"
                  style={handleActiveColor}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Corporate Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/store"
                  className="nav-c"
                  style={handleActiveColor}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gifting Store
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-r">
          <div className="header-search">
            <img
              className="header-i"
              src="assets/search.png"
              alt="Search"
            />
            <input type="text" placeholder="Search Headphones" />
          </div>

          <div className="cart">
            <NavLink to="/profile">
              <img
                className="profile-i"
                src="assets/people.png"
                alt="Profile"
              />
            </NavLink>
          </div>

          <div className="cart">
            <NavLink to="/cart">
              <img className="cart-i" src="assets/bag.png" alt="Cart" />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};
