import { Grid, Stack, Typography } from "@mui/material";
import signup1 from "/image/signup1.png";
import SignInForm from "./Form/SignInForm.jsx";

const SignIn = () => {
  return (
    <Stack width="98vw" maxHeight="100vh" maxWidth="98vw">
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              backgroundColor: "#F3F5F7",
              height: "100%", // Set the height to 100% to prevent overflow
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              fontWeight="bold"
              padding={3}
            >
              {" "}
              3legant.
            </Typography>
            <img
              style={{ height: "auto", maxWidth: "100%", }}
              src={signup1}
              alt="signup1"
            />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <SignInForm />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SignIn;
