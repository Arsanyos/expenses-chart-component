import React from "react";
import logo from "../assests/logo.svg";
function Chart() {
  return (
    <div className="chart-container">
      <div className="chart-header">
        <div className="balance-container">
            <h5>My balance</h5>
            <h2>$921.48</h2>
        </div>
        <div className="logo-container">
            <img className="logo" src={logo} alt="logo" height="50px" width="50px"/>
        </div>
      </div>
      <div className="expenss-component"></div>
    </div>
  );
}
export default Chart;
