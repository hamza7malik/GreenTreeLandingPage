import React from 'react'

export const Header = () => {
  return (
    <header className="main_header" style={{backgroundColor: "#fff"}}>
    <div className="fix-top active" style={{top: 0}}>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light" style={{backgroundColor: "#fff",
        height: "107px"}}>
        <div className="container">
          <a
            className="navbar-brand trioangle_logo"
            href="https://wisoftsolutions.com/"
          >
            <img
              src="./images/scroll-logo.svg"
              className="toplogo lazyload"
              alt="Trioangle"
              style={{height: "33px !important"}}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center align-items-unset">
   
            <div className="subheader d-none d-lg-block">
              {/* Fixed navbar */}
              <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                <div className="container">
                  <a className="navbar-brand" href="#">
                    <img
                      src="./images/scroll-logo.svg"
                      className="toplogo"
                      alt="Logo"
                      // style={{height:"33px !important"}}
                    />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#feature"
                        >
                          Features
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#demo">
                          Demo
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#addons">
                          Add-Ons <span className="blink_text" style={{backgroundColor: "#0051A4"}}>New</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#pricing">
                          Pricing
                        </a>
                      </li>
                      {/* <li class="nav-item">
                                        <a class="nav-link" href="#">Templates</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Solutions</a>
                                    </li> */}
                      <li className="nav-item">
                        <a className="nav-link" href="#technologies">
                          Technologies
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#faq">
                          FAQ
                        </a>
                      </li>
                      {/* <li class="nav-item">
          <a class="nav-link" href="#portfolio">portfolio</a>
          </li> */}
          
          {/* <li className="nav-item">
                        <a className="nav-link" href="#review">
                          reviews<span className="blink_text">New</span>
                        </a>
        </li> */}
                      <li className="nav-item">
                        <a className="nav-link" href="#contactus">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
         
    
              <li className="nav-item ms-lg-0 mt-lg-1" style={{zIndex: 10000}}>
                <a className="downarrow theme_btn " href="javascript:void(0)" style={{backgroundColor: "#92c71f"}}>
                  Get Quote
                </a>
        
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  
  )
}
