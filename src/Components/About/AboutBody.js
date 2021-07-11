import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faAngular } from "@fortawesome/free-brands-svg-icons";

import { faNodeJs } from "@fortawesome/free-brands-svg-icons";

import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

import x from "../../assest/ccv.jpg";
import wed from "../../assest/wed.jpg";
import scott from "../../assest/scott.jpg";
import one from "../../assest/girl.jpg";

import "../About/abStyle.css";
export const AboutBody = () => {
  return (
    <body>
      <div class="container">
        <div class="col-md-8 mx-auto">
          <div class="row" style={{ marginTop: "0px", marginLeft: "0px" }}>
            <div class="testimonial-section">
              <div class="inner-width">
                <h1
                  id="titleFont"
                  style={{ textAlign: "center", marginRight: "20px" }}
                >
                  Our Clients
                </h1>
                <div class="testimonial-pics">
                  <img src={scott} alt="test-1" />
                  <img src={wed} alt="test-2" />
                  <img src={one} alt="test-3" />
                </div>

                <div>
                  <p
                    id="p"
                    style={{ textAlign: "center", margin: "0 1% 0 1%" }}
                  >
                    This is the paragraph where you can write more details about
                    your product. Keep you user engaged by providing meaningful
                    information. Remember that by this time, the user is
                    curious, otherwise he wouldn't scroll to get here. Add a
                    button if you want the user to see more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 mx-auto" style={{ marginTop: "0px" }}>
            <h1 id="titleFont"> Our Mission</h1>

            <p id="p" style={{ textAlign: "center", margin: "0 1% 0 1%" }}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 mx-auto" style={{ marginTop: "100px" }}>
            <h1 id="titleFont"> Our Values</h1>

            <p id="p" style={{ textAlign: "center", margin: "0 1% 0 1%" }}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 mx-auto" style={{ marginTop: "100px" }}>
            <h1 id="titleFont"> Our Services</h1>

            <p id="p" style={{ textAlign: "center", margin: "0 1% 0 1%" }}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="size">
            <div class="col-md-10 mx-auto" style={{ textAlign: "center" }}>
              <FontAwesomeIcon
                id="techIconAbout"
                icon={faNodeJs}
                style={{ color: "#68A063" }}
              />
              <FontAwesomeIcon
                id="techIconAbout"
                icon={faReact}
                style={{ color: "#61DBFB" }}
              />
              <FontAwesomeIcon
                id="techIconAbout"
                icon={faHtml5}
                style={{ color: "#E34C26" }}
              />
              <FontAwesomeIcon
                id="techIconAbout"
                icon={faCss3Alt}
                style={{ color: "#264de4" }}
              />
              <FontAwesomeIcon
                id="techIconAbout"
                icon={faAngular}
                style={{ color: "#dd1b16" }}
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
