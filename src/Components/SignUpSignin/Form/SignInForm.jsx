import { useState } from "react";
import {
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton";

const LinkStyle = {
  color: "black",
  fontWeight: "bold",
  textDecoration: "none",
};

const SignInForm = () => {
  // const [user, setUser] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     username: ""
  // })

  const [acceptTnC, setAcceptTnC] = useState(false);
  console.log(acceptTnC);
  const handleChange = () => {
    setAcceptTnC(!acceptTnC);
  };
  return (
    <Stack
      // border='solid'
      height="100vh"
      justifyContent={{ xs: "flex-start", sm: "center" }}
      alignItems="center"
    >
      <form noValidate>
        <Stack spacing={{ xs: 2, sm: 1 }} width={{ xs: 200, sm: 400 }}>
          <h1 style={{ fontFamily: "Poppins" }}>Sign In</h1>
          <Typography variant="subtitle1">
            {" "}
            Don&apos;t have an account?{" "}
            <Link style={{ color: "#38CB89", textDecoration: "none" }}>
              Sign Up
            </Link>{" "}
          </Typography>

          <TextField
            variant="standard"
            label="your username or eamil address"
            type="text"
          />
          <TextField variant="standard" label="Password" type="password" />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack>
              <FormControlLabel
                label="Remember me"
                control={
                  <Checkbox checked={acceptTnC} onChange={handleChange} />
                }
              />
            </Stack>
            <Stack>
              <Link style={LinkStyle}>Forgot Password</Link>
            </Stack>
          </Stack>
          {/* <CustomButton>Sign in</CustomButton> */}
          <CustomButton wdth={"100%"}>Sign In</CustomButton>

          {/* <Button variant='contained' type='submit' >Sign in</Button> */}
        </Stack>
      </form>
    </Stack>
  );
};

export default SignInForm;
