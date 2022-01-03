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

function Settings({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_580_3455)">
        <path
          d="M10.5 1.52588e-05C4.97697 1.52588e-05 0.5 4.47699 0.5 10C0.5 15.523 4.97697 20 10.5 20C16.023 20 20.5 15.523 20.5 10C20.5 4.47767 16.023 0.00069762 10.5 1.52588e-05ZM15.0861 14.4224C14.9067 14.7172 14.5225 14.8093 14.2291 14.6298C11.8811 13.1948 8.92511 12.8707 5.44439 13.6657C5.10867 13.7428 4.77431 13.5326 4.69788 13.1969C4.62078 12.8612 4.83026 12.5268 5.16667 12.4504C8.97561 11.5804 12.2434 11.955 14.8794 13.5654C15.1728 13.7462 15.2663 14.129 15.0861 14.4224ZM16.3096 11.7005C16.0838 12.0676 15.6034 12.1822 15.2369 11.957C12.5498 10.305 8.45155 9.8267 5.27243 10.7916C4.86029 10.9164 4.42494 10.6837 4.29939 10.2723C4.1752 9.86013 4.40788 9.42547 4.81934 9.29991C8.45087 8.1979 12.9661 8.73151 16.0524 10.6285C16.4195 10.8543 16.5355 11.334 16.3096 11.7005ZM16.4147 8.86457C13.1912 6.95054 7.87427 6.77449 4.79683 7.70796C4.3028 7.85808 3.78011 7.579 3.63067 7.08497C3.48124 6.59094 3.75964 6.06825 4.25435 5.91813C7.78693 4.84614 13.6586 5.0529 17.3693 7.25556C17.8135 7.51963 17.9596 8.0935 17.6962 8.53703C17.4335 8.98193 16.8582 9.12864 16.4147 8.86457Z"
          fill="#2EBD59"
        />
      </g>
      <defs>
        <clipPath id="clip0_580_3455">
          <rect x="0.5" y="1.52588e-05" width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// Setting default values for the props of Settings
Settings.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Settings
Settings.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Settings;
