import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import InstagramImages from "../Data/InstagramImages";
import BrandData from "../Data/BrandData";
import ServicesCardData from "../Data/ServicesCardData";
import CustomButton from "../Components/CustomButton";
import heroImage from "../assets/images/Hero Image.png";

const Home = () => {
  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    display: "block",
  };
  return (
    <React.Fragment>
      {/* main hero section  */}
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
        <Container>
          <br />
          <br />
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 8 }}
          >
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              sx={{
                display: "flex",
                alignItems: "left",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "4rem" },
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: { xs: "2rem", sm: "3rem", md: "4rem" },
                  textAlign: { xs: "center", sm: "start" },
                }}
                gutterBottom
              >
                Listen to the <span style={{ color: "#377dff" }}>amazing</span>{" "}
                music sound.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontSize: { xs: "1rem", sm: "1.3rem", md: "1.3rem" },
                  textAlign: { xs: "center", sm: "start" },
                }}
                gutterBottom
              >
                Experience music like never before.
              </Typography>
              <br />

              <Grid
                display="flex"
                justifyContent={{ xs: "center", sm: "flex-start" }}
                alignItems="center"
              >
                <CustomButton type="button">Shopping Now</CustomButton>
              </Grid>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <img src={heroImage} alt="heroimage" style={imageStyle} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* brands section  */}
      <Container>
        {BrandData.map((item, i) => (
          <img
            key={i}
            src={item.src}
            alt={item.alt}
            style={{
              width: "auto",
              margin: "10px 10px",
            }}
          />
        ))}
      </Container>
      {/* services card section  */}
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 12, sm: 12, md: 12 }}
        >
          {ServicesCardData.map((item, i) => (
            <Grid item xs={6} sm={6} md={3} key={i}>
              <Grid
                container
                alignItems="flex-start"
                justifyContent="center"
                sx={{
                  minHeight: "200px",
                  background: "#F3F5F7",
                  flexDirection: "column",
                  padding: "1rem",
                }}
              >
                <img src={item.logo} alt={item.title} />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#141718",
                    fontFamily: "Poppins",
                    fontSize: "1.25rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "1.75rem",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#6C7275",
                    fontFamily: "Poppins",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "1.5rem",
                  }}
                >
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* instagram section  */}
      <Container>
        <Box margin="3rem 0rem">
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Inter",
              fontWeight: "bold",
              margin: "0.5rem",
              color: "#6C7275",
            }}
          >
            NEWSFEED
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Poppins",
              fontWeight: "bold",
              color: "#121212",
              margin: "0.5rem",
            }}
            variant="h4"
          >
            Instagram
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Inter",
              margin: "0.5rem",
              color: "#121212",
            }}
          >
            Follow us on social media for more discounts & promotions
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Inter",
              margin: "0.5rem",
              color: "#6C7275",
            }}
          >
            @3legant_official
          </Typography>
          <Grid container spacing={3}>
            {InstagramImages.map((item, i) => (
              <Grid
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
                item
                key={i}
                xs={12}
                sm={6}
                md={3}
                xl={3}
              >
                <img
                  src={item.name}
                  alt="instagramimages"
                  style={{ margin: "auto" }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Home;
