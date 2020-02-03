import React, { Component } from "react";

export default class Page extends Component {
  render() {
    return (
      <div>
        <p>Page Component</p>
        {this.props.children}
      </div>
    );
  }
}
