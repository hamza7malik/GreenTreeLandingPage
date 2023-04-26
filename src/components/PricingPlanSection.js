import React from 'react'

export const PricingPlanSection = () => {
  return (
    <div className="pricing_table hide_col" id="pricing">
  <div className="title my-3 my-lg-5 pt-3 pt-lg-5">
    <div className="container">
      <div className="text-center">
        <div className="title_in">
          <span>Our Pricing Plans</span>
          <h2 className="my-3">Affordable and flexible pricing plans for all businesses
          </h2>
          <p>
          Packages that suit your business needs, to kickstart your online store.

          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="speclist col-lg-8 mx-auto">
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
          <div className="specbox ">
            <h4>Professional</h4>
            <p className="specHeading">
              <sub>$</sub>XXXX <span>(USD)</span>
            </p>
            <p>
              Single Domain / <br /> Server License
            </p>
            <a href="#contactus">Contact Us</a>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-12 mb-4 mb-lg-0">
          <div className="specbox popular active">
            <h4>Enterprise</h4>
            <p className="specHeading">
              <sub>$</sub>XXXX <span>(USD)</span>
            </p>
            <p>
              Multiple Domain / <br /> Server License
            </p>
            <a href="#contactus">Contact Us</a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
          <div className="specbox">
            <h4>Professional Plus</h4>
            <p className="specHeading">
              <sub>$</sub>XXXX <span>(USD)</span>
            </p>
            <p>Single Domain / Server With Mobile Application</p>
            <a href="#contactus">Contact Us</a>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-12 mb-4 mb-lg-0">
          <div className="specbox">
            <h4>Enterprise Plus</h4>
            <p className="specHeading">
              <sub>$</sub>XXXX <span>(USD)</span>
            </p>
            <p>Multiple Domain / Server With Mobile Application</p>
            <a href="#contactus">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
    <div className="title my-3 my-lg-5 pt-3 pt-lg-5">
      <div className="container">
        <div className="text-center">
          <div className="title_in">
            <span>Solutions & Specifications</span>
            <h2 className="my-3">
            Create a powerful and customizable online store

            </h2>
            <p>
            Find the perfect package that scales up with your business

            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="table price-table my-5">
      <div className="table-responsive">
        <table className="w-100">
          <thead>
            <tr>
              <th scope="col" className="specification text-start">
                Specifications
              </th>
              <th scope="col" className="startup" >
                Professional
              </th>
          
              <th scope="col" className="" >
                  <div style={{backgroundColor: "rgb(100 177 255)", color: "#fff", borderRadius:"20px", padding:"10px 20px"}}>
                  Enterprise{" "}
              </div>
              </th>
              <th scope="col" className="pro-plus">
                Professional Plus
              </th>
              <th scope="col" className=""  >
              <div style={{backgroundColor: "#0051A4", color: "#fff", borderRadius:"20px", padding:"10px 20px"}}>
              Enterprise Plus
              </div>  
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
            </tr>
            <tr>
              <td>Buyer iOS App</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Buyer Android App</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Free App Submission</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>One Time Fee</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>100% Source Code</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Free Support</td>
              <td className="text-center">30 Days</td>
              <td className="text-center">1 Year</td>
              <td className="text-center">6 Months</td>
              <td className="text-center">1 Year</td>
            </tr>
            <tr>
              <td>Skype Support</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Team Viewer Support</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Free Installation</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className="table price-table my-5">
      <div className="table-responsive">
        <table className="w-100">
          <thead>
            <tr>
              <th scope="col" className="specification text-start">
                Specifications
              </th>
              <th scope="col" className="startup">
                Professional
              </th>
              <th scope="col" className="" >
                  <div style={{backgroundColor: "rgb(100 177 255)", color: "#fff", borderRadius:"20px", padding:"10px 20px"}}>
                  Enterprise{" "}
              </div>
              </th>
              <th scope="col" className="pro-plus">
                Professional Plus
              </th>
              <th scope="col" className=""  >
              <div style={{backgroundColor: "#0051A4", color: "#fff", borderRadius:"20px", padding:"10px 20px"}}>
              Enterprise Plus
              </div>  
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
            </tr>
            <tr>
              <td>
                Pre-Integrated Payment Gateways:
                <ul className="mb-0 ps-3">
                  <li className="ps-2 py-2">
                    Stripe Payment Gateway{" "}
                    <span className="d-block">(Supports 34 Countries)</span>
                  </li>
                  <li className="ps-2 pt-2">
                    Paypal Payment Gateway
                    <span className="d-block">(Worldwide)</span>
                  </li>
                </ul>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            {/* <tr>
                              <td class="price-td curly">
                                  Other Payment Gateways:                                
                                  <ul class="mb-0 ps-3">                                           
                                      <li class="ps-2 py-2">Flutterwave Payment Gateway<span class="d-block">(Supports 52 Countries)</span></li>
                                      <li class="ps-2 py-2">Omise Payment Gateway<span class="d-block">(Japan, Singapore, Thailand)</span></li>
                                      <li class="ps-2 py-2">Wipay Payment Gateway<span class="d-block">(West Indies)</span></li>
                                      <li class="ps-2 py-2">Authorise.net Payment Gateway<span class="d-block">(United States, Australia, Canada)</span></li>
                                      <li class="ps-2 py-2">PayJp Payment Gateway<span class="d-block">(Japan)</span></li>
                                      <li class="ps-2 py-2">PayUmoney Payment Gateway<span class="d-block">(Argentina, Brazil, Chile, Colombia, Czech Republic, Hungary, India, Mexico, Nigeria, Panama, Peru, Poland, Romania, Russia, South Africa, Turkey)</span></li>
                                      <li class="ps-2 py-2">Worldpay Payment Gateway<span class="d-block">(United States, United Kingdom, Hong Kong, Israel, And Singapore)</span></li>
                                      <li class="ps-2 py-2">Gladepay Payment Gateway<span class="d-block">(Africa)</span></li>
                                      <li class="ps-2 py-2">Square Payment Gateway<span class="d-block">(United States, United Kingdom, Canada, Australia, Japan)</span></li> 
                                      <li class="ps-2 py-2">Paystack Payment Gateway<span class="d-block">(Nigeria)</span></li> 
                                      <li class="ps-2 py-2">MOIP Payment Gateway<span class="d-block">(Brazil)</span></li>                                             
                                      <li class="ps-2 py-2">Mangopay Payment Gateway<span class="d-block">(Europe, Africa, America, Asia, Oceania, Middle East, Overseas France)</span></li> 
                                      <li class="ps-2 pt-2">Click2pay Payment Gateway<span class="d-block">(Tunisia)</span></li>                                                                                        
                                  </ul>
                              </td>
                              <td class="text-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ee514d" class="bi bi-x" viewBox="0 0 16 16">
                                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                  </svg>
                              <rgb(146, 199, 31)>
                              <td class="text-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ee514d" class="bi bi-x" viewBox="0 0 16 16">
                                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                  </svg>
                              <rgb(146, 199, 31)>
                              <td class="text-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ee514d" class="bi bi-x" viewBox="0 0 16 16">
                                      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                  </svg>
                              <rgb(146, 199, 31)>
                              <td class="text-center">
                                  <p>Any One Payment Gateway From The List Provided (Only One Payment Method)</p>
                              </td>
                          </tr>                                                                                          */}
          </tbody>
        </table>
      </div>
    </div>
    <div className="table price-table my-5">
      <div className="table-responsive">
        <table className="w-100">
          <thead>
            <tr>
              <th scope="col" className="specification text-start">
                Specifications
              </th>
              <th scope="col" className="startup">
                Professional
              </th>
              <th scope="col" className="" >
                  <div style={{backgroundColor: "rgb(100 177 255)", color: "#fff", borderRadius:"20px", padding:"10px 20px"}}>
                  Enterprise{" "}
              </div>
              </th>
              <th scope="col" className="pro-plus">
                Professional Plus
              </th>
              <th scope="col" className=""  >
              <div style={{backgroundColor: "#0051A4", color: "#fff", borderRadius:"20px", padding:"10px 20px"}}>
              Enterprise Plus
              </div>  
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
              <td style={{ borderLeft: 0, paddingTop: "1em" }}></td>
            </tr>
            <tr>
              <td>Multi Vendor E-Commerce Platform</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Administrator Panel</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Unlimited Products Upload</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Unlimited Buyers</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Unlimited Merchants</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Multiple Domain License</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Cash On Delivery (COD) Option</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>
                White Labelling/Branding - Adding Your Logo &amp; Name to the
                Website
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Admin Determine Commission Percentage</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Sign Up / Login With Google</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Multiple Currency</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Admin User &amp; Roles Management</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Manage Products</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Manage Orders</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Purchase History</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Manage Profile</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Payout Request</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Product Compare Option</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Product Share Option</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Product Stock Status</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Cart Option</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Wishlist Option</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Review Option</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Easy Product Search &amp; Filter</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>SEO Friendly</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
            <tr>
              <td>Cash On Delivery</td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
              <td className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="rgb(146, 199, 31)"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

  )
}
