import { useState } from "react";
import {
  Stack,
  TextField,
  Typography,
  Box,
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

const SignupForm = () => {
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
  const Term = () => {
    return (
      <>
        <Typography variant="subtitle1">
          I agree with <Link style={LinkStyle}>Privacy Policy</Link> and{" "}
          <Link style={LinkStyle}>Terms of use</Link>
        </Typography>
      </>
    );
  };
  return (
    <Stack
      // border='solid'
      height="100vh"
      justifyContent={{ xs: "flex-start", sm: "center" }}
      alignItems="center"
    >
      <form noValidate>
        <Stack spacing={{ xs: 2, sm: 1 }} width={{ xs: 300, sm: 400 }}>
          <h1 style={{ fontFamily: "Poppins" }}>Sign Up</h1>
          <Typography variant="subtitle1">
            Already have an account?{" "}
            <Link to='/signin' style={{ color: "#38CB89", textDecoration: "none" }}>
              Sign in
            </Link>{" "}
          </Typography>
          <TextField variant="standard" label="Your Name" type="email" />
          <TextField variant="standard" label="Username" type="text" />
          <TextField variant="standard" label="Email Address" type="email" />
          <TextField variant="standard" label="Password" type="password" />
          <Box>
            <FormControlLabel
              label={<Term />}
              control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
            />
          </Box>
          <CustomButton wdth={"100%"}>Sign Up</CustomButton>

          {/* <Button variant='contained' type='submit' >Sign up</Button> */}
        </Stack>
      </form>
    </Stack>
  );
};

export default SignupForm;
