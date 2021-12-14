import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const AddUser = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    birth: "",
    email: "",
  });

  const [error, setError] = useState("");

  let history = useHistory();
  let dispatch = useDispatch();
  const { firstname, lastname, birth, email } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !birth || !email) {
      setError("a mezők nem maradhatnak üresen!");
      console.log("teszt");
    } else {
      dispatch(addUser(state));
      history.push("/");
      setError("");
      console.log("teszt");
    }
  };

  return (
    <div className="container">
      <div className="row pt-5">
        <h1>Új tag felvétele</h1>
        {error && <h5 style={{ color: "red" }}>{error}</h5>}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          validate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div>
            <TextField
              id="standard-basic"
              label="Vezetéknév"
              value={firstname}
              name="firstname"
              type="text"
              variant="standard"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Keresztnév"
              value={lastname}
              name="lastname"
              type="text"
              variant="standard"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Születési év"
              value={birth}
              name="birth"
              type="text"
              variant="standard"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="E-mail cím"
              value={email}
              name="email"
              variant="standard"
              onChange={handleInputChange}
            />
          </div>
          <Button type="submit" variant="contained">
            felvétel
          </Button>
          <Button
            onClick={() => history.push("/")}
            type="submit"
            variant="contained"
            color="secondary"
          >
            vissza
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default AddUser;
