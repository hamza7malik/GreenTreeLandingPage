import React, {useState} from 'react'

export const FAQSection = () => {
    const [selectedBtn, setSelectedBtn] = useState("");
    
    const handleBtnState = (e) =>{
        console.log(e.target.id)
        setSelectedBtn(e.target.id);
        if(e.target.id === selectedBtn) {setSelectedBtn("")}
    }
  return (
    <div className="faq_main" id="faq">
  <div className="container">
    <ul
      className="nav nav-pills pt-5 mt-3 mt-md-5 mb-3 justify-content-center"
      id="faq-tab"
      role="tablist"
    >
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active mx-3"
          id="faq1-tab"
          data-bs-toggle="pill"
          data-bs-target="#faq1"
          type="button"
          role="tab"
          aria-controls="demo1"
          title="demo1"
          aria-selected="true"
     
        >
         <span style={{color:'#0051A4'}}>FAQ</span> 
        </button>
      </li>
    </ul>
  </div>
  <div className="container">
    <div className="faq col-xl-8 col-lg-10 m-auto col-12 mt-3 mt-md-4">
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="faq1"
          role="tabpanel"
          aria-labelledby="faq1-tab"
        >
          <div className="title">
            <div className="container">
              <div className="text-center">
                <div className="title_in mb-5">
                  <span>Frequently Asked Questions</span>
                  <h3 className="my-4">FAQ - Amazon Clone</h3>
                  <p>
                    Have Doubts? Get A Clearance for All Your Queries Regarding
                    Amazon Clone App
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item"
            id="collapseOne"
            onClick={e => handleBtnState(e)}>
              <h3 className="accordion-header" id="headingOne">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapseOne" ? "" : "collapsed"}` }   //collapsed or ""
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded={ `${selectedBtn === "collapseOne" ? "true" : "false"}`} //false or true
                  aria-controls="collapseOne"
                  id="collapseOne"
                  onClick={e => handleBtnState(e)}
                  
                >
                  1. What is Amazon Clone?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapseOne"
                  onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                  id="collapseOne"
                  onClick={e => handleBtnState(e)}
                      >
                      <path 
                      d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapseOne"
                className={`accordion-collapse collapse ${selectedBtn === "collapseOne" ? "show" : "" }`}
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  Amazon clone is a best-in-class white-label solution that
                  includes the most needed features as per the Ecommerce
                  business needs. This is a well-suit platform to build a
                  multi-vendor marketplace and grow earnings in a rapid form.
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="headingTwo">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapseTwo" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded={ `${selectedBtn === "collapseTwo" ? "true" : "false"}`}
                  aria-controls="collapseTwo"
                  id="collapseTwo"
                  onClick={e => handleBtnState(e)}
                >
                  2. What are the server requirements for amazon clone?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapseTwo"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapseTwo"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapseTwo"
                className={`accordion-collapse collapse ${selectedBtn === "collapseTwo" ? "show" : "" }`}
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  <ul className="pt-0">
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Operating System - Linux
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Web Server - Apache
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Database - MySQL
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> PHP - 5.6
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Ability to Setup Cron Jobs
                    </li>
                    {/* <li class="d-flex align-items-center"><span class="me-3"></span> Facebook App Credential</li> */}
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Google App Credential
                    </li>
                    {/* <li class="d-flex align-items-center"><span class="me-3"></span> Twitter Login Credential</li>
                                          <li class="d-flex align-items-center"><span class="me-3"></span> Apple App Credential</li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="headingThree">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapseThree" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded={ `${selectedBtn === "collapseThree" ? "true" : "false"}`}
                  aria-controls="collapseThree"
                  id="collapseThree"
                  onClick={e => handleBtnState(e)}
                >
                  3. Will you provide server hosting services ?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapseThree"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapseThree"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapseThree"
                className={`accordion-collapse collapse ${selectedBtn === "collapseThree" ? "show" : "" }`}
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  No, we do not provide server hosting services for now.
                  However, we shall help you in recommending best Web hosting
                  service providers as per your requirements.
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading4">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse4" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded={ `${selectedBtn === "collapse4" ? "true" : "false"}`}
                  aria-controls="collapse4"
                  id="collapse4"
                  onClick={e => handleBtnState(e)}
                >
                  4. How will I receive amazon clone after purchase ?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse4"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapse4"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse4"
                className={`accordion-collapse collapse ${selectedBtn === "collapse4" ? "show" : "" }`}
                aria-labelledby="heading4"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  We do not provide any direct links for downloading amazon
                  Clone. However, upon purchase of amazon clone, our support
                  team will get in touch with you to know your preference as to
                  either deploy and configure the script on your server or send
                  you the dropbox link to download the source code of script.
                  <br />
                  We offer complementary deployment services to our clients.
                  NOTE: For cloud servers (i.e. AWS, Google, IBM, etc.)
                  deployment is FREE, whereas server configuration will be
                  chargeable.Deployment time for purchased product will be 24 to
                  48 working hours.
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading5">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse5" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded={ `${selectedBtn === "collapse5" ? "true" : "false"}`}
                  aria-controls="collapse5"
                  id="collapse5"
                  onClick={e => handleBtnState(e)}
                >
                  5. How can you assure good quality in apps?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse5"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapse5"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse5"
                className={`accordion-collapse collapse ${selectedBtn === "collapse5" ? "show" : "" }`}
                aria-labelledby="heading5"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  We Basically Have A Team Of Efficient And Dedicated
                  Professionals Who Make Sure That The Quality Is Not
                  Compromised With. Our Quality Assurance (QA) Team Makes Sure
                  That There Are No Glitches Or Chances Of Malfunctions In The
                  App That Is Going To Be Build.
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading6">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse6" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse6"
                  aria-expanded={ `${selectedBtn === "collapse6" ? "true" : "false"}`}
                  aria-controls="collapse6"
                  id="collapse6"
                  onClick={e => handleBtnState(e)}
                >
                  6. Would you handle the app Submission on App store &amp; Play
                  store if i buy your Enterprise package?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse6"
                  onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                  id="collapse6"
                  onClick={e => handleBtnState(e)}
                      >
                      <path 
                      d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse6"
                className={`accordion-collapse collapse ${selectedBtn === "collapse6" ? "show" : "" }`}
                aria-labelledby="heading6"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  Sure, As Mentioned In Our Site We Would Handle The App
                  Submission Part For Enterprise Package.
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading7">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse7" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse7"
                  aria-expanded={ `${selectedBtn === "collapse7" ? "true" : "false"}`}
                  aria-controls="collapse7"
                  id="collapse7"
                  onClick={e => handleBtnState(e)}
                >
                  7. What would be the charges for creating a developer account
                  on Play store and App Store?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse7"
                  onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                  id="collapse7"
                  onClick={e => handleBtnState(e)}
                      >
                      <path 
                      d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse7"
                className={`accordion-collapse collapse ${selectedBtn === "collapse7" ? "show" : "" }`}
                aria-labelledby="heading7"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  For An Android Developer Account, You Will Have To Pay
                  $25/Year For An Apple Developer Account, You Have To Pay
                  $99/Year
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading13">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse13" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse13"
                  aria-expanded={ `${selectedBtn === "collapse13" ? "true" : "false"}`}
                  aria-controls="collapse13"
                  id="collapse13"
                  onClick={e => handleBtnState(e)}
                >
                  8. Do you subcontract the work or doing it at your own
                  development center?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse13"
                  onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                  id="collapse13"
                  onClick={e => handleBtnState(e)}
                      >
                      <path 
                      d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse13"
                className={`accordion-collapse collapse ${selectedBtn === "collapse13" ? "show" : "" }`}
                aria-labelledby="heading13"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  No. We have our own development center and we do not
                  sub-contract. We safeguard the interest of our clients and
                  exercise required control over the project and people.
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading14">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse14" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse14"
                  aria-expanded={ `${selectedBtn === "collapse14" ? "true" : "false"}`}
                  aria-controls="collapse14"
                  id="collapse14"
                  onClick={e => handleBtnState(e)}
                >
                  9. What is multi domain?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse14"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapse14"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse14"
                className={`accordion-collapse collapse ${selectedBtn === "collapse14" ? "show" : "" }`}
                aria-labelledby="heading14"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  Our application will run in MORE THAN ONE Domain with or
                  without modifications [ Ex: www.yourdomain.com,
                  www.yourdomain.net, etc., ]
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading15">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse15" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse15"
                  aria-expanded={ `${selectedBtn === "collapse15" ? "true" : "false"}`}
                  aria-controls="collapse15"
                  id="collapse15"
                  onClick={e => handleBtnState(e)}
                >
                  10. Can I use amazon clone for commercial purpose?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse15"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapse15"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse15"
                className={`accordion-collapse collapse ${selectedBtn === "collapse15" ? "show" : "" }`}
                aria-labelledby="heading15"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  No. Any ready-made and custom products from Trioangle are
                  strictly adhered to commercial use. The script codes are not
                  meant for re-sell or re-distribution. Infringement to which,
                  shall make you liable to legal actions.
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading8">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse8" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse8"
                  aria-expanded={ `${selectedBtn === "collapse8" ? "true" : "false"}`}
                  aria-controls="collapse8"
                  id="collapse8"
                  onClick={e => handleBtnState(e)}
                >
                  11. How is the project development cost estimated?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse8"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapse8"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse8"
                className={`accordion-collapse collapse ${selectedBtn === "collapse8" ? "show" : "" }`}
                aria-labelledby="heading8"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  We work on fixed man-hours. We analyze your requirements and
                  estimate the number of man-hours it will take to complete the
                  project. The quote for the project is arrived at by
                  multiplying the estimated man- hours by the man-hour rate.
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading9">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse9" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse9"
                  aria-expanded={ `${selectedBtn === "collapse9" ? "true" : "false"}`}
                  aria-controls="collapse9"
                  id="collapse9"
                  onClick={e => handleBtnState(e)}
                >
                  12. Do I have access to put my brand on your amazon clone
                  script?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse9"
                  onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                  id="collapse9"
                  onClick={e => handleBtnState(e)}
                      >
                      <path 
                      d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse9"
                className={`accordion-collapse collapse ${selectedBtn === "collapse9" ? "show" : "" }`}
                aria-labelledby="heading9"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  Yes, you can change. We are providing that facilities via
                  admin panel , you can change contact name , e-mail Id, PayPal,
                  website name, logo, about us, terms &amp; condition, and some
                  more. We offer full brand free products so that you can use
                  your own brand name in copyrights it will helpful to hide
                  scripts purchasing place from competitors.
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading10">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse10" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse10"
                  aria-expanded={ `${selectedBtn === "collapse10" ? "true" : "false"}`}
                  aria-controls="collapse10"
                  id="collapse10"
                  onClick={e => handleBtnState(e)}
                >
                  13. Can I change the code to suit to my customisation needs?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse10"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapse10"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse10"
                className={`accordion-collapse collapse ${selectedBtn === "collapse10" ? "show" : "" }`}
                aria-labelledby="heading10"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  Of course, our coding structure is easy to understand and you
                  can start modifications immediately.
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading11">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse11" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse11"
                  aria-expanded={ `${selectedBtn === "collapse11" ? "true" : "false"}`}
                  aria-controls="collapse11"
                  id="collapse11"
                  onClick={e => handleBtnState(e)}
                >
                  14. If there is any bug in functionality of the script, then
                  whom should I approach?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse11"
                  onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                  id="collapse11"
                  onClick={e => handleBtnState(e)}
                      >
                      <path 
                      d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse11"
                className={`accordion-collapse collapse ${selectedBtn === "collapse11" ? "show" : "" }`}
                aria-labelledby="heading11"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  We are there to fix up the bug if any. You can always email to{" "}
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="0e7d7b7e7e617c7a4e7a7c67616f6069626b206d6163"
                  >
                    [email&nbsp;protected]
                  </a>
                  to address the issue.
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading12">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse12" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse12"
                  aria-expanded={ `${selectedBtn === "collapse12" ? "true" : "false"}`}
                  aria-controls="collapse12"
                  id="collapse12"
                  onClick={e => handleBtnState(e)}
                >
                  15. What kind of support do you provide?
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse12"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapse12"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse12"
                className={`accordion-collapse collapse ${selectedBtn === "collapse12" ? "show" : "" }`}
                aria-labelledby="heading12"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body pt-0 pb-5">
                  This is to the attention of our clients, we would like to
                  inform you that any mails to our support team, will be replied
                  within 24-48 hours on weekdays. Weekend mails will be replied
                  on Monday on priority basis due to huge flow of business
                  sales. Please be patient while we provide you with the best
                  service.
                  <br />
                  You can reach us at{" "}
                  <a
                    href="/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="26555356564954526652544f494748414a430845494b"
                  >
                    [email&nbsp;protected]
                  </a>
                  <br />
                  The 1 year of technical support will only be valid for the
                  source code which we provide you, the tech support will be
                  Terminated if the source code is Edited or Tampered .
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="faq2"
          role="tabpanel"
          aria-labelledby="faq2-tab"
        >
          <div className="title">
            <div className="container">
              <div className="text-center">
                <div className="title_in mb-5">
                  <span>New Release Details</span>
                  <h3 className="my-4">Release Detail For Amazon Clone</h3>
                  <p>
                    List of Our New Releases Waiting to Bring Wonders in Boat
                    Rental Industry
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion" id="accordionExample1">
            <div className="accordion-item">
              <h3 className="accordion-header" id="headingOne1">
                <button
                  className="accordion-button py-3 py-md-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne1"
                  aria-expanded="true"
                  aria-controls="collapseOne1"
                  id="collapseOne1"
                  onClick={e => handleBtnState(e)}
                >
                  Latest Release Details
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapseOne1"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapseOne1"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapseOne1"
                className={`accordion-collapse collapse ${selectedBtn === "collapseOne1" ? "show" : "" }`}
                aria-labelledby="headingOne1"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body pt-0">
                  <h4>Stable 1.1</h4>
                  <span className="d-inline-block mb-2">Jan 25, 2022</span>
                  <h4>Web</h4>
                  <ul className="pt-0">
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Coupon Code
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Bulk Import And Export For
                      Admin(Categories, Brands and Products)
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Seller Verification Form
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Email Verification During Signup
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Bug Fixing
                    </li>
                  </ul>
                  <h4>Mobile App</h4>
                  <ul className="pt-0">
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Coupon Code
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Email Verification During Signup
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Bug Fixing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading5">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse5" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded={ `${selectedBtn === "collapse5" ? "true" : "false"}`}
                  aria-controls="collapse5"
                  id="collapse5"
                  onClick={e => handleBtnState(e)}
                >
                  Stable 1.0
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse5"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapse5"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse5"
                className={`accordion-collapse collapse ${selectedBtn === "collapse5" ? "show" : "" }`}
                aria-labelledby="heading5"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body pt-0">
                  <span className="d-inline-block mb-2">Jan 05, 2022</span>
                  <h4>Mobile App(iOS &amp; Android)</h4>
                  <ul className="pt-0">
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Signup &amp; Login
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Forgot Password
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Cart Page To Add Products
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Wishlist
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Paypal and Stripe payment
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> COD(Cash On Delivery) Option
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Purchase History With Filter
                      Option
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Profile Management
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Filter Option For Products
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Product Share Option
                    </li>
                  </ul>
                  <h4>Web App</h4>
                  <ul className="pt-0">
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Vendor Subscription
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Vendor System Activation (Single
                      Store)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading4">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse4" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded={ `${selectedBtn === "collapse4" ? "true" : "false"}`}
                  aria-controls="collapse4"
                  id="collapse4"
                  onClick={e => handleBtnState(e)}
                >
                  Stable 0.2
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse4"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapse4"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse4"
                className={`accordion-collapse collapse ${selectedBtn === "collapse4" ? "show" : "" }`}
                aria-labelledby="heading4"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body pt-0">
                  <span className="d-inline-block mb-2">Oct 08, 2021</span>
                  <ul>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Implemented New Design
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Google Signup And Login
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Product Attributes
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Bug Fixing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="heading3">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapse3" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse3"
                  aria-expanded={ `${selectedBtn === "collapse3" ? "true" : "false"}`}
                  aria-controls="collapse3"
                  id="collapse3"
                  onClick={e => handleBtnState(e)}
                >
                  Stable 0.1
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapse3"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapse3"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapse3"
                className={`accordion-collapse collapse ${selectedBtn === "collapse3" ? "show" : "" }`}
                aria-labelledby="heading3"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body pt-0">
                  <span className="d-inline-block mb-2">Sep 08, 2021</span>
                  <ul>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Compare Products
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Wishlist
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Stripe And Paypal Payment
                      Gateway
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Cash On Delivery
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Product Review
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Multiple Currency
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="headingTwo2">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapseTwo2" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo2"
                  aria-expanded={ `${selectedBtn === "collapseTwo2" ? "true" : "false"}`}
                  aria-controls="collapseTwo2"
                  id="collapseTwo2"
                  onClick={e => handleBtnState(e)}
                >
                  Beta 0.2
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapseTwo2"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapseTwo2"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapseTwo2"
                className={`accordion-collapse collapse ${selectedBtn === "collapseTwo2" ? "show" : "" }`}
                aria-labelledby="headingTwo2"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body pt-0">
                  <span className="d-inline-block mb-2">Sep 01, 2021</span>
                  <ul className="pt-0">
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Featured Products In Home Page
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Product Search Option
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Cart Page
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Product Share Option
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Product Filter
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item my-4">
              <h3 className="accordion-header" id="headingThree3">
                <button
                  className={`accordion-button py-3 py-md-5 ${selectedBtn === "collapseThree3" ? "" : "collapsed"}` }  
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree3"
                  aria-expanded={ `${selectedBtn === "collapseThree3" ? "true" : "false"}`}
                  aria-controls="collapseThree3"
                  id="collapseThree3"
                  onClick={e => handleBtnState(e)}
                >
                  Beta 0.1
                  <span className="faq_close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-plus close"
                      viewBox="0 0 16 16"
                      id="collapseThree3"
                      onClick={e => handleBtnState(e)}
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </span>
                  <span className="faq_open">
                    <svg
                    
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="#0051A4"
                      className="bi bi-dash open"
                      viewBox="0 0 16 16"
                      id="collapseThree3"
                      onClick={e => handleBtnState(e)}
                    >
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-
                    7A.5.5 0 0 1 4 8z" />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id="collapseThree3"
                className={`accordion-collapse collapse ${selectedBtn === "collapseThree3" ? "show" : "" }`}
                aria-labelledby="headingThree3"
                data-bs-parent="#accordionExample1"
              >
                <div className="accordion-body pt-0">
                  <span className="d-inline-block mb-2">Aug 25, 2021</span>
                  <ul className="pt-0">
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Home Page
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Signup And Login
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Add &amp; Manage Products In
                      Merchant Side
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Add &amp; Manage Products In
                      Admin Side
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" /> Admin Dashboard Page
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="me-3" />
                      Admin Settings Page
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
