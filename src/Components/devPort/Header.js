import React from "react";
import one from "../devPort/girl.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt, faAngular } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
// import "react-multi-carousel/lib/styles.css";
import writing from "../../assest/writing.jpg";
import deskpad from "../../assest/deskpad.jpg";
import m1 from "../../assest/m1.jpg";
import m2 from "../../assest/m2.jpg";
import m3 from "../../assest/m3.jpg";
import m4 from "../../assest/paper-work.jpg";

import "../devPort/testim.css";


// Personal portfolio page where developer can create and display there own personal taste and style
// Developer and Designer can showcase there work and skills here.
// They can also link there social media here.

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 0,
  },
};

export const Header = () => {
  return (
    <body>
      <div class="curved2">
        <div class="container-fluid">
          <div class="container">
            <div class="row">
              <div id="stage" class="container">
                <div class="x">
                  <img class="teamImg2" src={one} alt="" />
                </div>
                <div class="row">
                  <div class="col-md-8 mx-auto">
                    <div id="teamI">
                      <h6 id="teamName">Chelsea Jones</h6>
                      <p id="Occ">Software Developer</p>
                      {/* Social media Links */}
                      <div id="iconList2">
                        <a
                          id="fabIcon"
                          style={{ color: "black" }}
                          href="http://www.github.com"
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                          id="fabIcon"
                          style={{ color: " #1DA1F2" }}
                          href="http://www.twitter.com"
                        >
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a
                          id="fabIcon"
                          style={{ color: "#4267B2" }}
                          href="http://www.facebook.com"
                        >
                          <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a
                          id="fabIcon"
                          style={{ color: "#0072b1" }}
                          href="http://www.linkedin.com"
                        >
                          <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                      </div>
                      <div class="col-sm-8 mx-auto">
                        <p id="summ2">
                        Chelsea Jones, 22, <span style={{fontWeight:"Bold"}}>Brooklyn, NY..</span><br></br>
                    Graduated from UCLA with a Bachelor in Computer Science. Minor in Mathmatics
                    <br></br>Senior Developer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Developer Technologies  */}
                <div class="row">
                  <div class="col-md-8 mx-auto">
                    {/* <h1 id="hd">Technologies</h1> */}
                    <h1
                      id="headr"
                      style={{ fontSize: "30px", fontWeight: 400 }}
                    >
                      {" "}
                      My Services
                    </h1>

                    <div
                      class=" col-md-8 mx-auto"
                      style={{ textAlign: "center" }}
                    >
                      <FontAwesomeIcon
                        id="techIcon2"
                        icon={faReact}
                        style={{ color: "#61DBFB" }}
                      />
                      <FontAwesomeIcon
                        id="techIcon2"
                        icon={faHtml5}
                        style={{ color: "#E34C26" }}
                      />
                      <FontAwesomeIcon
                        id="techIcon2"
                        icon={faCss3Alt}
                        style={{ color: "#264de4" }}
                      />
                      <FontAwesomeIcon
                        id="techIcon2"
                        icon={faAngular}
                        style={{ color: "#dd1b16" }}
                      />
                    </div>
                  </div>
                </div>

                {/* MY WORK SECTION */}
                {/* Developer Recent Projects */}
                {/* Developer will be able to set there links to there projects here */}
                <div class="col-md-10 mx-auto ">
                  <h1
                    id="headr"
                    style={{
                      fontSize: "30px",
                      margin: "20px",
                      fontWeight: 400,
                    }}
                  >
                    My Work
                  </h1>

                
                  <div class="row">
                  <div class="col-md-12">
                    <a  href="http://www.github.com" target="_blank>">
                      <img id="z"
                        class="imgx"
                        style={{
                          height: "100px",
                          width: "100px",
                          borderRadius: "50%",
                        //   marginBottom: "100px",
                          marginLeft: "100px",
                        }}
                        src={deskpad}
                        alt=""
                      />
                    </a>

                    <a href="http://www.github.com" target="_blank>">
                      <img
                        class="imgx"
                        style={{
                          height: "200px",
                          width: "200px",
                          borderRadius: "60%",
                          marginLeft: "50px",
                          marginTop: "50px",
                        }}
                        src={m1}
                        alt=""
                      />
                    </a>

                    <a href="http://www.github.com" target="_blank>">
                      <img
                        class="imgx"
                        style={{
                          height: "150px",
                          width: "150px",
                          borderRadius: "60%",
                          marginLeft: "40px",
                        }}
                        src={m2}
                        alt=""
                      />
                    </a>

                    <a href="http://www.github.com" target="_blank>">
                      <img
                        class="imgx"
                        style={{
                          height: "70px",
                          width: "70px",
                          borderRadius: "60%",
                          marginLeft: "0px",
                          marginTop: "150px",
                        }}
                        src={m4}
                        alt=""
                      />
                    </a>
                    <a href="http://www.github.com" target="_blank>">
                      <img
                        class="imgx"
                        style={{
                          height: "40px",
                          width: "40px",
                          borderRadius: "60%",
                          marginRight: "40px",
                          marginTop: "50px",
                        }}
                        src={m3}
                        alt=""
                      />
                    </a>
                    <div
                      style={{
                        backgroundColor: "lightgrey",
                        height: "10px",
                        width: "10px",
                        borderRadius: "60%",
                        marginTop: "0px",
                        marginLeft: "240px",
                      }}
                    ></div>
                  </div>
                </div>
                </div>
                {/* Developer Skills section */}
                <div class="col-md-6 mx-auto">
                  <h1
                    id="headr"
                    style={{
                      fontSize: "30px",
                      margin: "20px",
                      fontWeight: 400,
                    }}
                  >
                    Skills
                  </h1>
                  <p>Java</p>

                  <div class="progress mx-auto">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <p>CSS</p>

                  <div class="progress mx-auto">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <p>HTML</p>

                  <div class="progress mx-auto">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p>React</p>

                  <div class="progress mx-auto">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <p>Angular</p>

                  <div class="progress mx-auto">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>

                {/* TESTIMONIAL SECTION */}
                {/* Area where developer put feedback from there clients */}
                <div
                  class="col-md-10 mx-auto "
                  style={{ marginBottom: "20px" }}
                >
                  <h1
                    id="headr"
                    style={{
                      fontSize: "30px",
                      margin: "20px",
                      fontWeight: 400,
                    }}
                  >
                    Testimonial
                  </h1>
                  <div class="row">
                    <div class="col-sm-12 col-md-4">
                      <figure class="snip1192">
                        <blockquote>
                          Chelsea: She's a hardworker. Very talented an a great
                          communicator. Very Professional.{" "}
                        </blockquote>
                        <div class="author">
                          <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                            alt="sq-sample1"
                          />
                          <h5>
                            Brittany Omish <span> CPA</span>
                          </h5>
                        </div>
                      </figure>
                    </div>
                    <div class="col-sm-12 col-md-4">
                      <figure class="snip1192 hover ">
                        <blockquote>
                          Chelsea work has exceed my expectations. She never let's me down. Her profesionalism and the way she do business will take her a long way..
                        </blockquote>
                        <div class="author">
                          <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample24.jpg"
                            alt="sq-sample24"
                          />
                          <h5>
                            Martha Stewart<span> HealthCare Professional</span>
                          </h5>
                        </div>
                      </figure>
                    </div>
                    <div class="col-sm-12 col-md-4">
                      <figure class="snip1192 ">
                        <blockquote>
                         All postive feedback.. Great turn-around time. Great product. Another happy customer :)
                        </blockquote>
                        <div class="author">
                          <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample29.jpg"
                            alt="sq-sample29"
                          />
                          <h5>
                            Eleanor Jones<span> Client</span>
                          </h5>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
                };