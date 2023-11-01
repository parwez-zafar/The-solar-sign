import React from "react";
import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import { Box, Container, Grid, Typography } from "@mui/material";
import headphone from "../../src/assets/images/headphone.png";
import image from "../../src/assets/images/image.png";
import image3 from "../../src/assets/images/image3.png";
import image4 from "../../src/assets/images/image4.png";

const instagramImages = [
  { name: headphone },
  { name: image },
  { name: image3 },
  { name: image4 },
];

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Brands />
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
            {instagramImages.map((item, i) => (
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
