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

function Jira({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_580_3434)">
        <path
          d="M20.2596 10.4198L11.3968 1.4907L10.538 0.625488L3.86637 7.34711L0.815567 10.4198C0.663181 10.5741 0.577637 10.783 0.577637 11.0006C0.577637 11.2183 0.663181 11.4272 0.815567 11.5815L6.91074 17.7223L10.538 21.3758L17.2088 14.6542L17.3127 14.5504L20.2596 11.5861C20.336 11.5097 20.3966 11.4189 20.438 11.3188C20.4793 11.2187 20.5006 11.1114 20.5006 11.003C20.5006 10.8946 20.4793 10.7872 20.438 10.6871C20.3966 10.5871 20.336 10.4962 20.2596 10.4198ZM10.538 14.0687L7.49276 11.0006L10.538 7.93257L13.5824 11.0006L10.538 14.0687Z"
          fill="#2684FF"
        />
        <path
          d="M10.5375 7.93194C9.57978 6.96725 9.03988 5.65991 9.03575 4.29549C9.03161 2.93107 9.56358 1.62043 10.5155 0.649872L3.85205 7.36038L7.47844 11.0139L10.5375 7.93194Z"
          fill="url(#paint0_linear_580_3434)"
        />
        <path
          d="M13.5902 10.9917L10.5376 14.0681C11.499 15.0369 12.039 16.3508 12.039 17.7207C12.039 19.0906 11.499 20.4045 10.5376 21.3733L17.2194 14.6452L13.5902 10.9917Z"
          fill="url(#paint1_linear_580_3434)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_580_3434"
          x1="9.99228"
          y1="4.82773"
          x2="5.70802"
          y2="9.07924"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stop-color="#0052CC" />
          <stop offset="1" stop-color="#2684FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_580_3434"
          x1="776.604"
          y1="901.425"
          x2="1212.74"
          y2="1182.07"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stop-color="#0052CC" />
          <stop offset="1" stop-color="#2684FF" />
        </linearGradient>
        <clipPath id="clip0_580_3434">
          <rect x="0.5" y="0.500031" width="20" height="21" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// Setting default values for the props of Jira
Jira.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Jira
Jira.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Jira;
