import { Divider, Grid, Rating, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function ProductDetails() {
  return (
    <div>
      <Container>
        {" "}
        <Typography>
          Add here your home shop living room product section
        </Typography>
        <Box>
          <Grid container spacing={5}>
            <Grid item sm={12} xs={12} md={6} xl={6}>
              {/* Add your left section here Parwez*/}
            </Grid>
            <Grid item sm={12} xs={12} md={6} xl={6}>
              {/* Right section */}
              <Box display={"flex"} marginBottom={2}>
                <Rating
                  readOnly
                  defaultValue={5}
                  sx={{ color: "black", marginRight: "0.5rem" }}
                />
                <Typography>11 Reviews</Typography>
              </Box>
              <Box marginBottom={3}>
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: "bold",

                    marginBottom: "1rem",
                  }}
                >
                  Tray Table
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
                  Buy one or buy a few and make every space where you sit more
                  convenient. Light and easy to move around with removable tray
                  top, handy for serving snacks.
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
                    $199.00
                  </Typography>
                  <Typography
                    // variant="p"

                    style={{
                      fontFamily: "Inter",
                      color: "#6C7275",
                      //   fontSize: "1rem",
                    }}
                  >
                    $400.00
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Box my={3}>
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Inter",
                    color: "#6C7275",
                    fontSize: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  Offer expires in:{" "}
                </Typography>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <Box width={"80px"}>
                    <Typography
                      variant="h4"
                      style={{
                        background: "#F3F5F7",
                        textAlign: "center",
                        padding: "0.8rem",
                        fontWeight: "bold",
                      }}
                    >
                      12
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign={"center"}
                      style={{ color: "#6C7275", fontSize: "0.7" }}
                    >
                      Days
                    </Typography>
                  </Box>
                  <Box width={"80px"}>
                    <Typography
                      variant="h4"
                      style={{
                        background: "#F3F5F7",
                        textAlign: "center",
                        padding: "0.8rem",
                        fontWeight: "bold",
                      }}
                    >
                      12
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign={"center"}
                      style={{ color: "#6C7275", fontSize: "0.7" }}
                    >
                      Hours
                    </Typography>
                  </Box>
                  <Box width={"80px"}>
                    <Typography
                      variant="h4"
                      style={{
                        background: "#F3F5F7",
                        textAlign: "center",
                        padding: "0.8rem",
                        fontWeight: "bold",
                      }}
                    >
                      45
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign={"center"}
                      style={{ color: "#6C7275", fontSize: "0.7" }}
                    >
                      Minutes
                    </Typography>
                  </Box>
                  <Box width={"80px"}>
                    <Typography
                      variant="h4"
                      style={{
                        background: "#F3F5F7",
                        textAlign: "center",
                        padding: "0.8rem",
                        fontWeight: "bold",
                      }}
                    >
                      10
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign={"center"}
                      style={{ color: "#6C7275", fontSize: "0.7" }}
                    >
                      Seconds
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Divider />
              <Box my={3}>
                <Typography
                  variant="body2"
                  style={{
                    fontFamily: "Inter",
                    color: "#6C7275",
                    fontSize: "1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Measurements:{" "}
                </Typography>
                <Typography>17 1/2x20 5/8</Typography>
              </Box>
              <Box my={3}>
                <Box display={"flex"} cursor>
                  <Typography
                    variant="body2"
                    style={{
                      fontFamily: "Inter",
                      color: "#6C7275",
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Choose Color
                  </Typography>
                  <ChevronRightIcon style={{ color: "#6C7275" }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
