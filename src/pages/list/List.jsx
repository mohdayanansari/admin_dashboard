import React from "react";
import Datatable from "../../components/datatable/Datatable";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../layouts/navbar/Navbar";
// CSS
import "./list.scss";

const List = () => {
  return (
    <div className="list" >
      <Sidebar />
      <div className="lisContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
