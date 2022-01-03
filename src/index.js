/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Vision UI Dashboard React Context Provider
import { VisionUIControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <VisionUIControllerProvider>
      <App />
    </VisionUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
