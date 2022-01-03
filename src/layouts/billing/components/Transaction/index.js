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

// @mui material components
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

function Transaction({ color, icon, name, description, value }) {
  return (
    <VuiBox key={name} component="li" py={1} pr={2} mb={1}>
      <VuiBox display="flex" justifyContent="space-between" alignItems="center">
        <VuiBox display="flex" alignItems="center">
          <VuiBox mr={2}>
            <VuiButton
              variant="outlined"
              color={color}
              sx={{ fontWeight: "bold", width: "35px", height: "35px" }}
              size="small"
              iconOnly
              circular
            >
              <Icon sx={{ fontWeight: "bold" }}>{icon}</Icon>
            </VuiButton>
          </VuiBox>
          <VuiBox display="flex" flexDirection="column">
            <VuiTypography variant="button" color="white" fontWeight="medium" gutterBottom>
              {name}
            </VuiTypography>
            <VuiTypography variant="caption" color="text">
              {description}
            </VuiTypography>
          </VuiBox>
        </VuiBox>
        <VuiTypography
          variant="button"
          color={color}
          fontWeight="medium"
          sx={({ breakpoints }) => ({
            [breakpoints.down("lg")]: {
              minWidth: "75px",
              ml: "12px",
            },
          })}
        >
          {value}
        </VuiTypography>
      </VuiBox>
    </VuiBox>
  );
}

// Typechecking props of the Transaction
Transaction.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]).isRequired,
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Transaction;
