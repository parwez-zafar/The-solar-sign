import { Button, ButtonGroup, Divider, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import CustomButton from "../CustomButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import src1 from "../../assets/images/Tray Table/image1.png";
// import src2 from "../../assets/images/Tray Table/image2.png";
// import src3 from "../../assets/images/Tray Table/image3.png";
// import src4 from "../../assets/images/Tray Table/image4.png";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProductDetails } from "../../store/Actions/productsActions";
import { useParams } from "react-router-dom";
const styles = {
  img: {
    width: "100%",
    height: "auto",
  },
  anotherImg: {
    width: "32%",
  },
  linkStyle: {
    position: "relative",
    fontFamily: "Inter",
    color: "#6C7275",
    fontSize: "1rem",
    marginBottom: "1rem",
    textDecoration: "none",
  },
  forwardArrow: {
    backgroundColor: "white",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "5%",
  },
  backwordArrow: {
    backgroundColor: "white",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    right: "6%",
  },
  newText: {
    position: "absolute",
    top: "7%",
    left: "8%",
    backgroundColor: "white",
    fontSize: "90%",
    fontWeight: "bold",
    width: "10%",
    height: "4%",
    fontFamily: "Poppins",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    color: "black",
  },
  discountText: {
    position: "absolute",
    top: "12%",
    left: "8%",
    backgroundColor: "green",
    color: "white",
    fontSize: "90%",
    fontWeight: "bold",
    width: "11%",
    height: "4%",
    fontFamily: "Poppins",
    borderRadius: "2px",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },
  details: {
    fontFamily: "inter",
    fontWeight: "400",
    fontSize: "16px",
    color: "#6C7275",
  },
};

export default function ProductDetails() {
  const [count, setCount] = useState(1);
  // const [imgUrl, setImgUrl] = useState(0);
  // const imgarr = [src1, src2, src3, src4];

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };
  const dispatch = useDispatch();
  const productsDetailsData = useSelector((state) => state.productDetails);
  // console.log("product Details Data", productsDetailsData);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getSingleProductDetails(id));
  }, [dispatch, id]);


  const addToCartHandler = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = existingCart.findIndex((item) => item.product._id === productsDetailsData._id);

    if (productIndex !== -1) {
      existingCart[productIndex].quantity = count;
    } else {
      existingCart.push({
        product: productsDetailsData,
        quantity: count,
        subtotal: count * productsDetailsData.price,
      });
    }

    let allSubTotal = JSON.parse(localStorage.getItem('subtotal')) || 0;
    allSubTotal += count * productsDetailsData.price
    localStorage.setItem('subtotal', allSubTotal)

    localStorage.setItem('cart', JSON.stringify(existingCart));



    alert('added to cart')
  }


  return (
    <Container>
      <Box sx={{ my: 6 }}>
        {" "}
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
          &nbsp;{`>`}&nbsp;
          <Link style={styles.linkStyle} to="/product-details">
            {productsDetailsData.name}
          </Link>{" "}
        </Typography>
        <Box>
          <Grid container spacing={5} style={{}}>
            <Grid item sm={12} xs={12} md={6} xl={6} style={{}}>
              <Box style={{ position: "relative" }}>
                {/* <ArrowBackIcon
                  fontSize="large"
                  style={styles.forwardArrow}
                  onClick={() => {
                    imgUrl == 0 ? setImgUrl(3) : setImgUrl(imgUrl - 1);
                  }}
                /> */}

                {productsDetailsData.image &&
                  <img
                    src={productsDetailsData.image[0].url}
                    alt={"alt"}
                    style={styles.img}
                  />

                }
                {/* <ArrowForwardIcon
                  fontSize="large"
                  style={styles.backwordArrow}
                  onClick={() => {
                    imgUrl == 3 ? setImgUrl(0) : setImgUrl(imgUrl + 1);
                  }}
                /> */}
              </Box>

              {/* <Box
                display={{ xs: "none", sm: "flex" }}
                alignItems={"center"}
                justifyContent={"space-between"}
                mb={5}
              >
                <img
                  src={src2}
                  alt={"alt"}
                  style={styles.anotherImg}
                  onClick={() => setImgUrl(1)}
                />
                <img
                  src={src3}
                  alt={"alt"}
                  style={styles.anotherImg}
                  onClick={() => setImgUrl(2)}
                />
                <img
                  src={src4}
                  alt={"alt"}
                  style={styles.anotherImg}
                  onClick={() => setImgUrl(3)}
                />
              </Box> */}
            </Grid>

            <Grid item sm={12} xs={12} md={6} xl={6}>
              <Box marginBottom={3}>
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  {productsDetailsData.name}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Inter",
                    color: "#6C7275",
                    fontSize: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {productsDetailsData.description}
                </Typography>
                <Box display={"flex"} alignItems={"center"}>
                  <Typography
                    variant="h5"
                    style={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      marginRight: "1rem",
                    }}
                  >
                    ${productsDetailsData.price}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <ButtonGroup variant="outlined" sx={{ background: "#F5F5F5" }}>
                  <Button
                    onClick={decrement}
                    sx={{
                      width: "100%",
                      border: "none",
                      color: "#141718",
                      "&:hover": {
                        border: "1px solid #141718",
                      },
                      fontFamily: "Inter",
                    }}
                  >
                    -
                  </Button>
                  <Box sx={{ p: 2, border: "none", fontFamily: "Inter" }}>
                    {count}
                  </Box>
                  <Button
                    onClick={increment}
                    sx={{
                      border: "none",
                      color: "#141718",
                      "&:hover": {
                        border: "1px solid #141718",
                      },
                      fontFamily: "Inter",
                    }}
                  >
                    +
                  </Button>
                </ButtonGroup>
                <Button
                  sx={{
                    width: "100%",
                    border: "1px solid #141718",
                    color: "#141718",
                    fontFamily: "Inter",
                    marginLeft: "6px",
                  }}
                  startIcon={<FavoriteBorderIcon />}
                >
                  WishList
                </Button>
              </Box>
              <Box sx={{ display: "flex", py: 2, fontFamily: "Inter" }} onClick={addToCartHandler}>
                <CustomButton wdth={"100%"}>Add To Cart</CustomButton>
              </Box>
              <Divider />

              <Box
                my={3}
                sx={{
                  width: { xs: "90%", sm: "60%", md: "60%" },
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }} cursor>
                  <Typography sx={styles.details}>CATEGORY</Typography>
                </Box>
                <Box>
                  <Typography sx={{ ...styles.details, color: "#141718" }}>
                    {productsDetailsData.category}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
