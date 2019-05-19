import React, { Component } from "react";

import "./Button.css";

class Button extends Component {
  render() {
    return (
      <div className="btnContainer">
        <button
          className="nextBtn"
          type="button"
          onClick={this.props.onNext}
          style={{ float: "right", cursor: "pointer" }}
          disabled={this.props.disbaleNext}
        >
          Next
        </button>
        <button
          className="prevBtn"
          type="button"
          onClick={this.props.onPrevious}
          style={{ float: "right", cursor: "pointer" }}
          disabled={this.props.disablePrev}
        >
          Previous
        </button>
      </div>
    );
  }
}

export default Button;
