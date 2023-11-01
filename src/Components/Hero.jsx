import { Box, Grid, Typography } from "@mui/material";
import heroImage from "../assets/images/Hero Image.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    display: "block",
  };
  // const buttonCenterStyle = {
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // };

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
        alignItems='center'
        justifyContent='center'
      >
        <Grid item
          xs={3} sm={4} md={4}

        // border='solid'
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: { xs: "2rem", sm: "4rem" },
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: { xs: "3rem", sm: "4rem" },
              textAlign: { xs: 'center', sm: 'start' },
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
              textAlign: { xs: 'center', sm: 'start' },
            }}
            gutterBottom
          >
            Experience music like never before.
          </Typography>
          <br />
          {/* <CustomButton type="button">Shopping Now</CustomButton> */}
          {/* <CustomButton type="button" sx={{ textAlign: 'center' }}>Shopping Now</CustomButton> */}
          {/* <CustomButton type="button" style={buttonCenterStyle}>Shopping Now</CustomButton> */}

          <Grid display='flex' justifyContent={{ xs: 'center', sm: 'flex-start' }} alignItems='center'>
            <CustomButton type="button">Shopping Now</CustomButton>
          </Grid>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <img src={heroImage} alt="heroimage" style={imageStyle} />
        </Grid>
      </Grid>
    </Box >
  );
};

export default Hero;
