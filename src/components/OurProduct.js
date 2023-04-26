import React from 'react'

export const OurProduct = () => {
  return (
    <div className="ourproduct" id="product">
  <div className="title mb-5 mb-lg-5 mt-2 pt-2 pt-lg-5">
    <div className="container">
      <div className="d-flex flex-wrap align-items-end">
        <div className="title_in">
          <span>Our Similar Products</span>
          <h2 className="my-3">On-Demand Service Products</h2>
          <p>Move Forward With Our Endless All-Scale Uber Solutions</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="whyin row align-items-center">
      <picture>
        <img src="./images/banner_video.webp" alt="fancy-clone" />
      </picture>
      {/* <img data-src="https://trioangleblog.s3-us-west-2.greentreeaws.com/newtrioangle/images/fancy-clone/banner_video.webp?format=webp" alt="Makent" /> */}
      <div className="whytxt">
        <h2 className="mt-lg-0 mt-2 mb-4 mb-lg-5">
          Spiffy
          <br />
          Fancy Clone
        </h2>
        <a
          className="theme_btn"
          href="https://wisoftsolutions.com/fancy-clone/"
        >
          Know More
        </a>
      </div>
      {/* <img data-src="https://trioangleblog.s3-us-west-2.greentreeaws.com/newtrioangle/images/bannertop.webp?format=webp" alt="Banner Top" class="banner_aps" /> */}
    </div>
  </div>
</div>

  )
}
