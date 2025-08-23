import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/Logo.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary h-16 md:h-20 flex items-center justify-between px-4 md:px-8 lg:px-36 relative">
      <img src={logo} alt="Ema John Logo" className="h-8 md:h-10" />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 lg:gap-8">
        <Link
          to="/shop"
          className="text-white text-base lg:text-lg hover:text-accent transition-colors"
        >
          Shop
        </Link>
        <Link
          to="/orders"
          className="text-white text-base lg:text-lg hover:text-accent transition-colors"
        >
          Orders
        </Link>
        <Link
          to="/inventory"
          className="text-white text-base lg:text-lg hover:text-accent transition-colors"
        >
          Inventory
        </Link>
        <Link
          to="/about"
          className="text-white text-base lg:text-lg hover:text-accent transition-colors"
        >
          About
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-primary md:hidden z-50">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              to="/shop"
              className="text-white text-lg hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/orders"
              className="text-white text-lg hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Orders
            </Link>
            <Link
              to="/inventory"
              className="text-white text-lg hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inventory
            </Link>
            <Link
              to="/about"
              className="text-white text-lg hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
