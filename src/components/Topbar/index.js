import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import "./style.css";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsActiveIcon />
            <div className="topIconBadge">2</div>
          </div>
          <div className="topBarIconContainer">
            <GTranslateIcon />
            <div className="topIconBadge">2</div>
          </div>
          <div className="topBarIconContainer">
            <SettingsIcon />
          </div>
          <img src="" alt="User" className="imageAvatar"></img>
        </div>
      </div>
    </div>
  );
}
