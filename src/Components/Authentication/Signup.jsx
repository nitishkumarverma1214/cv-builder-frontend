import React, { useState } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { facebookLogin, googleLogin } from "./Login";
import { validateEmail } from "../../util/validateEmail";
import { validateUsername } from "../../util/validateUsername";
import { validatePassword } from "../../util/validatePassword";
function Signup() {
  const googleButton = {
    backgroundColor: "#4285f4",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#4285f4",
    },
  };
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    setIsLoading(true);
    if (!username || !email || !password) {
      setIsLoading(false);
      toast.error("  Please Fill all the Feilds", {
        position: toast.POSITION.TOP_RIGHT,
      });

      return;
    }

    // create the new user here
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
        crossDomain: true,
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/register`,
        phone
          ? { username, email, phone, password }
          : { username, email, password },
        config,
      );

      toast.success(" Registration Successful!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/user`,
        config,
      );
      dispatch(login({ isLoggedIn: true, username: response?.data?.username }));
      setIsLoading(false);
      navigate("/");
      // navigate to the dashboard
    } catch (error) {
      setIsLoading(false);
      toast.error("Error Occured!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Box
      component="form"
      sx={{
        border: "1px solid grey",
        padding: "1rem",
        borderRadius: "1rem",
        marginTop: "4rem",
        marginBottom: "2rem",
      }}
      noValidate
      variant="outlined"
      autoComplete="off"
    >
      <Stack spacing={2}>
        <h3>New to CV Builder? Sign Up!</h3>

        <section className="signup-container">
          <section className="btn-container">
            <Button
              variant="outlined"
              startIcon={<FacebookIcon />}
              onClick={facebookLogin}
            >
              Sign Up with Facebook
            </Button>

            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={googleButton}
              onClick={googleLogin}
            >
              Sign Up with Google
            </Button>
          </section>
          <Divider orientation="vertical">OR</Divider>
          <section className="form-container">
            <TextField
              id="name"
              label="Enter your username"
              variant="outlined"
              name="name"
              required
              value={username}
              error={username.length > 0 && validateUsername(username)}
              helperText={
                username.length > 0 && validateUsername(username)
                  ? "Invalid username"
                  : " "
              }
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              id="email"
              label="Enter your email"
              variant="outlined"
              name="email"
              required
              value={email}
              error={email.length > 0 && validateEmail(email)}
              helperText={
                email.length > 0 && validateEmail(email)
                  ? "Invalid email format!"
                  : " "
              }
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="phone"
              label="Enter your contact number"
              variant="outlined"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <FormControl variant="outlined" required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                required
                value={password}
                error={password.length > 0 && validatePassword(password)}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {password.length > 0 && validatePassword(password) && (
                <span style={{ color: "red", fontSize: "0.75rem" }}>
                  password of length 8 or more with one digit one special
                  character one lower and uppercase letter
                </span>
              )}
            </FormControl>
            <LoadingButton
              variant="solid"
              loading={isLoading}
              sx={{
                border: "1px solid grey",
                backgroundColor: "blue",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "white",
                },
              }}
              width="100%"
              onClick={handleSignup}
            >
              Sign up
            </LoadingButton>
          </section>
        </section>

        <h4>
          Already have a account? <Link to="/login">Login</Link>
        </h4>
      </Stack>
    </Box>
  );
}

export default Signup;
