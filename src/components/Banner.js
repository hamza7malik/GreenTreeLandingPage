import React from 'react'

export const Banner = () => {
  return (
    <div className="homebanner">
  <div className="subheader d-none d-lg-block">
    {/* Fixed navbar */}

  </div>
  <div className="bannerimg">
    <video
    style={{marginTop: "100px !important"}}
      controlslist="nodownload"
      preload="true"
      playsInline=""
      autoPlay=""
      loop=""
      muted=""
      disablepictureinpicture=""
      poster="./images/banner2.png"
    >
     
    </video>
  </div>
  <div className="banner-text">
    <h1 style={{color: "#fff"}}>Green Tree</h1>
   <p className="my-3 my-xl-3" style={{color: "#fff", lineHeight:"23px"}}>Set-up your online store and start selling globally 
with our all-in-one full-stack e-commerce solutions.</p> 
    <div className="two_button mb-3 mb-md-5">
    <div className="row">
    <div className="col-sm-12 col-md-6">
    <a href="#demo" className="theme_btn me-3 mt-3 " style={{backgroundColor: "#0051A4"}}>
      Try Green Tree Free
      </a>
    </div>
    <div className="col-sm-12 col-md-6">
    <a href="#contactus" className="theme_btn me-3" style={{backgroundColor: "#0051A4"}}>
      Request a Quote
      </a>
    </div>
    </div>
    
 
    </div>
  </div>
  
</div>

  )
}
