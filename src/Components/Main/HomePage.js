import React from "react";
import logo from "../../assest/logo.jpg";
import logo2 from "../../assest/backk2.jpg";
import logo3 from "../../assest/wed.jpg";
import okl from "../../assest/okl.jpg";

export const HomePage = () => {
  return (
    <body>
        {/* Background for HomePage */}
      <div class="curved">
        <div class="container">
          <div class="row">
            <div id="cen" class="col-md-12">
              <img id="sd" style={{ opacity: "0" }} src={logo}></img>
            </div>
          </div>
         {/* Title for HomePage */}
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h3 id="temp"> BLACK SHEEP CREATIVE GROUP</h3>

                <h4 id="temp2">
                  {" "}
                  Software Development | Graphic Design | IT Infastructure Setup{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <svg
          class="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 318"
        >
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </body>
  );
};
