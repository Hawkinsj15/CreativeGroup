import React from "react";
import "bootstrap/js/src/collapse.js";



export const Navigation = () => {
  return (
 
    <nav class="navbar  fixed-top navbar-expand-lg navbar-dark p-md-1">
    <div class="container">
      <a class="navbar-brand" href="#">BSG</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="mx-auto"></div>
        {/* Navbar links  */}
        <ul class="navbar-nav active">
          <li class="nav-item ">
            <a class="nav-link" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/">Service & Pricing</a>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>

  
  );
};