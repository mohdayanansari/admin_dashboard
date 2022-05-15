import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
// ICONS
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
// CSS
import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Something</h1>
        <MoreVertRoundedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total no. of something</p>
        <p className="amount">6565</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quae.
        </p>
        <div className="summary">
          {/* Item */}
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownRoundedIcon fontSize="small" />
              <div className="targetTotal">20</div>
            </div>
          </div>
          {/* Item */}
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpRoundedIcon fontSize="small" />
              <div className="targetTotal">520</div>
            </div>
          </div>
          {/* Item */}
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpRoundedIcon fontSize="small" />
              <div className="targetTotal">756620</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
