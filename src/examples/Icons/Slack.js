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

function Slack({ size }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_580_3474)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.83241 0.500046C6.72684 0.500882 5.83208 1.41868 5.8329 2.54963C5.83208 3.68058 6.72766 4.59837 7.83323 4.59921H9.83356V2.55046C9.83437 1.41952 8.9388 0.501718 7.83241 0.500046C7.83323 0.500046 7.83323 0.500046 7.83241 0.500046V0.500046ZM7.83241 5.96671H2.49984C1.39427 5.96755 0.498697 6.88535 0.499514 8.01629C0.49788 9.14724 1.39345 10.065 2.49902 10.0667H7.83241C8.93798 10.0659 9.83355 9.14808 9.83274 8.01713C9.83355 6.88535 8.93798 5.96755 7.83241 5.96671Z"
          fill="#36C5F0"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.4998 8.01629C20.5006 6.88535 19.605 5.96755 18.4994 5.96671C17.3938 5.96755 16.4983 6.88535 16.4991 8.01629V10.0667H18.4994C19.605 10.0659 20.5006 9.14808 20.4998 8.01629ZM15.1664 8.01629V2.54963C15.1672 1.41952 14.2724 0.501718 13.1668 0.500046C12.0613 0.500882 11.1657 1.41868 11.1665 2.54963V8.01629C11.1649 9.14724 12.0604 10.065 13.166 10.0667C14.2716 10.0659 15.1672 9.14808 15.1664 8.01629Z"
          fill="#2EB67D"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.1659 21C14.2714 20.9992 15.167 20.0814 15.1662 18.9505C15.167 17.8195 14.2714 16.9017 13.1659 16.9009H11.1655V18.9505C11.1647 20.0806 12.0603 20.9984 13.1659 21ZM13.1659 15.5325H18.4992C19.6048 15.5317 20.5004 14.6139 20.4996 13.483C20.5012 12.352 19.6056 11.4342 18.5001 11.4325H13.1667C12.0611 11.4334 11.1655 12.3512 11.1663 13.4821C11.1655 14.6139 12.0603 15.5317 13.1659 15.5325Z"
          fill="#ECB22E"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.499512 13.4829C0.498695 14.6139 1.39427 15.5317 2.49984 15.5325C3.60541 15.5317 4.50098 14.6139 4.50017 13.4829V11.4333H2.49984C1.39427 11.4342 0.498695 12.352 0.499512 13.4829ZM5.8329 13.4829V18.9496C5.83127 20.0805 6.72684 20.9983 7.83241 21C8.93798 20.9992 9.83355 20.0814 9.83274 18.9504V13.4846C9.83437 12.3536 8.9388 11.4358 7.83323 11.4342C6.72684 11.4342 5.83208 12.352 5.8329 13.4829C5.8329 13.4829 5.8329 13.4838 5.8329 13.4829Z"
          fill="#E01E5A"
        />
      </g>
      <defs>
        <clipPath id="clip0_580_3474">
          <rect x="0.5" y="0.500046" width="20" height="20.5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// Setting default values for the props of Slack
Slack.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the Slack
Slack.propTypes = {
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

export default Slack;
