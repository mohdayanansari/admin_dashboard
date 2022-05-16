import React, { useEffect } from "react";
// Components
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import Navbar from "../../layouts/navbar/Navbar";
// CSS
import "./home.scss";
// redux
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth);

  useEffect(() => {
    isLogin.loginToken === null && navigate("/login");
  }, [isLogin, navigate]);

  console.log(isLogin);
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
