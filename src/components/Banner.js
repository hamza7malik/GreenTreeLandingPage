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
      <source
        src="https://trioangleblog.s3-us-west-2.amazonaws.com/newtrioangle/images/amazon-clone/banner_video.mp4"
        type="video/mp4"
      />
    </video>
  </div>
  <div className="banner-text">
    <h1 style={{color: "#fff"}}>CliqBuy - Amazon Clone</h1>
    <p className="my-3 my-xl-3" style={{color: "#fff"}}>Stable Version – 1.1</p>
    <div className="two_button mb-3 mb-md-5">
      <a href="#demo" className="theme_btn me-3 mt-3" style={{backgroundColor: "#0051A4"}}>
        free demo
      </a>
      <a href="#contactus" className="theme_btn me-3" style={{backgroundColor: "#0051A4"}}>
        Get A Quote
      </a>
    </div>
  </div>
  {/* <img data-src="https://trioangleblog.s3-us-west-2.amazonaws.com/newtrioangle/images/backgd_banner.png?format=webp" alt="Banner Top" class="banner_aps" /> */}
</div>

  )
}
