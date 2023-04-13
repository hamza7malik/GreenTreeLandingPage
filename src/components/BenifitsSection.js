import React, { useState } from 'react'

export const BenifitsSection = () => {

    const [selectedBtn, setSelectedBtn] = useState("benifits1-tab");
    
    const handleBtnState = (e) =>{
        console.log(e.target.id)
        setSelectedBtn(e.target.id);
    }
    const prevFunction = () =>{
      const num = selectedBtn.match(/[0-9]+/ ) * 1 ;
      if(num -1 === 0) {return};
      setSelectedBtn(`benifits${num-1}-tab` )
      console.log("prev" , num)
     
    }
    const nextFunction = () =>{
      const num = selectedBtn.match(/[0-9]+/ ) * 1 ;
      if(num === 14) {return};
      setSelectedBtn(`benifits${num+1}-tab` )
      console.log("next" , num )
    }

  return (
    <div className="benifits" id="feature">
    <div className="title my-3 my-lg-5 pt-3 pt-lg-5 text-center">
      <div className="container">
        <div className="text-center">
          <div className="title_in">
            <span>Our Benefits</span>
            <h2 className="my-3">Benefits Of Our Amazon Clone Script</h2>
            <p>
              Build A Perfect Online E-Store With Our Robust Feature-Set Of Amazon
              Clone App
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <ul
        className="nav nav-pills mb-3 justify-content-center"
        id="benifits-tab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits1-tab" ? "active" : ""}`}
            id={"benifits1-tab"}
            bs-toggle="pill"
            bs-target="#benifits1"
            type="button"
            role="tab"
            aria-controls="benifits1"
            title="pills-home"
            aria-selected={`nav-link ${selectedBtn === "benifits1-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            SignUp/SigIn
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits2-tab" ? "active" : ""}`}
            id={"benifits2-tab"}
            bs-toggle="pill"
            bs-target="#benifits2"
            type="button"
            role="tab"
            aria-controls="benifits2"
            title="pills-profile"
            aria-selected={`nav-link ${selectedBtn === "benifits2-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            Multiple Payment
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits3-tab" ? "active" : ""}`}
            id={"benifits3-tab"}
            bs-toggle="pill"
            bs-target="#benifits3"
            type="button"
            role="tab"
            aria-controls="benifits3"
            title="pills-profile"
            aria-selected={`nav-link ${selectedBtn === "benifits3-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            Multiple Address
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits4-tab" ? "active" : ""}`}
            id={"benifits4-tab"}
            bs-toggle="pill"
            bs-target="#benifits4"
            type="button"
            role="tab"
            aria-controls="benifits4"
            title="pills-profile"
            aria-selected={`nav-link ${selectedBtn === "benifits4-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            Track Order
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits5-tab" ? "active" : ""}`}
            id={"benifits5-tab"}
            bs-toggle="pill"
            bs-target="#benifits5"
            type="button"
            role="tab"
            aria-controls="benifits5"
            title="pills-contact"
            aria-selected={`nav-link ${selectedBtn === "benifits5-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            Wishlist
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits6-tab" ? "active" : ""}`}
            id={"benifits6-tab"}
            bs-toggle="pill"
            bs-target="#benifits6"
            type="button"
            role="tab"
            aria-controls="benifits6"
            title="pills-contact"
            aria-selected={`nav-link ${selectedBtn === "benifits6-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            Multiple Product Category
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits7-tab" ? "active" : ""}`}
            id={"benifits7-tab"}
            bs-toggle="pill"
            bs-target="#benifits7"
            type="button"
            role="tab"
            aria-controls="benifits7"
            title="pills-contact"
            aria-selected={`nav-link ${selectedBtn === "benifits7-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            Responsive Design
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits8-tab" ? "active" : ""}`}
            id={"benifits8-tab"}
            bs-toggle="pill"
            bs-target="#benifits8"
            type="button"
            role="tab"
            aria-controls="benifits8"
            title="pills-contact"
            aria-selected={`nav-link ${selectedBtn === "benifits8-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            Add To Cart
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits9-tab" ? "active" : ""}`}
            id={"benifits9-tab"}
            bs-toggle="pill"
            bs-target="#benifits9"
            type="button"
            role="tab"
            aria-controls="benifits9"
            title="pills-contact"
            aria-selected={`nav-link ${selectedBtn === "benifits9-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            Related Products
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits10-tab" ? "active" : ""}`}
            id={"benifits10-tab"}
            bs-toggle="pill"
            bs-target="#benifits10"
            type="button"
            role="tab"
            aria-controls="benifits10"
            title="pills-contact"
            aria-selected={`nav-link ${selectedBtn === "benifits10-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            All Brands option
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits11-tab" ? "active" : ""}`}
            id={"benifits11-tab"}
            bs-toggle="pill"
            bs-target="#benifits11"
            type="button"
            role="tab"
            aria-controls="benifits11"
            title="pills-contact"
            aria-selected={`nav-link ${selectedBtn === "benifits11-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            Social Media Share
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits12-tab" ? "active" : ""}`}
            id={"benifits12-tab"}
            bs-toggle="pill"
            bs-target="#benifits12"
            type="button"
            role="tab"
            aria-controls="benifits12"
            title="pills-contact"
            aria-selected={`nav-link ${selectedBtn === "benifits12-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            Compare Option
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits13-tab" ? "active" : ""}`}
            id={"benifits13-tab"}
            bs-toggle="pill"
            bs-target="#benifits13"
            type="button"
            role="tab"
            aria-controls="benifits13"
            title="pills-contact"
            aria-selected={`nav-link ${selectedBtn === "benifits13-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            Search Option
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedBtn === "benifits14-tab" ? "active" : ""}`}
            id={"benifits14-tab"}
            bs-toggle="pill"
            bs-target="#benifits14"
            type="button"
            role="tab"
            aria-controls="benifits14"
            title="pills-contact"
            aria-selected={`nav-link ${selectedBtn === "benifits14-tab" ? "true" : "false"}`}
            onClick={e => handleBtnState(e)}
          >
            Coupon Code
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className={`tab-pane fade ${selectedBtn === "benifits1-tab" ? "show active" : ""}`}
          id="benifits1"
          role="tabpanel"
          aria-labelledby="benifits1-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/01-signup_or_signin.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0" >
                <button type="button" className="prev-step" onClick={prevFunction} >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>SignUp/SigIn</h3>
                <p className="my-3">
                  Users can easily sign-up into their account by entering their
                  Name,Email, Password and can join with google account in web.
                  The users can Sign-in easily with their e-mail Id and password.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits2-tab" ? "show active" : ""}`}
          id="benifits2"
          role="tabpanel"
          aria-labelledby="benifits2-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/02-multiple_payments.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0" >
                <button type="button" className="prev-step " onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>Multiple Payment</h3>
                <p className="my-3">
                  Secured and reliable online transactions are available with
                  different payment options. Our script has integrated with online
                  payment like Paypal, Stripe, and COD(Cash On Delivery).
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits3-tab" ? "show active" : ""}`}
          id="benifits3"
          role="tabpanel"
          aria-labelledby="benifits3-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/03-multiple_address.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0">
                <button type="button" className="prev-step" onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>Multiple Address</h3>
                <p className="my-3">
                  Users can bookmark alternative addresses according to their
                  preferences. Bookmarking multiple addresses helps them to add
                  delivery addresses easily.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits4-tab" ? "show active" : ""}`}
          id="benifits4"
          role="tabpanel"
          aria-labelledby="benifits4-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/04-track_order.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0">
                <button type="button" className="prev-step" onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>Track Order</h3>
                <p className="my-3">
                  Users can keep track of their ordered products by checking the
                  status of whether products are packed, shipped, on the way, or
                  delivered to them.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits5-tab" ? "show active" : ""}`}
          id="benifits5"
          role="tabpanel"
          aria-labelledby="benifits5-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/05-wishlist.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0">
                <button type="button" className="prev-step" onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>Wishlist</h3>
                <p className="my-3">
                  Users can add the beloved products to the wishlist by marking
                  them as add to the cart. Products in the wishlist signified a
                  user’s interest in a product without an immediate intent to
                  purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits6-tab" ? "show active" : ""}`}
          id="benifits6"
          role="tabpanel"
          aria-labelledby="benifits6-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/06-multiple_product_category.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0">
                <button type="button" className="prev-step" onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>Multiple Product Category</h3>
                <p className="my-3">
                  Our script has multiple categories to group similar products
                  together. With these Users can find their required products
                  easily by searching based on the category.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits7-tab" ? "show active" : ""}`}
          id="benifits7"
          role="tabpanel"
          aria-labelledby="benifits7-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/07-responsive_designs.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0">
                <button type="button" className="prev-step" onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>Responsive Design</h3>
                <p className="my-3">
                  Our script is designed based on the responsive structure. Our
                  Theme is 100% responsive layout design to support different
                  devices. Using this, the admin can change the appearance of the
                  website dynamically without any technical knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits8-tab" ? "show active" : ""}`}
          id="benifits8"
          role="tabpanel"
          aria-labelledby="benifits8-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/08-add_to_cart.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0">
                <button type="button" className="prev-step" onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>Add To Cart</h3>
                <p className="my-3">
                  In Amazon Clone the users can add their favourite products in
                  the cart option, and they can proceed to checkout or delete the
                  product from the cart.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits9-tab" ? "show active" : ""}`}
          id="benifits9"
          role="tabpanel"
          aria-labelledby="benifits9-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/09-related_products.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0">
                <button type="button" className="prev-step" onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>Related Products</h3>
                <p className="my-3">
                  The related products are recommendations in addition to an item
                  related to the currently viewed product by the user. This is a
                  great way to help shoppers find what they're looking for and
                  discover new products.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits10-tab" ? "show active" : ""}`}
          id="benifits10"
          role="tabpanel"
          aria-labelledby="benifits10-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/10-all_brands_option.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0">
                <button type="button" className="prev-step" onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>All Brands Option</h3>
                <p className="my-3">
                  The Amazon clone provides the user with a multi-brand of
                  products, as people will be having different tastes, will have
                  different budgets, and different brands.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits11-tab" ? "show active" : ""}`}
          id="benifits11"
          role="tabpanel"
          aria-labelledby="benifits11-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/11-social_media_sharing.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0">
                <button type="button" className="prev-step" onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>Social Media Share</h3>
                <p className="my-3">
                  Our Aamzon Clone allows the user to share their favorite items
                  in their social media account. Buyer can share the items in all
                  of the social media apps which are installed in your device and
                  can also copy the product link.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits12-tab" ? "show active" : ""}`}
          id="benifits12"
          role="tabpanel"
          aria-labelledby="benifits12-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/12-compare_option.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0">
                <button type="button" className="prev-step" onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>Compare Option</h3>
                <p className="my-3">
                  The compare option is one of the exclusive options, where the
                  users can compare various products with each other. So that they
                  can make wise decisions and select the best product with high
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits13-tab" ? "show active" : ""}`}
          id="benifits13"
          role="tabpanel"
          aria-labelledby="benifits13-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/13-search_option.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0">
                <button type="button" className="prev-step" onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>Search Option</h3>
                <p className="my-3">
                  The search option allows the user to search for a specific
                  product, the user can search for a particular product by
                  selecting a specific brand, size, or color. This saves search
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`tab-pane fade ${selectedBtn === "benifits14-tab" ? "show active" : ""}`}
          id="benifits14"
          role="tabpanel"
          aria-labelledby="benifits14-tab"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-12">
              <picture>
                <img
                  src="./images/benifits-sec/14-coupon_code.png"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
            <div className="col-lg-5 col-12">
              <div className="arrow text-center text-lg-start text-lg-start mb-4 mt-4 mt-lg-0">
                <button type="button" className="prev-step" onClick={prevFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                </button>
                <button type="button" className="ms-3 next-step " onClick={nextFunction}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </button>
              </div>
              <div className="text text-sm-start text-center">
                <h3>Coupon Code</h3>
                <p className="my-3">
                  The coupon code allows the users to get discounts on the ordered
                  products.This makes the customer stay in the same application
                  for purchasing the products by getting discounts using the promo
                  code.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}
