import { Box, Grid, Typography } from "@mui/material";
import heroImage from "../assets/images/Hero Image.png";
import CustomButton from "./Button";

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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "4rem", sm: "4rem" },
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
          <CustomButton type="button" wdth={'35%'}>Shopping Now</CustomButton>
        </Grid>
        <Grid item xs={6}>
          <img src={heroImage} alt="heroimage" style={imageStyle} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
