import { Box, Grid, Typography } from "@mui/material";
import heroImage from "../assets/images/Hero Image.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    display: "block",
  };

  return (
    <Box
      sx={{
        background: "#FFC95C",
        height: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "1rem", sm: "4rem" },
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "4rem",
            }}
            gutterBottom
          >
            Listen to <br />
            the <span style={{ color: "#377dff" }}>amazing</span> music sound.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: { xs: "1.3rem", sm: "1.3rem" },
            }}
            gutterBottom
          >
            Experience music like never before.
          </Typography>
          <br />
          <CustomButton>Shopping Now</CustomButton>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <img src={heroImage} alt="heroimage" style={imageStyle} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
