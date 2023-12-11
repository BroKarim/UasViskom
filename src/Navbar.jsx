import React from 'react';

export default function Navbar() {
  return (
    <>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            Face.io
          </a>

          <div className="nav__menu" id="nav-menu">
            <a href='https://github.com/BroKarim/UasViskom.git' className="button-50" role="button">
              Github
            </a>

            {/* Close button */}
            <div className="nav__close" id="nav-close">
              <i className="ri-close-line"></i>
            </div>
          </div>

          <div className="nav__actions">
            {/* Search button */}
            <i className="ri-search-line nav__search" id="search-btn"></i>

            {/* Login button */}
            <i className="ri-user-line nav__login" id="login-btn"></i>

            {/* Toggle button */}
            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </nav>
      </header>

      {/* SEARCH */}
      <div className="search" id="search">
        <form action="" className="search__form">
          <i className="ri-search-line search__icon"></i>
          <input type="search" placeholder="What are you looking for?" className="search__input" />
        </form>

        <i className="ri-close-line search__close" id="search-close"></i>
      </div>

      {/* LOGIN */}
      <div className="login" id="login">
        <form action="" className="login__form">
          <h2 className="login__title">Log In</h2>

          <div className="login__group">
            <div>
              <label htmlFor="email" className="login__label">
                Email
              </label>
              <input type="email" placeholder="Write your email" id="email" className="login__input" />
            </div>

            <div>
              <label htmlFor="password" className="login__label">
                Password
              </label>
              <input type="password" placeholder="Enter your password" id="password" className="login__input" />
            </div>
          </div>

          <div>
            <p className="login__signup">
              You do not have an account? <a href="#">Sign up</a>
            </p>

            <a href="#" className="login__forgot">
              You forgot your password
            </a>

            <button type="submit" className="login__button">
              Log In
            </button>
          </div>
        </form>

        <i className="ri-close-line login__close" id="login-close"></i>
      </div>
    </>
  );
}
