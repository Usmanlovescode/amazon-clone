import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import Nav from "../App.js";
// import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = (props) => {
  return (
    <>
      {/*http://pngimg.com/uploads/amazon/amazon_PNG11.png  */}
      {/* <div className="container">
        <header>
          <nav className="navbar">
            <ul className="nav-list">
              <li className="list-item">
                <img src="images/amazon.png" alt="" width={92} height={92} />
              </li>
              <h1>Hello</h1>
              <li className="list-item"></li>
              <li className="list-item"></li>
            </ul>
          </nav>
        </header>
      </div> */}
      <div className="container">
        <header>
          <nav className="navbar">
            <ul className="nav__list">
              <li className="list-item logo-item">
                <Link to="/">
                  <img src="images/amazon.png" alt="" width="100" height="32" />
                </Link>
              </li>

              <li className="list-item location-item">
                <div className="location-icon">
                  <img
                    src="images/location.png"
                    alt=""
                    width="14"
                    height="16"
                    className="location"
                  />
                </div>
              </li>
              <div className="main-item">
                <li className="list-item item-deliver">
                  <div className="list-item-div">
                    <span>
                      <a href="/" id="deliver">
                        Deliver to
                      </a>
                    </span>
                    <span>
                      <a href="/" className="country">
                        Pakistan
                      </a>
                    </span>
                  </div>
                </li>
              </div>
              <div className="nav-search">
                <li className="list-item list-input">
                  <div className="input-container">
                    {/* <button className="category-list">All </button>
                  <select name="" id="">
                    <option value="">Pakistan</option>
                    <option value="">India</option>
                    <option value="">America</option>
                    <option value="">China</option>
                  </select> */}
                    <button className="all">
                      <p>All</p>
                      <select name="" id="">
                        <option
                          defaultValue={"selected"}
                          value="search-alias=aps"
                        >
                          All Departments
                        </option>
                        <option value="search-alias=arts-crafts-intl-ship">
                          Arts &amp; Crafts
                        </option>
                        <option value="search-alias=automotive-intl-ship">
                          Automotive
                        </option>
                        <option value="search-alias=baby-products-intl-ship">
                          Baby
                        </option>
                        <option value="search-alias=beauty-intl-ship">
                          Beauty &amp; Personal Care
                        </option>
                        <option value="search-alias=stripbooks-intl-ship">
                          Books
                        </option>
                        <option value="search-alias=fashion-boys-intl-ship">
                          Boy&apos;s Fashion
                        </option>
                        <option value="search-alias=computers-intl-ship">
                          Computers
                        </option>
                        <option value="search-alias=deals-intl-ship">
                          Deals
                        </option>
                        <option value="search-alias=digital-music">
                          Digital Music
                        </option>
                        <option value="search-alias=electronics-intl-ship">
                          Electronics
                        </option>
                        <option value="search-alias=fashion-girls-intl-ship">
                          Girl&apos;s Fashion
                        </option>
                        <option value="search-alias=hpc-intl-ship">
                          Health &amp; Household
                        </option>
                        <option value="search-alias=kitchen-intl-ship">
                          Home &amp; Kitchen
                        </option>
                        <option value="search-alias=industrial-intl-ship">
                          Industrial &amp; Scientific
                        </option>
                        <option value="search-alias=digital-text">
                          Kindle Store
                        </option>
                        <option value="search-alias=luggage-intl-ship">
                          Luggage
                        </option>
                        <option value="search-alias=fashion-mens-intl-ship">
                          Men&apos;s Fashion
                        </option>
                        <option value="search-alias=movies-tv-intl-ship">
                          Movies &amp; TV
                        </option>

                        <option value="search-alias=pets-intl-ship">
                          Pet Supplies
                        </option>
                        <option value="search-alias=instant-video">
                          Prime Video
                        </option>
                        <option value="search-alias=software-intl-ship">
                          Software
                        </option>
                        <option value="search-alias=sporting-intl-ship">
                          Sports &amp; Outdoors
                        </option>
                        <option value="search-alias=tools-intl-ship">
                          Tools &amp; Home Improvement
                        </option>
                        <option value="search-alias=toys-and-games-intl-ship">
                          Toys &amp; Games
                        </option>
                        <option value="search-alias=videogames-intl-ship">
                          Video Games
                        </option>
                        <option value="search-alias=fashion-womens-intl-ship">
                          Women&apos;s Fashion
                        </option>
                      </select>
                    </button>

                    <input
                      type="text"
                      name=""
                      id=""
                      size="64"
                      className="no-outline"
                    />
                    <img
                      src="images/search.svg"
                      alt=""
                      width={42}
                      height={42}
                      className="nav__searchIcon"
                    />
                  </div>
                </li>
              </div>
              <div className="nav__options">
                <div className="nav-option sign-in">
                  <span className="nav__option_lineOne hello">
                    Hello,Sign in
                  </span>
                  <br />
                  <span className="nav__option_line accounts">
                    Account &amp; Lists
                  </span>
                </div>
                <div className="nav-option orders">
                  <span className="nav__option_lineOne ret">Returns</span>
                  <br />
                  <span className="nav__option_line">&amp; Orders</span>
                </div>
                <div className="nav-option">
                  <div className="nav_basked">
                    <span className="nav__optionLineTwo nav__basketCount">
                      {/* <p className="one">1</p> */}
                      <Link to="/checkout">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35"
                          height="35"
                          fill="currentColor"
                          className="bi bi-cart2"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                      </Link>
                      <Link to="/checkout">
                        <p className="one">{props.number}</p>
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </ul>
          </nav>
        </header>

        <nav className="lower__nav">
          <div className="lower__nav__icons">
            <div className="lower__nav__icon"></div>
            <div className="lower__nav__icon"></div>
            <div className="lower__nav__icon"></div>
          </div>
          <div className="lower_link lower__nav__all"> All</div>
          <div className="lower_link lower__nav__deals">Today&apos;s Deals</div>
          <div className="lower_link lower__nav__service">Customer Service</div>
          <div className="lower_link lower__nav__registry"> Registry</div>
          <div className="lower_link lower__nav__cards"> Gift Cards</div>
          <div className="lower_link lower__nav__sell"> Sell</div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
