import React from "react";
// Components
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import Navbar from "../../layouts/navbar/Navbar";
// CSS
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="recent" />
          <Widget type="stats" />
          <Widget type="user" />
        </div>
        {/* ------CHARTS----- */}
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        {/* -----LIST_CONTAINER------ */}
        <div className="listContainer">
          <div className="listTitle">Latest Requests</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
