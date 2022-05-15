import React from "react";
// ICONS
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import RecentActorsRoundedIcon from "@mui/icons-material/RecentActorsRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
// CSS
import "./widget.scss";

const Widget = ({ type }) => {
  // Dynamic showing logic
  let data;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isTotal: true,
        link: "See all users",
        icon: (
          <PersonRoundedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(225, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "recent":
      data = {
        title: "RECENT USERS",
        isTotal: true,
        link: "See all users",
        icon: (
          <RecentActorsRoundedIcon
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "stats":
      data = {
        title: "STATISTICS",
        isTotal: false,
        link: "Explore more",
        icon: (
          <TimelineRoundedIcon
            className="icon"
            style={{
              color: "green",
              backgroundColor: "rgba(0, 128, 0, 0.2 )",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">2159</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive ">
          <KeyboardArrowUpRoundedIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
