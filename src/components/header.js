import React from "react";

const header = () => {
  let styles = {
    margin: "20px",
    textAlign: "center",
    color: "#343434",
    fontWeight: "normal",
    fontFamily: "'Ultra', sans-serif",
    fontSize: "36px",
    lineHeight: "42px",
    textTransform: "uppercase",
    textShadow: "0 2px white, 0 3px #777"
  };

  return <h1 style={styles}> Cricket Trivia</h1>;
};

export default header;
