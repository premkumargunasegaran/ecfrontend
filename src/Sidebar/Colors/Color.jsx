import React from "react";

import "./color.css";
import Input from "../../Component/Input";

function Color({ handleChange }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title color-title">Color</h2>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test2" onChange={handleChange} value="" />
          <span className="checkmark all"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test2"
            onChange={handleChange}
            value="white"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>white
        </label>
      </div>
    </div>
  );
}

export default Color;
