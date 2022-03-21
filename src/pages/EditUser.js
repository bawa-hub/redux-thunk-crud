import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/actions";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css";

export default function EditUser() {
  const [feilds, setFeilds] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  const [error, setError] = useState("");

  const { name, email, address, contact } = feilds;

  let dispatch = useDispatch();
  let navigate = useNavigate();
  let { id } = useParams();
  const { user } = useSelector((state) => state.usersState);

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setFeilds({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setFeilds({ ...feilds, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !address || !contact || !email) {
      setError("Please fill all inputs");
    } else {
      dispatch(updateUser(feilds, id));
      setError("");
      navigate("/");
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <h1 style={{ textAlign: "center", color: "green" }}>Edit User</h1>
        </div>
        <div>{error && <h3 style={{ color: "red" }}>{error}</h3>}</div>
        <div className="textfeild">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
            name="name"
            value={name || ""}
            style={{ width: "100%" }}
            onChange={handleInputChange}
          />
        </div>
        <div className="textfeild">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={email || ""}
            style={{ width: "100%" }}
            onChange={handleInputChange}
          />
        </div>
        <div className="textfeild">
          <TextField
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            type="text"
            name="contact"
            value={contact || ""}
            style={{ width: "100%" }}
            onChange={handleInputChange}
          />
        </div>
        <div className="textfeild">
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            type="text"
            name="address"
            value={address || ""}
            style={{ width: "100%" }}
            onChange={handleInputChange}
          />
        </div>
        <div className="textfeild">
          <Button variant="contained" type="submit">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}
