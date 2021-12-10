import * as React from "react";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import {Link} from 'react-router-dom';

/*Custom Styles*/
import "../Sidebar/style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
      <div className="sidebarMenu">
      <span className="logo">ReactAdmin</span>
          <h3 className="sidebarTitle">User Mangement</h3>
          <ul className="sidebarList active">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon"/><Link to="/admin/all" style={{ textDecoration: 'none', color: 'black' }} >Admins</Link>
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/><Link style={{ textDecoration: 'none', color: 'black' }}  to="/admin/add">Add Admin</Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Image Types</h3>
          <ul className="sidebarList">   
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/><Link style={{ textDecoration: 'none', color: 'black' }}  to="/image/type/all"  underline="none">View All</Link>
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/> <Link style={{ textDecoration: 'none', color: 'black' }}  to="/image/type/add" underline="none">Add Image Type</Link>
            </li>
          </ul>
        </div>
        
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Categories</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon"/><Link style={{ textDecoration: 'none', color: 'black' }}  to="/image/category/all">View All</Link>
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/><Link style={{ textDecoration: 'none', color: 'black' }}  to="/image/category/add">Add Image Category</Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Image Size</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon"/>View All
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>Add Image Size
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default Sidebar;
