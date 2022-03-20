import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import { useNavigate } from "react-router-dom";

export default function AddUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  const [error, setError] = useState("");

  const { name, email, address, contact } = user;

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address || !contact || !email) {
      setError("Please fill all inputs");
    } else {
      dispatch(addUser(user));
      setError("");
      navigate("/");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add User</h1>
        </div>
        <div>{error && <h3 style={{ color: "red" }}>{error}</h3>}</div>
        <div>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            type="text"
            name="contact"
            value={contact}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            type="text"
            name="address"
            value={address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
