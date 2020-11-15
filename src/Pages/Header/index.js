import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="app-name">
          <p>
            iCloud <b style={{ color: "#007aff" }}>Reminders</b>
          </p>
        </div>
        <div className="user-name dropdown">
          <a className="dropbtn ">
            <span style={{ color: "#007aff" }}> Pham Tuan Vu</span>
          </a>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
