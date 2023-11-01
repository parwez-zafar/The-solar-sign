import { Box, Grid, Paper, Typography } from "@mui/material";
// import signup1 from "/image/signup1.png";
// import SignInForm from "./Form/SignInForm.jsx";
import AuthFormImage from "../assets/images/AuthFormImage.png";

const AuthForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 8 }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <Typography
            variant="h6"
            sx={{
              color: "#141718",
              fontFamily: "Poppins",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            3legant.
          </Typography>
          <img
            src={AuthFormImage}
            alt="AuthFormImage"
            width="100%"
            height="60%"
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Paper elevation={3}>
            <>2</>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthForm;
