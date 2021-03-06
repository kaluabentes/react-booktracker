import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const PROP_TYPES = {
  children: PropTypes.node.isRequired,
};

export default function BookGrid({ children }) {
  return <div className={styles.container}>{children}</div>;
}

BookGrid.propTypes = PROP_TYPES;
