import React from 'react'

export const OurFeaturesSections = () => {
  return (
    <div className="ourfeature removebg review_section" id="review">
    <div className="title my-3 my-lg-5 pt-3 pt-lg-5">
      <div className="container">
        <div className="text-center">
          <div className="title_in">
            <span>Global Recognition Drives Us</span>
            <h2 className="my-3">Won High-Ratings</h2>
            <p>
              Achieve High-Rating &amp; Good Recognition Responding to Our Timely
              Efforts
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-4 col-md-6 col-12 text-center text-lg-start mb-5 my-lg-5">
          <div className="featurebox mx-2">
            <div className="text text-center">
              <picture>
                <img
                  className="review_img"
                  src="./images/trustpoilt.png"
                  alt="Trustpilot Ratings 4.5"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-center text-lg-start mb-5 my-md-5">
          <div className="featurebox mx-2">
            <div className="text text-center">
              <picture>
                <img
                  className="review_img"
                  src="./images/sitejabber.png"
                  alt="Sitejabber Values 4.4"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 text-center text-lg-start my-5 my-md-5">
          <div className="featurebox mx-2">
            <div className="text text-center">
              <picture>
                <img
                  className="review_img"
                  src="./images//google.png"
                  alt="Google Review 4.2"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
