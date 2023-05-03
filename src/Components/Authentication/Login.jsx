import React, { useState } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import axios from "axios";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../../feature/user/userSlice";
import { LoadingButton } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { validateEmail } from "../../util/validateEmail";
import { validatePassword } from "../../util/validatePassword";

export const googleLogin = async () => {
  try {
    window.open(`${import.meta.env.VITE_BACKEND_URL}/auth/google`, "_self");
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const facebookLogin = () => {
  try {
    window.open(`${import.meta.env.VITE_BACKEND_URL}/auth/facebook`, "_self");
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

function Login() {
  const googleButton = {
    backgroundColor: "#4285f4",
    color: "#fff",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#4285f4",
    },
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/user`,
      { withCredentials: true },
    );

    if (response.status === 200 && response.data) {
      dispatch(login({ isLoggedIn: true, username: response?.data?.username }));
      // toast.success("Login Successfully!", {
      //   position: toast.POSITION.TOP_RIGHT,
      // });

      navigate("/");
    }
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (email === "" || password === "") {
      setIsLoading(false);
      toast.error("Invalid Credentials", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    try {
      const config = {
        crossDomain: true,
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        {
          username: email,
          password,
        },
        config,
      );
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/user`,
        config,
      );

      toast.success("Login Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch(login({ isLoggedIn: true, username: response?.data?.username }));
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      dispatch(login({ isLoggedIn: false, username: "" }));
      setIsLoading(false);
      toast.error("Login Failed!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      console.log(error);
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{ border: "1px solid grey", padding: "1rem", borderRadius: "1rem" }}
        noValidate
        variant="outlined"
        autoComplete="off"
      >
        <h3>Create new account</h3>
        <section className="login-container">
          <section className="btn-container">
            <Button
              variant="outlined"
              startIcon={<FacebookIcon />}
              onClick={facebookLogin}
            >
              Login with Facebook
            </Button>

            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={googleLogin}
              sx={googleButton}
            >
              Login with Google
            </Button>
          </section>
          <Divider orientation="vertical">OR</Divider>

          <section className="form-container">
            <TextField
              id="email"
              label="Enter your email or username"
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

            <FormControl variant="outlined" required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                value={password}
                error={password.length > 0 && validatePassword(password)}
                onChange={(e) => setPassword(e.target.value)}
                required
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
                backgroundColor: "#6096B4",
                fontWeight: "bold",
                color: "white",
                "&:hover": {
                  color: "blue",
                  backgroundColor: "white",
                },
              }}
              width="100%"
              type="submit"
              onClick={(e) => handlelogin(e)}
            >
              Login
            </LoadingButton>
          </section>
        </section>
        <h4>
          Don't have a account? <Link to="/signup">Signup</Link>
        </h4>
      </Box>
    </>
  );
}

export default Login;
