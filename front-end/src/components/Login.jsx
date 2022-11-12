import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import styles from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { fail, success } from "../redux/userSlice";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid white",
    color: "white",
  },
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "&:hover": {
    borderColor: "white",
  },
});

const Login = () => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCredentials((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const { error } = useSelector((state) => state.user);

  const handleSubmit = async () => {
    try {
      const result = await axios.post("http://localhost:3000/api/auth/signin", {
        ...credentials,
      });
      dispatch(success(result.data));
    } catch (err) {
      dispatch(fail(err.response.data.message));
    }
  };

  return (
    <Container>
      <Wrapper>
        <Box component="form" validate>
          <FormComponents>
            <StyledTextField
              placeholder="Enter your email"
              variant="outlined"
              required
              type="email"
              inputProps={{ style: { color: "white" } }}
              value={credentials.email}
              onChange={handleChange}
              name="email"
              autoComplete="off"
            />
            <StyledTextField
              placeholder="Enter your password"
              variant="outlined"
              required
              type="password"
              inputProps={{ style: { color: "white" } }}
              value={credentials.password}
              onChange={handleChange}
              name="password"
              autoComplete="off"
              helperText={error}
            />
            <Button variant="outlined" onClick={handleSubmit}>
              Sign In
            </Button>
          </FormComponents>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styles.div`
  width: 100%;
  height: calc(100vh - 80px);
  margin-top: 80px;
  display: grid;
  place-items: center;
`;

const Wrapper = styles.div`
  width: min(20rem, 30rem);
`;

const FormComponents = styles.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
