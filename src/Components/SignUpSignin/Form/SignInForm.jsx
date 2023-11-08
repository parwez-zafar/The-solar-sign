import { useState } from "react";
import {
  Stack,
  Typography,
  FormControlLabel,
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Link } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LinkStyle = {
  color: "black",
  fontWeight: "bold",
  textDecoration: "none",
};

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const handerInputChanges = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleChange = () => {
    setRememberMe(!rememberMe);
  };

  // form submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      alert("fill mandatory fields ");
      return;
    }
    console.log("submitted");
    alert("form submitted");
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Stack
      // border='solid'
      height="100vh"
      justifyContent={{ xs: "flex-start", sm: "center" }}
      alignItems="center"
    >
      <form>
        <Stack spacing={{ xs: 2, sm: 1 }} width={{ xs: 300, sm: 400 }}>
          <h1 style={{ fontFamily: "Poppins" }}>Sign In</h1>
          <Typography variant="subtitle1">
            {" "}
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              style={{ color: "#38CB89", textDecoration: "none" }}
            >
              Sign Up
            </Link>{" "}
          </Typography>

          <FormControl variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Email Address
            </InputLabel>
            <Input
              name="email"
              type="email"
              required
              value={user.email}
              onChange={handerInputChanges}
            />
          </FormControl>

          <FormControl variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={user.password}
              onChange={handerInputChanges}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
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
            <CustomButton type="submit" wdth={"100%"}>
              Sign In
            </CustomButton>
          </div>

          {/* <Button variant='contained' type='submit' >Sign in</Button> */}
        </Stack>
      </form>
    </Stack>
  );
};

export default SignInForm;
