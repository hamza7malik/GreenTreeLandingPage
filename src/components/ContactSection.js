import React, { Fragment } from 'react'

export const ContactSection = () => {
  return (
 <Fragment>
 <div className="title mt-3" id="contactus">
  <div className="text-center">
    <div className="title_in">
      <span>Contact Us </span>
      <h4 className="my-2" id="contact">
        Let's Talk About Green Tree!
      </h4>
      <p>A Way to Turn Your Dreamy Venture Idea into Real-Profitable </p>
    </div>
  </div>
</div>

 <div className="contactus_main">
  <div className="container" style={{ position: "relative" }}>
    <div className="contactus col-lg-9 m-auto col-12">
      {/*  <img data-src="https://trioangleblog.s3-us-west-2.greentreeaws.com/newtrioangle/images/contactUsHandImg.png?format=webp" alt="contactUs Image" class="contactUs-hand-img" />            
      <img data-src="https://trioangleblog.s3-us-west-2.greentreeaws.com/newtrioangle/images/contactUsImg.png?format=webp" alt="contactUs Profile Image" class="contactUs-profile-img" /> */}
      <div className="right">
        <form id="form">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="from_left">
                <label className="form-label">Your Name</label>
                <div className="form-group mb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="full_name"
                    name="full_name"
                    placeholder="Full Name (Required)"
                  />
                  <div className="svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
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
                  </div>
                </div>
                <label className="form-label">Email Id</label>
                <div className="form-group mb-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Your Email Id (Required)"
                  />
                  <div className="svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      fill="currentColor"
                      className="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
                    </svg>
                  </div>
                </div>
                <label className="form-label">Phone Number</label>
                <div className="input-group phoneno mb-2 country-field">
                  <div className="input-group-text">
                    <div className="custom-select1 country-code">
                      <span
                        id="select_value"
                        className="country-code-placeholder"
                      >
                        Select
                      </span>
                      <select
                        name="phone_code"
                        className="custom-select phone_code"
                        id="phone_code"
                        data-error-placement="container"
                        data-error-container=".phone_number_error"
                      >
                        <option value="Select">Select</option>
                        <option value={93}>Afghanistan</option>
                        <option value={355}>Albania</option>
                        <option value={213}>Algeria</option>
                        <option value={1684}>American Samoa</option>
                        <option value={376}>Andorra</option>
                        <option value={244}>Angola</option>
                        <option value={1264}>Anguilla</option>
                        <option value={0}>Antarctica</option>
                        <option value={1268}>Antigua and Barbuda</option>
                        <option value={54}>Argentina</option>
                        <option value={374}>Armenia</option>
                        <option value={297}>Aruba</option>
                        <option value={61}>Australia</option>
                        <option value={43}>Austria</option>
                        <option value={994}>Azerbaijan</option>
                        <option value={1242}>Bahamas</option>
                        <option value={973}>Bahrain</option>
                        <option value={880}>Bangladesh</option>
                        <option value={1246}>Barbados</option>
                        <option value={375}>Belarus</option>
                        <option value={32}>Belgium</option>
                        <option value={501}>Belize</option>
                        <option value={229}>Benin</option>
                        <option value={1441}>Bermuda</option>
                        <option value={975}>Bhutan</option>
                        <option value={591}>Bolivia</option>
                        <option value={387}>Bosnia and Herzegovina</option>
                        <option value={267}>Botswana</option>
                        <option value={0}>Bouvet Island</option>
                        <option value={55}>Brazil</option>
                        <option value={246}>
                          British Indian Ocean Territory
                        </option>
                        <option value={673}>Brunei Darussalam</option>
                        <option value={359}>Bulgaria</option>
                        <option value={226}>Burkina Faso</option>
                        <option value={257}>Burundi</option>
                        <option value={855}>Cambodia</option>
                        <option value={237}>Cameroon</option>
                        <option value={1}>Canada</option>
                        <option value={238}>Cape Verde</option>
                        <option value={1345}>Cayman Islands</option>
                        <option value={236}>Central African Republic</option>
                        <option value={235}>Chad</option>
                        <option value={56}>Chile</option>
                        <option value={86}>China</option>
                        <option value={61}>Christmas Island</option>
                        <option value={672}>Cocos (Keeling) Islands</option>
                        <option value={57}>Colombia</option>
                        <option value={269}>Comoros</option>
                        <option value={242}>Congo</option>
                        <option value={242}>
                          Congo, the Democratic Republic of the
                        </option>
                        <option value={682}>Cook Islands</option>
                        <option value={506}>Costa Rica</option>
                        <option value={225}>Cote D'Ivoire</option>
                        <option value={385}>Croatia</option>
                        <option value={53}>Cuba</option>
                        <option value={357}>Cyprus</option>
                        <option value={420}>Czech Republic</option>
                        <option value={45}>Denmark</option>
                        <option value={253}>Djibouti</option>
                        <option value={1767}>Dominica</option>
                        <option value={1809}>Dominican Republic</option>
                        <option value={593}>Ecuador</option>
                        <option value={20}>Egypt</option>
                        <option value={503}>El Salvador</option>
                        <option value={240}>Equatorial Guinea</option>
                        <option value={291}>Eritrea</option>
                        <option value={372}>Estonia</option>
                        <option value={251}>Ethiopia</option>
                        <option value={500}>Falkland Islands (Malvinas)</option>
                        <option value={298}>Faroe Islands</option>
                        <option value={679}>Fiji</option>
                        <option value={358}>Finland</option>
                        <option value={33}>France</option>
                        <option value={594}>French Guiana</option>
                        <option value={689}>French Polynesia</option>
                        <option value={0}>French Southern Territories</option>
                        <option value={241}>Gabon</option>
                        <option value={220}>Gambia</option>
                        <option value={995}>Georgia</option>
                        <option value={49}>Germany</option>
                        <option value={233}>Ghana</option>
                        <option value={350}>Gibraltar</option>
                        <option value={30}>Greece</option>
                        <option value={299}>Greenland</option>
                        <option value={1473}>Grenada</option>
                        <option value={590}>Guadeloupe</option>
                        <option value={1671}>Guam</option>
                        <option value={502}>Guatemala</option>
                        <option value={224}>Guinea</option>
                        <option value={245}>Guinea-Bissau</option>
                        <option value={592}>Guyana</option>
                        <option value={509}>Haiti</option>
                        <option value={0}>
                          Heard Island and Mcdonald Islands
                        </option>
                        <option value={39}>
                          Holy See (Vatican City State)
                        </option>
                        <option value={504}>Honduras</option>
                        <option value={852}>Hong Kong</option>
                        <option value={36}>Hungary</option>
                        <option value={354}>Iceland</option>
                        <option value={91}>India</option>
                        <option value={62}>Indonesia</option>
                        <option value={98}>Iran, Islamic Republic of</option>
                        <option value={964}>Iraq</option>
                        <option value={353}>Ireland</option>
                        <option value={972}>Israel</option>
                        <option value={39}>Italy</option>
                        <option value={1876}>Jamaica</option>
                        <option value={81}>Japan</option>
                        <option value={962}>Jordan</option>
                        <option value={7}>Kazakhstan</option>
                        <option value={254}>Kenya</option>
                        <option value={686}>Kiribati</option>
                        <option value={850}>
                          Korea, Democratic People's Republic of
                        </option>
                        <option value={82}>Korea, Republic of</option>
                        <option value={965}>Kuwait</option>
                        <option value={996}>Kyrgyzstan</option>
                        <option value={856}>
                          Lao People's Democratic Republic
                        </option>
                        <option value={371}>Latvia</option>
                        <option value={961}>Lebanon</option>
                        <option value={266}>Lesotho</option>
                        <option value={231}>Liberia</option>
                        <option value={218}>Libyan Arab Jamahiriya</option>
                        <option value={423}>Liechtenstein</option>
                        <option value={370}>Lithuania</option>
                        <option value={352}>Luxembourg</option>
                        <option value={853}>Macao</option>
                        <option value={389}>
                          Macedonia, the Former Yugoslav Republic of
                        </option>
                        <option value={261}>Madagascar</option>
                        <option value={265}>Malawi</option>
                        <option value={60}>Malaysia</option>
                        <option value={960}>Maldives</option>
                        <option value={223}>Mali</option>
                        <option value={356}>Malta</option>
                        <option value={692}>Marshall Islands</option>
                        <option value={596}>Martinique</option>
                        <option value={222}>Mauritania</option>
                        <option value={230}>Mauritius</option>
                        <option value={269}>Mayotte</option>
                        <option value={52}>Mexico</option>
                        <option value={691}>
                          Micronesia, Federated States of
                        </option>
                        <option value={373}>Moldova, Republic of</option>
                        <option value={377}>Monaco</option>
                        <option value={976}>Mongolia</option>
                        <option value={1664}>Montserrat</option>
                        <option value={212}>Morocco</option>
                        <option value={258}>Mozambique</option>
                        <option value={95}>Myanmar</option>
                        <option value={264}>Namibia</option>
                        <option value={674}>Nauru</option>
                        <option value={977}>Nepal</option>
                        <option value={31}>Netherlands</option>
                        <option value={599}>Netherlands Antilles</option>
                        <option value={687}>New Caledonia</option>
                        <option value={64}>New Zealand</option>
                        <option value={505}>Nicaragua</option>
                        <option value={227}>Niger</option>
                        <option value={234}>Nigeria</option>
                        <option value={683}>Niue</option>
                        <option value={672}>Norfolk Island</option>
                        <option value={1670}>Northern Mariana Islands</option>
                        <option value={47}>Norway</option>
                        <option value={968}>Oman</option>
                        <option value={92}>Pakistan</option>
                        <option value={680}>Palau</option>
                        <option value={970}>
                          Palestinian Territory, Occupied
                        </option>
                        <option value={507}>Panama</option>
                        <option value={675}>Papua New Guinea</option>
                        <option value={595}>Paraguay</option>
                        <option value={51}>Peru</option>
                        <option value={63}>Philippines</option>
                        <option value={0}>Pitcairn</option>
                        <option value={48}>Poland</option>
                        <option value={351}>Portugal</option>
                        <option value={1787}>Puerto Rico</option>
                        <option value={974}>Qatar</option>
                        <option value={262}>Reunion</option>
                        <option value={40}>Romania</option>
                        <option value={70}>Russian Federation</option>
                        <option value={250}>Rwanda</option>
                        <option value={290}>Saint Helena</option>
                        <option value={1869}>Saint Kitts and Nevis</option>
                        <option value={1758}>Saint Lucia</option>
                        <option value={508}>Saint Pierre and Miquelon</option>
                        <option value={1784}>
                          Saint Vincent and the Grenadines
                        </option>
                        <option value={684}>Samoa</option>
                        <option value={378}>San Marino</option>
                        <option value={239}>Sao Tome and Principe</option>
                        <option value={966}>Saudi Arabia</option>
                        <option value={221}>Senegal</option>
                        <option value={381}>Serbia and Montenegro</option>
                        <option value={248}>Seychelles</option>
                        <option value={232}>Sierra Leone</option>
                        <option value={65}>Singapore</option>
                        <option value={421}>Slovakia</option>
                        <option value={386}>Slovenia</option>
                        <option value={677}>Solomon Islands</option>
                        <option value={252}>Somalia</option>
                        <option value={27}>South Africa</option>
                        <option value={0}>
                          South Georgia and the South Sandwich Islands
                        </option>
                        <option value={34}>Spain</option>
                        <option value={94}>Sri Lanka</option>
                        <option value={249}>Sudan</option>
                        <option value={211}>South Sudan</option>
                        <option value={597}>Suriname</option>
                        <option value={47}>Svalbard and Jan Mayen</option>
                        <option value={268}>Swaziland</option>
                        <option value={46}>Sweden</option>
                        <option value={41}>Switzerland</option>
                        <option value={963}>Syrian Arab Republic</option>
                        <option value={886}>Taiwan, Province of China</option>
                        <option value={992}>Tajikistan</option>
                        <option value={255}>
                          Tanzania, United Republic of
                        </option>
                        <option value={66}>Thailand</option>
                        <option value={670}>Timor-Leste</option>
                        <option value={228}>Togo</option>
                        <option value={690}>Tokelau</option>
                        <option value={676}>Tonga</option>
                        <option value={1868}>Trinidad and Tobago</option>
                        <option value={216}>Tunisia</option>
                        <option value={90}>Turkey</option>
                        <option value={7370}>Turkmenistan</option>
                        <option value={1649}>Turks and Caicos Islands</option>
                        <option value={688}>Tuvalu</option>
                        <option value={256}>Uganda</option>
                        <option value={380}>Ukraine</option>
                        <option value={971}>United Arab Emirates</option>
                        <option value={44}>United Kingdom</option>
                        <option value={1}>United States</option>
                        <option value={1}>
                          United States Minor Outlying Islands
                        </option>
                        <option value={598}>Uruguay</option>
                        <option value={998}>Uzbekistan</option>
                        <option value={678}>Vanuatu</option>
                        <option value={58}>Venezuela</option>
                        <option value={84}>Viet Nam</option>
                        <option value={1284}>Virgin Islands, British</option>
                        <option value={1340}>Virgin Islands, U.s.</option>
                        <option value={681}>Wallis and Futuna</option>
                        <option value={212}>Western Sahara</option>
                        <option value={967}>Yemen</option>
                        <option value={260}>Zambia</option>
                        <option value={263}>Zimbabwe</option>
                      </select>
                    </div>
                    <input
                      type="number"
                      name="phone_number"
                      id="phonenumber"
                      className="form-control"
                      placeholder="Phone Number (Optional)"
                    />
                    <div className="svg icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-telephone-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <label className="form-label msg">Message</label>
                <div className="form_right h-100">
                  <div className="form-group mb-2 h-100">
                    <textarea
                      className="form-control"
                      style={{ height: 150, resize: "unset" }}
                      name="message"
                      id="message"
                      placeholder="Type Your Text (Optional)"
                      defaultValue={""}
                    />
                    <div className="svg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="currentColor"
                        className="bi bi-chat-left-dots-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="py-3 text-lg-start text-center">
                  {/*<a href="#" class="theme_btn text-center" name="submit" style="padding: 15px 55px !important;font-weight: bold;">Submit</a>*/}
                  <input
                    className="theme_btn submit"
                    type="submit"
                    name="submit"
                    defaultValue="submit"
                    id="submit"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="topcontact">
                <div className="row">
                  <div className=" col-lg-12">
                    <div className="leftin mb-1 flex-wrap justify-content-md-around justify-content-lg-start">
                      <div className="d-flex align-items-center mb-3">
                        <div className="svg">
                          <img
                            src="https://trioangleblog.s3-us-west-2.greentreeaws.com/newtrioangle/images/skype.png"
                            className=""
                            alt="skype"
                          />
                        </div>
                        <div className="">
                          <span> Skype </span>
                          <a
                            href="skype:trioangle?chat"
                            style={{ textTransform: "initial" }}
                          >
                            trioangle
                          </a>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <div className="svg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            fill="currentColor"
                            className="bi bi-envelope-fill contact_msg"
                            viewBox="0 0 16 16"
                          >
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
                          </svg>
                        </div>
                        <div>
                          <span>Mail ID</span>
                          <a
                            href="/cdn-cgi/l/email-protection#daa9bbb6bfa99aaea8b3b5bbb4bdb6bff4b9b5b7"
                            className="text-lowercase"
                          >
                            <span
                              className="__cf_email__"
                              data-cfemail="a9dac8c5ccdae9dddbc0c6c8c7cec5cc87cac6c4"
                            >
                              [email&nbsp;protected]
                            </span>
                          </a>
                        </div>
                      </div>
                      {/* <div class="d-flex mb-3">
                                          <div class="svg">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                  <path
                                                      fill-rule="evenodd"
                                                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                                  />
                                              </svg>
                                          </div>
                                          <div>
                                              <span>Phone No</span>
                                              <a href="tel:+14152313705">+1 415 223546</a>
                                          </div>
                                      </div> */}
                      <div className="d-flex align-items-center">
                        <div className="svg">
                          <img
                            src="https://trioangleblog.s3-us-west-2.greentreeaws.com/newtrioangle/images/whatsapp.png"
                            className="contact_whatsapp"
                            alt="whatsapp"
                          />
                        </div>
                        <div>
                          <span>Whatsapp</span>
                          <a
                            target="_blank"
                            href="https://web.whatsapp.com/send?phone=+916379630152&text=Hi, I have contacted you through 'Trioangle' website. let's discuss about your clone script."
                          >
                            +91 6379630152
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*  <div class="col-lg-12">
                                  <div class="leftin">
                                      <div class="svg">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
                                          </svg>
                                      </div>
                                      <div>
                                          <span>Mail ID</span>
                                          <a href="mailto:sales@trioangle.com" class="text-lowercase">sales@trioangle.com</a>
                                      </div>
                                  </div>
                              </div>
                               */}
                  {/*  <div class="col-lg-12">
                                  <div class="leftin mb-1 flex-wrap">
                                  

                                  </div>

                              </div> */}
                  <div className="col-lg-12 d-none d-md-block">
                    <div className="mt-1 mb-0">
                      <picture>
                        <source
                          media="(min-width:992px)"
                          type="image/webp"
                          srcSet="https://trioangleblog.s3-us-west-2.greentreeaws.com/newtrioangle/images/images/contact_btm.webp?format=webp"
                        />
                        <source
                          media="(min-width:465px)"
                          type="image/webp"
                          srcSet="https://trioangleblog.s3-us-west-2.greentreeaws.com/newtrioangle/images/images/contact_btm.webp?format=webp"
                        />
                        <source
                          media="(min-width:992px)"
                          type="image/png"
                          srcSet="https://trioangleblog.s3-us-west-2.greentreeaws.com/newtrioangle/images/images/contact_btm.png?format=webp"
                        />
                        <source
                          media="(min-width:465px)"
                          type="image/png"
                          srcSet="https://trioangleblog.s3-us-west-2.greentreeaws.com/newtrioangle/images/images/contact_btm.png?format=webp"
                        />
                        <img
                          data-src="https://trioangleblog.s3-us-west-2.greentreeaws.com/newtrioangle/images/images/contact_btm.png?format=webp"
                          alt="Trioangle"
                          className="img-fluid lazyload"
                        />
                      </picture>
                      {/* <img src="https://trioangleblog.s3-us-west-2.greentreeaws.com/newtrioangle/images/contact_btm.png?format=webp"alt="bottom"> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <center>
            <span id="result" className="result" />
          </center>
        </form>
      </div>
    </div>
  </div>
</div>

 </Fragment>  )
}
