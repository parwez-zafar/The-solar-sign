import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

const ProductCard = ({
  src,
  alt,
  description1,
  description2,
  price,
  ratingStar,
}) => {
  const styles = {
    container: {
      position: "relative",
      width: "fit-content",
    },
    img: {
      width: "100%",
      height: "auto",
    },
    btn: {
      position: "absolute",
      top: "92%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#141718",
      color: "white",
      fontSize: "12px",
      border: "none",
      width: "76%",
      height: "10%",
      cursor: "pointer",
    },
    newText: {
      position: "absolute",
      top: "3%",
      left: "5%",
      backgroundColor: "white",
      fontSize: "90%",
      fontWeight: "bold",
      width: "20%",
      height: "6%",
      fontFamily: "Poppins",
      borderRadius: "2px",
      display: "flex",
      justifyContent: "center",
      alignItem: "center",
    },
    favorite: {
      position: "absolute",
      top: "3%",
      right: "5%",
      width: "10%",
      height: "5%",
      borderRadius: "50%",
      backgroundColor: "white",
      padding: "2%",
    },
    ratingBox: {
      marginBottom: "8px",
      fontWeight: "bold",
      marginTop: "3px",
    },
  };
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "black",
    },
  });
  return (
    <Stack mb={5} width={265}>
      <Stack style={styles.container}>
        <img src={src} alt={alt} style={styles.img} />
        <Typography style={styles.newText}>NEW</Typography>
        <FavoriteBorderIcon style={styles.favorite} />
        <Button style={styles.btn}>Add to Cart</Button>
      </Stack>
      <Stack spacing={1}>
        <Stack style={styles.ratingBox}>
          <StyledRating
            name="customized-color"
            readOnly
            defaultValue={ratingStar}
            precision={0.5}
          />
        </Stack>
        <h3
          style={{
            fontFamily: "Inter",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "1.625rem",
            width: "80%",
          }}
        >
          {description1}
          <br />
          {description2}
        </h3>
        <p
          style={{
            fontFamily: "Inter",
            fontSize: "0.8rem",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "1.3rem",
          }}
        >
          {price}
        </p>
      </Stack>
    </Stack>
  );
};

ProductCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description1: PropTypes.node.isRequired,
  description2: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  ratingStar: PropTypes.node.isRequired,
};

export default ProductCard;
