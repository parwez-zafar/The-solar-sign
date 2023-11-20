import { Box, Grid, Typography } from "@mui/material";
import CustomButton from "../../Components/CustomButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const styles = {
  container: {
    position: "relative",
    width: "fit-content",
    marginBottom: "0.5rem",
  },
  btnBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  descriptionBox: {
    width: "55%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  newText: {
    position: "absolute",
    top: "9%",
    left: "5%",
    fontFamily: "inter",
    fontWeight: "700",
    fontSize: "16px",
    color: "#121212",
    background: "#FFFFFF",
    padding: ".1rem",
    borderRadius: "4px",
    width: "25%",
    textAlign: "center",
  },
  discountText: {
    position: "absolute",
    top: "20%",
    left: "5%",
    fontFamily: "inter",
    fontWeight: "700",
    fontSize: "16px",
    color: "#FEFEFE",
    background: "#38CB89",
    padding: ".1rem",
    borderRadius: "4px",
    width: "25%",
    textAlign: "center",
  },
  nameText: {
    fontFamily: "inter",
    fontWeight: "600",
    fontSize: "16px",
    color: "#141718",
  },
  linkStyle: {
    position: "relative",
    fontFamily: "Inter",
    color: "#6C7275",
    fontSize: "1rem",
    marginBottom: "1rem",
    textDecoration: "none",
  },
};

const ShopPageProduct = ({ src, alt, name, price, id }) => {
  const productsDetailsData = useSelector((state) => state.productDetails);

  return (
    <Grid item mb={3}>
      <Typography variant="body2" mb={1}>
        <Link style={styles.linkStyle} to="/">
          Home
        </Link>{" "}
        &nbsp;{`>`}&nbsp;
        <Link
          style={styles.linkStyle}
          to={`/product/category/${productsDetailsData.category}`}
        >
          {productsDetailsData.category}
        </Link>{" "}
      </Typography>
      <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
        <Grid item sx={styles.container}>
          <img src={src} alt={alt} style={{ width: "100%", height: "100%" }} />
        </Grid>
        <Grid>
          <Typography mb={1} sx={styles.nameText}>
            {name}
          </Typography>
          <Box sx={styles.descriptionBox}>
            <Typography
              sx={{ ...styles.nametext, fontSize: "14px", color: "#121212" }}
            >
              {" "}
              ${price}
            </Typography>
          </Box>
        </Grid>
      </Link>
      <Box sx={styles.btnBox}>
        <CustomButton type="button" wdth="80%">
          Add to cart
        </CustomButton>
      </Box>
    </Grid>
  );
};

ShopPageProduct.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ShopPageProduct;
