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
  const [user, setUser] = useState({
    email: "",
    password: ""

  })
  const [rememberMe, setRememberMe] = useState(false);
  const handerInputChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  // console.log(acceptTnC);
  const handleChange = () => {
    setRememberMe(!rememberMe);
  };

  // form submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      alert('fill mandatory fields ');
      return;
    }
    console.log("submitted");
    alert('form submitted')
  }
  return (
    <Stack
      // border='solid'
      height="100vh"
      justifyContent={{ xs: "flex-start", sm: "center" }}
      alignItems="center"
    >
      <form noValidate>
        <Stack spacing={{ xs: 2, sm: 1 }} width={{ xs: 300, sm: 400 }}>
          <h1 style={{ fontFamily: "Poppins" }}>Sign In</h1>
          <Typography variant="subtitle1">
            {" "}
            Don&apos;t have an account?{" "}
            <Link to='/signup' style={{ color: "#38CB89", textDecoration: "none" }}>
              Sign Up
            </Link>{" "}
          </Typography>

          <TextField
            variant="standard" label="your username or eamil address" type="text" name="email" value={user.email} onChange={handerInputChanges} />
          <TextField variant="standard" label="Password" type="password" name="password" value={user.password} onChange={handerInputChanges} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack>
              <FormControlLabel
                label="Remember me"
                control={
                  <Checkbox checked={rememberMe} onChange={handleChange} />
                }
              />
            </Stack>
            <Stack>
              <Link style={LinkStyle}>Forgot Password</Link>
            </Stack>
          </Stack>
          {/* <CustomButton>Sign in</CustomButton> */}
          <div onClick={handleLoginSubmit}>
            <CustomButton wdth={"100%"}>Sign In</CustomButton>
          </div>

          {/* <Button variant='contained' type='submit' >Sign in</Button> */}
        </Stack>
      </form>
    </Stack>
  );
};

export default SignInForm;
