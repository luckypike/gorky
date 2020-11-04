import React from "react";
import PropTypes from "prop-types";

import styles from './CommonImage.module.css';

const CommonText = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

CommonText.propTypes = {
  children: PropTypes.node,
};

export default CommonText;
