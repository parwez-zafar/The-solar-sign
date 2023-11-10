import {
  Box,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  OutlinedInput,
  Radio,
  Typography,
} from "@mui/material";
import { useState } from "react";

const styles = {
  formStyle: {
    fontWeight: "700",
    fontSize: "12px",
    fontFamily: "inter",
    marginBottom: "3px",
    marginLeft: "0",
  },
};

const boxStyles = {
  borderRadius: "0.25rem",
  border: "1px solid #6C7275",
  p: 5,
  mb: 3,
};

const headingStyles = {
  fontFamily: "Poppins",
  fontSize: "1.25rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "1.75rem",
  mb: 3,
};

const innerText = { fontFamily: "inter", fontWeight: "400", fontSize: "16px" };

const CheckoutDetails = () => {
  const [selectedValue, setSelectedValue] = useState("free");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box sx={boxStyles}>
            <form>
              <Typography sx={headingStyles}>Contact Information</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl variant="outlined" fullWidth>
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          sx={styles.formStyle}
                        >
                          FIRST NAME*
                        </FormHelperText>
                        <OutlinedInput
                          size="small"
                          id="outlined-adornment-weight"
                          placeholder="First name"
                          aria-describedby="outlined-weight-helper-text"
                          name="firstname"
                          required
                          type="text"
                          //   value={accountDetails.firstname}
                          //   onChange={handerInputChanges}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl variant="outlined" fullWidth>
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          sx={styles.formStyle}
                        >
                          LAST NAME*
                        </FormHelperText>
                        <OutlinedInput
                          size="small"
                          id="outlined-adornment-weight"
                          placeholder="Last name"
                          aria-describedby="outlined-weight-helper-text"
                          name="lastname"
                          required
                          type="text"
                          //   value={accountDetails.firstname}
                          //   onChange={handerInputChanges}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <FormHelperText
                      id="outlined-weight-helper-text"
                      sx={styles.formStyle}
                    >
                      PHONE NUMBER*
                    </FormHelperText>
                    <OutlinedInput
                      size="small"
                      id="outlined-adornment-weight"
                      placeholder="Phone name"
                      aria-describedby="outlined-weight-helper-text"
                      name="phonenumber"
                      required
                      type="number"
                      //   value={accountDetails.firstname}
                      //   onChange={handerInputChanges}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <FormHelperText
                      id="outlined-weight-helper-text"
                      sx={styles.formStyle}
                    >
                      EMAIL ADDRESS*
                    </FormHelperText>
                    <OutlinedInput
                      size="small"
                      id="outlined-adornment-weight"
                      placeholder="Your Email"
                      aria-describedby="outlined-weight-helper-text"
                      name="email"
                      required
                      type="email"
                      //   value={accountDetails.email}
                      //   onChange={handerInputChanges}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          </Box>
          <Box sx={boxStyles}>
            <form>
              <Typography sx={headingStyles}>Shipping Address</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormControl variant="outlined" fullWidth>
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          sx={styles.formStyle}
                        >
                          STREET ADDRESS*
                        </FormHelperText>
                        <OutlinedInput
                          size="small"
                          id="outlined-adornment-weight"
                          placeholder="Street Address"
                          aria-describedby="outlined-weight-helper-text"
                          name="streetaddress"
                          required
                          type="text"
                          //   value={accountDetails.firstname}
                          //   onChange={handerInputChanges}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth>
                    <FormHelperText
                      id="outlined-weight-helper-text"
                      sx={styles.formStyle}
                    >
                      COUNTRY*
                    </FormHelperText>
                    <OutlinedInput
                      size="small"
                      id="outlined-adornment-weight"
                      placeholder="Country"
                      aria-describedby="outlined-weight-helper-text"
                      name="country"
                      required
                      type="text"
                      //   value={accountDetails.firstname}
                      //   onChange={handerInputChanges}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <FormHelperText
                      id="outlined-weight-helper-text"
                      sx={styles.formStyle}
                    >
                      TOWN CITY*
                    </FormHelperText>
                    <OutlinedInput
                      size="small"
                      id="outlined-adornment-weight"
                      placeholder="Town City"
                      aria-describedby="outlined-weight-helper-text"
                      name="towncity"
                      required
                      type="text"
                      //   value={accountDetails.firstname}
                      //   onChange={handerInputChanges}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl variant="outlined" fullWidth>
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          sx={styles.formStyle}
                        >
                          STATE*
                        </FormHelperText>
                        <OutlinedInput
                          size="small"
                          id="outlined-adornment-weight"
                          placeholder="State"
                          aria-describedby="outlined-weight-helper-text"
                          name="state"
                          required
                          type="text"
                          //   value={accountDetails.firstname}
                          //   onChange={handerInputChanges}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl variant="outlined" fullWidth>
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          sx={styles.formStyle}
                        >
                          ZIP CODE*
                        </FormHelperText>
                        <OutlinedInput
                          size="small"
                          id="outlined-adornment-weight"
                          placeholder="Zip Code"
                          aria-describedby="outlined-weight-helper-text"
                          name="zipcode"
                          required
                          type="number"
                          //   value={accountDetails.firstname}
                          //   onChange={handerInputChanges}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Box>
          <Box sx={boxStyles}>
            <form>
              <Typography sx={headingStyles}>Payment Method</Typography>
              <Box
                sx={{
                  display: "flex",
                  border: "1px solid #6C7275",
                  borderRadius: "5px",
                  margin: "2%",
                  marginLeft: "0",
                  cursor: "pointer",
                  backgroundColor:
                    selectedValue === "free" ? "#F3F5F7" : "transparent",
                  "&:hover": {
                    backgroundColor: "#F3F5F7",
                  },
                }}
                onClick={() => setSelectedValue("free")}
              >
                {" "}
                <Radio
                  {...controlProps("free")}
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    p: 2,
                    paddingLeft: "0",
                  }}
                >
                  <Typography sx={innerText}>Free Shipping</Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  border: "1px solid #6C7275",
                  borderRadius: "5px",
                  margin: "2%",
                  marginLeft: "0",
                  cursor: "pointer",
                  backgroundColor:
                    selectedValue === "paypal" ? "#F3F5F7" : "transparent",
                  "&:hover": {
                    backgroundColor: "#F3F5F7",
                  },
                }}
                onClick={() => setSelectedValue("paypal")}
              >
                {" "}
                <Radio
                  {...controlProps("paypal")}
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    p: 2,
                    paddingLeft: "0",
                  }}
                >
                  <Typography sx={innerText}>Paypal</Typography>
                </Box>
              </Box>
              <Box sx={{ color: "#6C7275", mb: 2 }}>
                <Divider />
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormControl variant="outlined" fullWidth>
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          sx={styles.formStyle}
                        >
                          CARD NUMBER*
                        </FormHelperText>
                        <OutlinedInput
                          size="small"
                          id="outlined-adornment-weight"
                          placeholder="Card Number"
                          aria-describedby="outlined-weight-helper-text"
                          name="cardnumber"
                          required
                          type="number"
                          //   value={accountDetails.firstname}
                          //   onChange={handerInputChanges}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <FormControl variant="outlined" fullWidth>
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          sx={styles.formStyle}
                        >
                          EXPIRATION DATE*
                        </FormHelperText>
                        <OutlinedInput
                          size="small"
                          id="outlined-adornment-weight"
                          placeholder="MM/YY"
                          aria-describedby="outlined-weight-helper-text"
                          name="expirationdate"
                          required
                          type="number"
                          //   value={accountDetails.firstname}
                          //   onChange={handerInputChanges}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl variant="outlined" fullWidth>
                        <FormHelperText
                          id="outlined-weight-helper-text"
                          sx={styles.formStyle}
                        >
                          CVC*
                        </FormHelperText>
                        <OutlinedInput
                          size="small"
                          id="outlined-adornment-weight"
                          placeholder="CVC Code"
                          aria-describedby="outlined-weight-helper-text"
                          name="cvccode"
                          required
                          type="number"
                          //   value={accountDetails.firstname}
                          //   onChange={handerInputChanges}
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          Order Summary here
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutDetails;
