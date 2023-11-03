import Button from "@mui/material/Button";
import pasteImage from "../../assets/images/Paste image.png";
import { Box } from "@mui/material";

const ProductCard = () => {
  const styles = {
    container: {
      //   position: "relative",
      //   width: "fit-content",
    },
    img: {
      width: "100%",
      height: "auto",
    },
    btn: {
      position: "absolute",
      top: "40%",
      left: "45%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#141718",
      color: "white",
      fontSize: "8px",
      border: "none",
      cursor: "pointer",
    },
    ratingBox: {
      marginBottom: "8px",
    },
  };

  return (
    <Box sx={{ mb: 5 }}>
      <Box style={styles.container}>
        <img src={pasteImage} alt="pasteImage" style={styles.img} />
        <Button style={styles.btn}>Add to Cart</Button>
      </Box>
      <Box style={styles.ratingBox}>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>☆</span>
      </Box>
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
        Skullcandy - Crusher anc 2 <br />
        wireless headphones
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
        $299.99
      </p>
    </Box>
  );
};

export default ProductCard;
