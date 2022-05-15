import React, { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../layouts/navbar/Navbar";
import ImageIcon from "@mui/icons-material/Image";
import { Button, TextField } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
import axios from "axios";
import { alpha, styled } from "@mui/material/styles";
import { DarkModeContext } from "../../context/darkModeContext";
// css
import "./addNew.scss";

const AddNew = () => {
  const { darkMode } = useContext(DarkModeContext);
  const CssTextField = styled(TextField)({
    "& label": {
      color: darkMode ? "white" : "gray",
    },
    "& label.Mui-focused": {
      color: darkMode ? "white" : "gray",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: darkMode ? "white" : "gray",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: darkMode ? "white" : "gray",
      },
      "&:hover fieldset": {
        borderColor: darkMode ? "white" : "gray",
      },
      "&.Mui-focused fieldset": {
        borderColor: darkMode ? "white" : "gray",
      },
    },
  });

  const [file, setFile] = useState("");
  const [input, setInput] = useState({
    id: "",
    userEmail: "",
    adminEmail: "",
    apiKey: "",
    namespace: "",
    activateBot: true,
    flowId: "",
  });

  // const token = useSelector((state) => state.auth);
  const token = "";

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setInput({
      ...input,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("USER INPUT::", input);
    const url = "https://api.notbot.in/super/setup";
    const config = {
      headers: {
        "secret-key": "whats123App",
        "secret-username": "aayush",
        Authorization: `Bearer ${token.loginToken.access_token}`,
      },
    };
    const data = {
      _id: input.id,
      users: [input.userEmail],
      admin: input.adminEmail,
      "360-api-key": input.apiKey,
      namespace: input.namespace,
      activate_bot: input.activateBot,
      flow_id: input.flowId,
    };
    try {
      await axios.post(url, data, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              {/* <div className="formInput">
                <label htmlFor="file">
                  Image <ImageIcon className="icon" />{" "}
                </label>
                <input
                  type="file"
                  name=""
                  id="file"
                  style={{
                    display: "none",
                    cursor: "pointer",
                  }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div> */}
              {/* ...... */}
              <CssTextField
                name="id"
                value={input.id}
                onChange={handleChange}
                id="outlined-basic"
                label="ID"
                type="text"
                required
                variant="outlined"
                className={darkMode ? "" : ""}
                autoComplete="off"
              />
              <CssTextField
                name="userEmail"
                value={input.userEmail}
                onChange={handleChange}
                id="outlined-basic"
                label="User Email"
                type="email"
                variant="outlined"
                className=" text-field"
                autoComplete="off"
              />
              <CssTextField
                name="adminEmail"
                value={input.adminEmail}
                onChange={handleChange}
                id="outlined-basic"
                label="Admin Email"
                required
                type="email"
                variant="outlined"
                className=" text-field"
                autoComplete="off"
              />
              <CssTextField
                name="apiKey"
                value={input.apiKey}
                onChange={handleChange}
                id="outlined-basic"
                label="360 API Key"
                type="text"
                required
                variant="outlined"
                className=" text-field"
                autoComplete="off"
              />
              <CssTextField
                name="namespace"
                value={input.namespace}
                onChange={handleChange}
                id="outlined-basic"
                required
                label="Namespace"
                type="text"
                variant="outlined"
                className=" text-field"
                autoComplete="off"
              />
              {/* activated bot field (boolean) */}
              <div className="flex justify-start w-[95%] ">
                <FormControlLabel
                  control={
                    <Checkbox
                      type="checkbox"
                      name="activateBot"
                      value={input.activateBot}
                      onChange={handleChange}
                      className="text-field"
                    />
                  }
                  label="Activate Bot"
                  className="text-field"
                />
              </div>
              <CssTextField
                name="flowId"
                value={input.flowId}
                onChange={handleChange}
                id="outlined-basic"
                label="Flow ID"
                type="text"
                variant="outlined"
                className=" text-field"
                autoComplete="off"
              />
              <Button type="submit" variant="contained">
                Create User
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
