import React from 'react'

export const SubBanner = () => {
  return (
    <div className="sub_banner pb-lg-3 pt-2" id="">
    <div className="container pt-3">
      <div className="row justify-content-center align-items-center sub_banner_text">
        <div className="col-lg-6 col-md-9 col-12">
          <div className="sub_text text-lg-start text-center py-5 ps-3 ps-xl-5 ms-xxl-5">
            <h4 className="d-block fw-bold text-capitalise">
              A <span>Golden Option</span> Knocks <br /> Your Door Now!
            </h4>
            <p className="mt-4 mb-5 text-capitalise">
              Get Ready To Use this option at a right time! make your online
              presence as stay ahead in ecommerce industry
            </p>
            <div className="two_button">
              <a href="#contactus" className="theme_btn me-3 mt-3">
                Get A Quote
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-9 col-12">
          <div className="sub_img mb-4 mb-lg-0 text-center">
            <picture>
              <img
                src="./images/sub_banner_image.webp"
                alt="amazon-clone"
                style={{ width: "auto" }}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
