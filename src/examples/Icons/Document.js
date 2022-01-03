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

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";
function Document({ color, size }) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 12"
    >
      <path
        d="M18.809 10.344h-6.153a2.11 2.11 0 01-2.11-2.11V2.083a.176.176 0 00-.175-.176H6.328A2.812 2.812 0 003.516 4.72v14.063a2.812 2.812 0 002.812 2.812h9.844a2.812 2.812 0 002.812-2.813V10.52a.176.176 0 00-.175-.176z"
        fill={colors[color] ? colors[color].main : colors.dark.main}
      />
      <path
        d="M18.423 8.789l-6.32-6.32a.088.088 0 00-.15.062v5.705a.703.703 0 00.703.703h5.705a.088.088 0 00.062-.15z"
        fill={colors[color] ? colors[color].main : colors.dark.main}
      />
    </svg>
  );
}

// Setting default values for the props of Document
Document.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Document
Document.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Document;
