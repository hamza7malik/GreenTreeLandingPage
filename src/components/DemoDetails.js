import React, {useState} from 'react'

export const DemoDetails = () => {
    
    const [selectedBtn, setSelectedBtn] = useState("demo1-tab");
    
    const handleBtnState = (e) =>{
        console.log(e.target.id)
        setSelectedBtn(e.target.id);
    }

  return (
    <div className="demodetails" id="demo">
  <div className="title my-5 pt-3 pt-lg-5">
    <div className="container">
      <div className="text-center">
        <div className="title_in">
          <span>Demo Login Details</span>
          <h2 className="my-3">Demo Details For Green Tree</h2>
          <p>
            Aware Of App-Like Green Tree Workflow By Selecting Role And Click For
            Demo
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <ul
      className="nav nav-pills mb-3 justify-content-lg-start justify-content-center ms-auto"
      id="demodetails-tab"
      role="tablist"
    >
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${selectedBtn === "demo1-tab" ? "active" : ""}`}
          id="demo1-tab"
          bs-toggle="pill"
          bs-target="#demo1"
          type="button"
          role="tab"
          aria-controls="demo1"
          title="demo1"
          aria-selected="true"
           onClick={e => handleBtnState(e)}
          >
          Admin
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${selectedBtn === "demo2-tab" ? "active" : ""}`}
          id="demo2-tab"
          bs-toggle="pill"
          bs-target="#demo2"
          type="button"
          role="tab"
          aria-controls="demo2"
          title="demo2"
          aria-selected="false"
           onClick={e => handleBtnState(e)}
          >
          buyer
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className={`nav-link ${selectedBtn === "demo3-tab" ? "active" : ""}`}
          id="demo3-tab"
          bs-toggle="pill"
          bs-target="#demo3"
          type="button"
          role="tab"
          aria-controls="demo3"
          title="demo3"
          aria-selected="false"
           onClick={e => handleBtnState(e)}
          >
          merchant
        </button>
      </li>
    </ul>
    <div className="tab-content" id="pills-tabContent">
      <div
        className={`tab-pane fade ${selectedBtn === "demo1-tab" ?  "show active": ""}`}
        id="demo1"
        role="tabpanel"
        aria-labelledby="demo1-tab"
      >
        <div className="row align-items-center">
          <div className="col-lg-7 col-12">
            <div className="demoimg mb-4 mb-lg-0">
              <picture>
                <img
                  src="./images/multiple_payments.webp"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="demoin text-center text-lg-start pb-lg-5  ">
              <h3 className="mb-4">Demo Login Details</h3>
              <div className="demotext my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                <span>
                  {" "}
                  User Name :{" "}
                  <strong className="ms-2">
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      cfemail="553431383c3b153238343c397b363a38"
                    >
                      [email&nbsp;protected]
                    </a>
                  </strong>
                </span>
              </div>
              <div className="demotext">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  fill="currentColor"
                  className="bi bi-key-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <span>
                  Password : <strong className="ms-2">123456 </strong>
                </span>
              </div>
              <div className="d-block mt-4">
                <a
                  href="https://cliqbuy.wisoft.com/admin"
                  target="_blank"
                  className="px-3 my-1 theme_btn"
                  style={{backgroundColor: "#0051A4"}}
                >
                  Web
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`tab-pane fade ${selectedBtn === "demo2-tab" ?  "show active": ""}`}
        id="demo2"
        role="tabpanel"
        aria-labelledby="demo2-tab"
      >
        <div className="row align-items-center">
          <div className="col-lg-7 col-12">
            <div className="demoimg mb-4 mb-lg-0">
              <picture>
                <img
                  src="./images/multiple_payments.webp"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="demoin text-center text-lg-start">
              <h3 className="mb-4">Demo Login Details</h3>
              <div className="demotext my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                <span>
                  {" "}
                  User Id:{" "}
                  <strong className="ms-2">
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      cfemail="7f0b0d16101e1118131a1c13160e1d0a063f18121e1613511c1012"
                    >
                      [email&nbsp;protected]
                    </a>
                  </strong>
                </span>
              </div>
              <div className="demotext">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  fill="currentColor"
                  className="bi bi-key-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <span>
                  Password : <strong className="ms-2">wisoft </strong>
                </span>
              </div>
              <div className="d-block mt-4">
                <div className="d-inline-block">
                  <a
                    href="https://cliqbuy.wisoft.com/"
                    target="_blank"
                    className="px-3 my-1 theme_btn"
                  >
                    Web
                  </a>
                  <p style={{ fontSize: 14 }} className="me-2 mb-0 text-center">
                    Version 1.1
                  </p>
                </div>
                <div className="d-inline-block">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.wisoft.cliqbuy"
                    target="_blank"
                    className="px-3 my-1 theme_btn"
                  >
                    Android
                  </a>
                  <p style={{ fontSize: 14 }} className="me-2 mb-0 text-center">
                    Version 1.1
                  </p>
                </div>
                <div className="d-inline-block">
                  <a
                    href="https://apps.apple.com/in/app/cliqbuy/id1601610493"
                    target="_blank"
                    className="px-3 my-1 theme_btn"
                  >
                    iOS
                  </a>
                  <p style={{ fontSize: 14 }} className="me-2 mb-0 text-center">
                    Version 1.1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`tab-pane fade ${selectedBtn === "demo3-tab" ?  "show active": ""}`}
        id="demo3"
        role="tabpanel"
        aria-labelledby="demo3-tab"
      >
        <div className="row align-items-center">
          <div className="col-lg-7 col-12">
            <div className="demoimg mb-4 mb-lg-0">
              <picture>
                <img
                  src="./images/multiple_payments.webp"
                  alt="amazon-clone"
                  style={{ width: "auto" }}
                />
              </picture>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="demoin text-center text-lg-start pb-lg-5">
              <h3 className="mb-4">Demo Login Details</h3>
              <div className="demotext my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  fill="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg>
                <span>
                  {" "}
                  User Id :{" "}
                  <strong className="ms-2">
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      cfemail="2a5e5843454b444d464f4946435b485f536a4d474b434604494547"
                    >
                      [email&nbsp;protected]
                    </a>
                  </strong>
                </span>
              </div>
              <div className="demotext">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  fill="currentColor"
                  className="bi bi-key-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
                <span>
                  Password : <strong className="ms-2">wisoft </strong>
                </span>
              </div>
              <div className="d-block mt-4">
                <a
                  href="https://cliqbuy.wisoft.com/shops/create"
                  target="_blank"
                  className="px-3 my-1 theme_btn"
                >
                  Web
                </a>
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
