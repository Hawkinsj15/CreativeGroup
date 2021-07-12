import React from "react";
import logo from "../../assest/logo.jpg";
import logo2 from "../../assest/backk2.jpg";
import logo3 from "../../assest/clem.jpg";
import one from "../devPort/girl.jpg";
import { useEffect } from "react";

import "mdbreact/dist/css/mdb.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faCss3Alt,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import Typist from "react-typist";
import { HashLink } from "react-router-hash-link";

// import "react-responsive-carousel/lib/styles/carousel.min.css";
import AOS from "aos";
import "aos/dist/aos.css";






// Stack.js has the body for the HomePage.
export const Stack = () => {
  //  Javascript for AOS animation on team cards
  useEffect(() => {
    AOS.init({
      // duration : 5000
    });
  }, []);

  return (
    <div id="as" onUpdate={() => window.scrollTo(0, 0)}>
      <div class="container">
        <div class="row">
          {/* Our service section */}
          <div class="col-md-8 mx-auto">
            <h1 id="headr"> Our Services</h1>

            <p id="p" style={{ textAlign: "center", margin: "0 1% 0 1%" }}>
              As a creative group, we offer so much more than we can write. We
              offer many services from Web Development, Backend Development and
              It-Infrastructure. You name it, we can do it. We provide our
              clients with the best in class developers, that can not only
              provide you with the solution you need but with innovative ideas
              that can possibly be a game changer for your organization.
            </p>
          </div>
        </div>
        {/* What we specialty in section */}
        {/* Has 3 sections Authentication, Implementation, Strategize */}
        <div class="row">
          <div class="col-md-4 iconc">
            <FontAwesomeIcon
              style={{
                width: "50px",
                height: "50px",
                marginTop: "40px",
                color: "brown",
              }}
              icon={faFingerprint}
            />

            <br />
            {/* Authetication section 1 */}
            <div class="col ">
              <h5 style={{ marginTop: "30px" }}>Authentication</h5>
              <p id="pl">
                Having security issues. No worries , we have you covered. We
                primarily focus on ways to make your applications more secure.
                With our around the clock service we will always have your back.

              </p>
            </div>
          </div>
          <div class="col-md-4 iconc">
            <FontAwesomeIcon
              style={{
                color: "black",
                width: "60px",
                height: "50px",
                marginTop: "40px",
                color: "#61DBFB",
              }}
              icon={faCogs}
            />
            <br />
            {/* Implementation Section 2 */}
            <div class="col ">
              <h5 style={{ marginTop: "30px" }}>Implementation</h5>
              <p id="pl">
                With our expertise, Implementing your idea is a problem in the
                past. Having a few of the best developer and designer in the
                world we can bring your idea to reality.
              </p>
            </div>
          </div>
          <div class="col-md-4 iconc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-share"
              viewBox="0 0 16 16"
              style={{ marginTop: "40px" }}
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
            </svg>
            <br />
            <div class="col ">
              {/* Strategize section 3 */}
              <h5 style={{ marginTop: "30px" }}>Strategize</h5>
              <p id="pl">
                We strategize on how to tackle a problem before you can think.
                We work close with clients to exactly understand their needs. We
                deliver the most efficient and innovative solution.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies that we use section */}
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-6 mx-auto" style={{ textAlign: "center" }}>
              <FontAwesomeIcon
                id="techIcon"
                icon={faNodeJs}
                style={{ color: "#68A063" }}
              />
              <FontAwesomeIcon
                id="techIcon"
                icon={faReact}
                style={{ color: "#61DBFB" }}
              />
              <FontAwesomeIcon
                id="techIcon"
                icon={faHtml5}
                style={{ color: "#E34C26" }}
              />
              <FontAwesomeIcon
                id="techIcon"
                icon={faCss3Alt}
                style={{ color: "#264de4" }}
              />
              <FontAwesomeIcon
                id="techIcon"
                icon={faAngular}
                style={{ color: "#dd1b16" }}
              />
            </div>
          </div>
          {/* Our Company mission section */}
          <div class="row" style={{ marginTop: "40px" }}>
            <div class="col-md-8 mx-auto">
              <h1 id="headr"> Our Mission</h1>

              <p id="p" style={{ textAlign: "center" }}>
                Our mission is to always strive to understand exactly our
                clients needs and wants. We constantly seeks for creative ideas
                and technologies that we can possibly offer our clients . We
                also seek to discover and provide innovative designs and
                products. Our main focus is to exceed client expectation.
              </p>
            </div>
          </div>

          {/* Our team Section, Here's where the designers and developer are displayed */}
          {/* Users are able to click on designer or developer image to view there personal profile */}
          {/* Socialmedia links are also clickable and also will direct you to corresponding sites */}
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 id="h1l"> Our Team</h1>
              </div>
            </div>

            <div class="row" style={{ marginTop: "20px" }}>
              <div class="col-md-4 divTeam">
                <div
                  data-aos="fade-in"
                  data-aos-easing="linear"
                  data-aos-duration="900"
                >
                  <HashLink to="/dev#top">
                    {/* remove to put nomal*/}
                    <div class="team2">
                      <img
                        class="teamImg"
                        style={{
                          alignItems: "center",
                          boxShadow: "0 18px 8px -19px 00000",
                        }}
                        src={one}
                        alt=""
                      />
                    </div>
                  </HashLink>
                  {/* Team member 1 */}
                  <div id="teamI">
                    <h6 id="teamName">Chelsea Jones</h6>
                    <p id="Occ">Software Developer</p>
                    <p id="summ">
                    Chelsea Jones, 22, <span style={{fontWeight:"Bold"}}>Brooklyn, NY..</span><br></br>
                    Graduated from UCLA with a Bachelor in Computer Science. Minor in Mathmatics<br></br>
                    Senior Developer.

                    </p>

                    {/* Team social media links */}
                    <div id="iconList">
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
                  </div>
                </div>
              </div>
              {/* Team member 2 */}
              <div class="col-md-4 divTeam">
                <div
                  data-aos="fade-in"
                  data-aos-easing="linear"
                  data-aos-duration="800"
                >
                  <img class="teamImg" src={logo2} alt="" />
                  <div id="teamI">
                    <h6 id="teamName">Chris Embid</h6>
                    <p id="Occ">Designer</p>
                    <p id="summ">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some links for people to be able to follow them
                      outside the site.
                    </p>
                    {/* Team social media links */}
                    <div id="iconList">
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
                  </div>
                </div>
              </div>
              {/* Team member 3 */}
              <div class="col-md-4 divTeam">
                <div
                  data-aos="fade-in"
                  data-aos-easing="linear"
                  data-aos-duration="1200"
                >
                  <img class="teamImg" src={logo3} alt="" />
                  <div id="teamI">
                    <h6 id="teamName">Gigi Hadid</h6>
                    <p id="Occ">Model</p>
                    <p id="summ">
                      You can write here details about one of your team members.
                      You can give more details about what they do. Feel free to
                      add some links for people to be able to follow them
                      outside the site.
                    </p>

                    {/* Team social media links */}
                    <div id="iconList">
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
                  </div>
                </div>
              </div>
            </div>

            {/* Contact section */}
            {/* User can fill out corresponding form that inwhich will be submitted to backend */}
            {/* Temporarily the backend is formspree.io */}
            <div id="Contact" class="container">
              <div class="row">
                <div class="col-md-8 mx-auto">
                  <h1 id="h1l" style={{ marginTop: "30" }}>
                    <Typist loop={Infinity}>
                      <span> Contacted </span>
                      <Typist.Backspace count={3} delay={200} />
                      <span style={{ color: "black" }}> Us </span>
                    </Typist>
                  </h1>
                  <p
                    id="p"
                    style={{
                      textAlign: "center",
                      margin: "20px 0px 50px 0px",
                    }}
                  >
                    As your thoughts count. We’d love to hear from you! Please
                    provide as much information as you can below, and we’ll get
                    back to you soon.
                  </p>
                </div>
              </div>
            </div>
            <div id="formArea" class="col-md-6 mx-auto ">
              <form action="https://formspree.io/xqkywzyz" method="POST">
                <div class="form-outline mb-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control"
                  />
                  <label class="form-label" for="name">
                    Name
                  </label>
                </div>

                <div class="form-outline mb-2">
                  <input
                    type="email"
                    name="email"
                    name="email"
                    class="form-control"
                  />
                  <label class="form-label" for="email">
                    Email address
                  </label>
                </div>

                <div class="form-outline mb-2">
                  <textarea
                    class="form-control"
                    id="description"
                    name="description"
                    rows="4"
                  ></textarea>
                  <label class="form-label" for="description">
                    Message
                  </label>
                </div>

                <button type="submit" class="btn btn-primary btn-md mb-4 ">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};