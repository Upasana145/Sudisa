import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LiaAngleDownSolid, LiaAngleLeftSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { logoutHandler } from "../redux/slices/authSlice";
import { initialProjectTypeHandler } from "../redux/slices/projectSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const [masterDropdownVisible, setMasterDropdownVisible] = useState(false);
  const [settingsDropdownVisible, setSettingsDropdownVisible] = useState(false);

  const toggleMasterDropdown = () => {
    setMasterDropdownVisible(!masterDropdownVisible);
  };

  const toggleSettingsDropdown = () => {
    setSettingsDropdownVisible(!settingsDropdownVisible);
  };
  const logout = () => {
    dispatch(logoutHandler());
    dispatch(initialProjectTypeHandler());
  };

  return (
    <div>
      <div className="sidebar">
        <div className="sidebar_header">
          <img src={require("../Images/logo.gif")} />
        </div>
        <div className="sidebar_nav">
          <ul>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li className="drop" onClick={toggleMasterDropdown}>
              <span style={{ cursor: "pointer" }}>Master</span>
              <span
                style={{
                  position: "absolute",
                  top: "6px",
                  right: "12px",
                }}
              >
                {masterDropdownVisible ? (
                  <LiaAngleDownSolid />
                ) : (
                  <LiaAngleLeftSolid />
                )}
              </span>
              {masterDropdownVisible && (
                <ul className="drop_nav">
                  <li>
                    <Link to={"/department"}>Departments</Link>
                  </li>
                </ul>
              )}
            </li>
            {/* <li className="drop" onClick={toggleSettingsDropdown}>
              <span style={{ cursor: "pointer" }}>Settings</span>
              <span style={{ position: "absolute", top: "6px", right: "12px" }}>
                {settingsDropdownVisible ? (
                  <LiaAngleDownSolid />
                ) : (
                  <LiaAngleLeftSolid />
                )}
              </span>
              {settingsDropdownVisible && (
                <ul className="drop_nav">
                  <li>
                    <Link to={"/calibration"}>Start Calibration</Link>
                  </li>
                </ul>
              )}
            </li> */}
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
