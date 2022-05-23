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

function Atlassian({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.42676 9.23898C6.33498 9.11916 6.19949 9.04058 6.04991 9.02043C5.90034 9.00028 5.74888 9.0402 5.62867 9.13146C5.55795 9.18723 5.50091 9.25842 5.46189 9.3396L0.561756 19.1426C0.492353 19.2815 0.480953 19.4423 0.530062 19.5897C0.579171 19.737 0.68477 19.8588 0.823647 19.9283C0.904824 19.9694 0.994569 19.9906 1.08554 19.9903H7.91265C8.022 19.9931 8.12979 19.964 8.22282 19.9064C8.31585 19.8489 8.39009 19.7655 8.43643 19.6664C9.90992 16.6229 9.01673 11.9957 6.42676 9.23898Z"
        fill="url(#paint0_linear_580_3991)"
      />
      <path
        d="M10.0284 0.318096C8.80686 2.19786 8.09495 4.36289 7.96253 6.60078C7.8301 8.83867 8.28172 11.0726 9.27306 13.0833L12.5646 19.6664C12.6133 19.7637 12.688 19.8455 12.7805 19.9027C12.873 19.9599 12.9796 19.9903 13.0884 19.9903H19.9141C19.9911 19.9905 20.0674 19.9755 20.1385 19.9461C20.2097 19.9167 20.2743 19.8736 20.3288 19.8191C20.3832 19.7647 20.4264 19.7001 20.4557 19.6289C20.4851 19.5577 20.5001 19.4815 20.5 19.4045C20.5 19.3137 20.4793 19.2241 20.4393 19.1426L11.025 0.31534C10.9803 0.220998 10.9097 0.141281 10.8215 0.0854577C10.7333 0.0296347 10.6311 0 10.5267 0C10.4223 0 10.3201 0.0296347 10.2319 0.0854577C10.1436 0.141281 10.0731 0.220998 10.0284 0.31534V0.318096Z"
        fill="#2684FF"
      />
      <defs>
        <linearGradient
          id="paint0_linear_580_3991"
          x1="9.12424"
          y1="10.7373"
          x2="3.94981"
          y2="19.6995"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0052CC" />
          <stop offset="0.92" stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// Setting default values for the props of Atlassian
Atlassian.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Atlassian
Atlassian.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Atlassian;
