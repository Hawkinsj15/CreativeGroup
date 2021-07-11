import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// Footer
export const Footer = () => {
  return (
    <div>
      <footer class="page-footer font-small black pt-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left mt-3 pb-3">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Black Sheep</h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
              <p>BootStrap</p>
              <p>CSS/Html</p>
              <p>React</p>
              <p>Angular</p>
            </div>

            <hr class="w-100 clearfix d-md-none" />
            {/* Nav Links */}
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
              <p>
                <a href="#/about">About</a>
              </p>
              <p>
                <a href="">Service</a>
              </p>
              <p>
                <a href="">Contact</a>
              </p>
              <p>
                <a href="http://www.github.com">Github</a>
              </p>
            </div>

            <hr class="w-100 clearfix d-md-none" />
            {/* Contact Info Section */}
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>Raleigh, NC 27513, US</p>
              <p>info@gmail.com</p>
              <p>+ 01 234 567 88</p>
              <p>+ 01 234 567 89</p>
            </div>
          </div>

          <div class="row d-flex align-items-center">
            <div class="col-md-7 col-lg-8">
              <p class="text-center text-md-left">
                © 2021 Copyright:
                <a href="">
                  <strong> BlackSheep.com</strong>
                </a>
              </p>
            </div>
            {/* Social Media Links */}
            <div class="col-md-5 col-lg-4 ml-lg-0">
              <div class="text-center text-md-right">
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <a
                      class="btn-floating btn-sm  mx-1"
                      href="http://www.facebook.com"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class=" btn-sm  mx-1" href="http://www.Github.com">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn-sm  mx-1" href="http://www.twitter.com">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class=" btn-sm  mx-1" href="http://www.LinkedIn.com">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};