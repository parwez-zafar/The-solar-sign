import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { useRef, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ShoppingCart from "../../Components/ShoppingCart";

const Cart = () => {
  const [activeTab, setActtiveTab] = useState("1");
  const [isShoppingCompete, setIsShoppingComplete] = useState(false);
  const [isCheckoutComplete, setIsCheckoutComplte] = useState(false);
  const [cartComplete, setCartComplete] = useState(false);
  const tab1Ref = useRef(null);
  const tab2Ref = useRef(null);
  const tab3Ref = useRef(null);
  const handlepurchaseClick = () => {
    setCartComplete(true);
    tab3Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handelCheckoutClick = () => {
    setIsShoppingComplete(true);
    setActtiveTab("2");
    tab2Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleplaceOrderClick = () => {
    setIsCheckoutComplte(true);
    setActtiveTab("3");
    tab3Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Container>
        <Box>
          <Typography
            variant="h3"
            style={{
              fontFamily: "Poppins",
              textAlign: "center",
              margin: "2rem",
            }}
          >
            {activeTab === "1" && "Cart"}
            {activeTab === "2" && "Check Out"}
            {activeTab === "3" && "Complete!"}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: { sm: "none", md: "center" },
            gap: "40px",
            overflowX: { xs: "scroll", md: "hidden" },
            margin: "1rem",
          }}
        >
          <Box
            ref={tab1Ref}
            onClick={() => {
              setActtiveTab("1");
              setIsShoppingComplete(false);
            }}
            sx={{
              minWidth: "256px",
              display: "flex",

              alignItems: "center",
              pb: "1rem",
              borderBottom: isShoppingCompete
                ? "2px solid #45B26B"
                : activeTab === "1"
                  ? "2px solid black"
                  : "",
              cursor: "pointer",
            }}
          >
            <IconButton
              sx={{
                background: isShoppingCompete
                  ? "#45B26B"
                  : activeTab === "1"
                    ? "#000"
                    : "#B1B5C3",
                marginRight: "1rem",
              }}
            >
              {isShoppingCompete && <CheckIcon sx={{ color: "white" }} />}
              {!isShoppingCompete && (
                <Typography
                  color={activeTab === "1" ? "white" : "#FCFCFD"}
                  width={30}
                  height={30}
                  borderRadius={"50%"}
                >
                  1
                </Typography>
              )}
            </IconButton>
            <Typography
              sx={{
                fontFamily: "inter",
                fontSize: "1rem",
                fontWeight: "bold",
                color: isShoppingCompete
                  ? "#45B26B"
                  : activeTab === "1"
                    ? "black"
                    : "#B1B5C3",
              }}
            >
              Shopping cart
            </Typography>
          </Box>
          <Box
            ref={tab2Ref}
            onClick={() => {
              setActtiveTab("2");
              setIsCheckoutComplte(false);
            }}
            sx={{
              minWidth: "256px",
              display: "flex",

              alignItems: "center",
              pb: "1rem",
              cursor: "pointer",
              borderBottom: isCheckoutComplete
                ? "2px solid #45B26B"
                : activeTab === "2"
                  ? "2px solid black"
                  : "",
            }}
          >
            <IconButton
              sx={{
                background: isCheckoutComplete
                  ? "#45B26B"
                  : activeTab === "2"
                    ? "#000"
                    : "#B1B5C3",
                marginRight: "1rem",
              }}
            >
              {isCheckoutComplete && <CheckIcon sx={{ color: "white" }} />}
              {!isCheckoutComplete && (
                <Typography
                  color={
                    isCheckoutComplete
                      ? "#45B26B"
                      : activeTab === "2"
                        ? "white"
                        : "#FCFCFD"
                  }
                  width={30}
                  height={30}
                  borderRadius={"50%"}
                >
                  2
                </Typography>
              )}
            </IconButton>
            <Typography
              sx={{
                fontFamily: "inter",
                fontSize: "1rem",
                fontWeight: "bold",
                color: isCheckoutComplete
                  ? "#45B26B"
                  : activeTab === "2"
                    ? "black"
                    : "#B1B5C3",
              }}
            >
              Checkout details{" "}
            </Typography>
          </Box>
          <Box
            ref={tab3Ref}
            onClick={() => {
              setActtiveTab("3");
              setCartComplete(false);
            }}
            sx={{
              minWidth: "256px",
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
              pb: "1rem",
              borderBottom: cartComplete
                ? "2px solid #45B26B"
                : activeTab === "3"
                  ? "2px solid black"
                  : "",
            }}
          >
            <IconButton
              sx={{
                background: cartComplete
                  ? "#45B26B"
                  : activeTab === "3"
                    ? "#000"
                    : "#B1B5C3",
                marginRight: "1rem",
              }}
            >
              {cartComplete && <CheckIcon sx={{ color: "white" }} />}
              {!cartComplete && (
                <Typography
                  color={
                    cartComplete
                      ? "#45B26B"
                      : activeTab === "3"
                        ? "white"
                        : "#FCFCFD"
                  }
                  width={30}
                  height={30}
                  borderRadius={"50%"}
                >
                  3
                </Typography>
              )}
            </IconButton>
            <Typography
              sx={{
                fontFamily: "inter",
                fontSize: "1rem",
                fontWeight: "bold",
                color: cartComplete
                  ? "#45B26B"
                  : activeTab === "3"
                    ? "black"
                    : "#B1B5C3",
              }}
            >
              Order Complete{" "}
            </Typography>
          </Box>
        </Box>
        {activeTab === "1" && (
          <Box>
            {/* <Button onClick={handelCheckoutClick} width="100%">
              Chekout
            </Button> */}
            <ShoppingCart onCheckoutClick={handelCheckoutClick} />
          </Box>
        )}
        {activeTab === "2" && (
          <Box>
            <Button onClick={handleplaceOrderClick} width="100%">
              Place order
            </Button>
          </Box>
        )}
        {activeTab === "3" && (
          <Box>
            <Button onClick={handlepurchaseClick} width="100%">
              Purchase history
            </Button>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default Cart;
