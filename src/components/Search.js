import React, { Component } from "react";

import styles from "./Search.module.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  changeHandeler = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className={styles.container}>
        <p>Search What you want</p>
        <div>
          <input
            type="text"
            value={this.state.text}
            onChange={this.changeHandeler}
            placeholder="Search ..."
          />
          <br />
          <br />
          <span>{this.state.text}</span>
        </div>
      </div>
    );
  }
}

export default Search;
