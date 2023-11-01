import { Button } from "@mui/material";
import PropTypes from "prop-types";

const CustomButton = ({ type, children, wdth }) => {
  return (
    <Button
      type={type}
      style={{
        backgroundColor: "#141718",
        color: "#fff",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        fontFamily: "Inter",
        textTransform: "none",
        width: `${wdth}`,
      }}
    >
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomButton;
