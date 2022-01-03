/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

function Mastercard({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6.63158" cy="7.49999" r="6.63158" fill="#EB001B" />
      <circle cx="14.3685" cy="7.49999" r="6.63158" fill="#F79E1B" />
    </svg>
  );
}

// Setting default values for the props of Mastercard
Mastercard.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Mastercard
Mastercard.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Mastercard;
