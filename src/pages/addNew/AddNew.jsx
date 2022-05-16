import React, { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../layouts/navbar/Navbar";
import ImageIcon from "@mui/icons-material/Image";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
import axios from "axios";
import { DarkModeContext } from "../../context/darkModeContext";
// css
import "./addNew.scss";

const AddNew = () => {
  const { darkMode } = useContext(DarkModeContext);

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
    console.log("USER INPUT::", input);
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
          <div className="right pr-[50px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[5px]">
              <div className="formInput">
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
              </div>
              {/* ...... */}
              <div className="formInput relative my-4 border-b-2 focus-within:border-blue-500">
                <label
                  htmlFor="id"
                  className="absolute top-0 -z-1 duration-300 origin-0"
                >
                  ID
                </label>
                <input
                  type="text"
                  name="id"
                  id="id"
                  value={input.id}
                  onChange={handleChange}
                  placeholder="Enter your ID"
                  className="pl-[20px] block w-full appearance-none focus:outline-none bg-transparent"
                />
              </div>
              <div className="formInput relative my-4 border-b-2 focus-within:border-blue-500">
                <label
                  htmlFor="id"
                  className="absolute top-0 -z-1 duration-300 origin-0"
                >
                  User Email
                </label>
                <input
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  value={input.userEmail}
                  onChange={handleChange}
                  placeholder="Enter the user email"
                  className="pl-[85px] block w-full appearance-none focus:outline-none bg-transparent"
                />
              </div>
              <div className="formInput relative my-4 border-b-2 focus-within:border-blue-500">
                <label
                  htmlFor="id"
                  className="absolute top-0 -z-1 duration-300 origin-0"
                >
                  Admin Email
                </label>
                <input
                  type="email"
                  name="adminEmail"
                  id="adminEmail"
                  value={input.adminEmail}
                  onChange={handleChange}
                  placeholder="Enter the admin email"
                  className="pl-[95px] block w-full appearance-none focus:outline-none bg-transparent"
                />
              </div>
              <div className="formInput relative my-4 border-b-2 focus-within:border-blue-500">
                <label
                  htmlFor="id"
                  className="absolute top-0 -z-1 duration-300 origin-0"
                >
                  Api Key
                </label>
                <input
                  type="text"
                  name="apiKey"
                  id="apiKey"
                  value={input.apiKey}
                  onChange={handleChange}
                  placeholder="Enter the api key"
                  className="pl-[60px] block w-full appearance-none focus:outline-none bg-transparent"
                />
              </div>
              <div className="formInput relative my-4 border-b-2 focus-within:border-blue-500">
                <label
                  htmlFor="id"
                  className="absolute top-0 -z-1 duration-300 origin-0"
                >
                  Namespace
                </label>
                <input
                  type="text"
                  name="namespace"
                  id="namespace"
                  value={input.namespace}
                  onChange={handleChange}
                  placeholder="Enter the namespace"
                  className="pl-[90px] block w-full appearance-none focus:outline-none bg-transparent"
                />
              </div>
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
              <div className="formInput relative my-4 border-b-2 focus-within:border-blue-500">
                <label
                  htmlFor="id"
                  className="absolute top-0 -z-1 duration-300 origin-0"
                >
                  Flow Id
                </label>
                <input
                  type="text"
                  name="flowId"
                  id="flowId"
                  value={input.flowId}
                  onChange={handleChange}
                  placeholder="Enter the flowID"
                  className="pl-[60px] block w-full appearance-none focus:outline-none bg-transparent"
                />
              </div>

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
