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

function Invision({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_580_3885)">
        <path
          d="M18.687 -0.000793457H2.31305C1.31172 -0.000793457 0.5 0.810925 0.5 1.81225V18.1862C0.5 19.1875 1.31172 19.9992 2.31305 19.9992H18.687C19.6883 19.9992 20.5 19.1875 20.5 18.1862V1.81225C20.5 0.810925 19.6883 -0.000793457 18.687 -0.000793457Z"
          fill="#DC395F"
        />
        <path
          d="M7.18379 6.29259C7.84863 6.29259 8.40559 5.7715 8.40559 5.08853C8.40559 4.40603 7.84863 3.88501 7.18379 3.88501C6.51895 3.88501 5.96215 4.40603 5.96215 5.08853C5.96215 5.77142 6.51895 6.29259 7.18379 6.29259ZM4.65051 12.7395C4.57871 13.0449 4.5427 13.3748 4.5427 13.6439C4.5427 14.7041 5.11762 15.4079 6.33941 15.4079C7.3527 15.4079 8.17418 14.8062 8.76566 13.8346L8.40449 15.284H10.4166L11.5666 10.6716C11.8541 9.50377 12.4111 8.8976 13.2556 8.8976C13.9204 8.8976 14.3336 9.31103 14.3336 9.99354C14.3336 10.1913 14.3156 10.4067 14.2437 10.6403L13.6507 12.7604C13.5609 13.0659 13.5251 13.3715 13.5251 13.6588C13.5251 14.6653 14.1179 15.4014 15.3576 15.4014C16.4177 15.4014 17.2621 14.719 17.7293 13.0839L16.9388 12.7788C16.5435 13.8742 16.2021 14.0722 15.9325 14.0722C15.663 14.0722 15.5193 13.8927 15.5193 13.5335C15.5193 13.3718 15.5554 13.1924 15.6091 12.9763L16.1842 10.9108C16.3279 10.4258 16.3818 9.99572 16.3818 9.60057C16.3818 8.05541 15.4475 7.249 14.3156 7.249C13.2556 7.249 12.1775 8.20517 11.6386 9.2115L12.0337 7.40525H8.96152L8.53027 8.99619H9.9677L9.08254 12.5399C8.38746 14.0851 7.11066 14.1102 6.95043 14.0743C6.68731 14.0149 6.51902 13.915 6.51902 13.5731C6.51902 13.3759 6.55496 13.0925 6.6448 12.7509L7.99246 7.40525H4.57871L4.14746 8.99619H5.56676L4.65059 12.7395"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_580_3885">
          <rect x="0.5" y="-0.000793457" width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// Setting default values for the props of Invision
Invision.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Invision
Invision.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Invision;
