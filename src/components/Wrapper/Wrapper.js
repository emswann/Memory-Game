import React from "react";
import "./Wrapper.css";

import background from "./background.jpg";

const styles = {
  wrapperStyle: {
    backgroundImage: `url(${background})`,
    backgroundSize: `cover`
  }
};

const Wrapper = props => <div className="wrapper" style={styles.wrapperStyle}>{props.children}</div>;

export default Wrapper;
