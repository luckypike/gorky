import React from "react";
import PropTypes from "prop-types";

const CommonText = ({ body }) => {
  return <div>{body}</div>;
};

CommonText.propTypes = {
  body: PropTypes.node,
};

export default CommonText;
