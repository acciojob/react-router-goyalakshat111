import React from "react";
import { Link } from "react-router-dom";
const List = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
};

export default List;
