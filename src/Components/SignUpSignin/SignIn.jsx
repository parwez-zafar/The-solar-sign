import { Grid, Stack, Typography } from "@mui/material";
import signup1 from "../../assets/images/AuthFormImage.png";
import SignInForm from "./Form/SignInForm.jsx";

const SignIn = () => {
  return (
    <Stack width="100vw" maxHeight="100vh" maxWidth="100vw">
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <div
            style={{
              backgroundColor: "#F3F5F7",
              height: "auto",
              width: "100%",
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
              style={{ height: "auto", width: "100%" }}
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
