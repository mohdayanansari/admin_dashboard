import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../layouts/navbar/Navbar";
import ImageIcon from "@mui/icons-material/Image";
// css
import "./addNew.scss";

const AddNew = () => {
  const [file, setFile] = useState("");

  console.log(file);

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
            <form>
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
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your name here"
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your name here"
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your name here"
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your name here"
                />
              </div>

              <button type="submit">Create User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
