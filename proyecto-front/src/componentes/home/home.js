import React from "react";
import Menu from "../navbar/navbar";
import './home.css'
import Main from "./main";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="home">
        <Menu />
        <Main/>
        
      </div>
    );
  }
}
