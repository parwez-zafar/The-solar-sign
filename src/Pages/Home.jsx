import React from "react";
import Hero from "../Components/Hero";
import { Box, Container, Grid, Typography } from "@mui/material";
import InstagramImages from "../Data/InstagramImages";
import BrandData from "../Data/BrandData";
import ServicesCardData from "../Data/ServicesCardData";

const Home = () => {
  return (
    <React.Fragment>
      {/* main hero section  */}
      <Hero />
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
