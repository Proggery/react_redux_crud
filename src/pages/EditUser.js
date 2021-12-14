import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";
import { updateUser, getSingleUser } from "../redux/actions";

const EditUser = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    birth: "",
    email: "",
  });

  const [error, setError] = useState("");
  let { id } = useParams();
  const { user } = useSelector((state) => state.data);
  let history = useHistory();
  let dispatch = useDispatch();
  const { firstname, lastname, birth, email } = state;

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState({ ...user });
    }
  }, [user]);

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
      dispatch(updateUser(state, id));
      history.push("/");
      setError("");
      console.log("teszt");
    }
  };

  return (
    <div className="container">
      <div className="row pt-5">
        <h1>Tag szerkesztése</h1>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
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
              label="Név"
              value={firstname || ""}
              name="firstname"
              type="text"
              variant="standard"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Név"
              value={lastname || ""}
              name="lastname"
              type="text"
              variant="standard"
              onChange={handleInputChange}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Név"
              value={birth || ""}
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
              value={email || ""}
              name="email"
              variant="standard"
              onChange={handleInputChange}
            />
          </div>
          <Button type="submit" variant="contained">
            szerkeszt
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

export default EditUser;
