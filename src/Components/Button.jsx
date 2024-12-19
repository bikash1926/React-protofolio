import React from 'react';
import PropTypes from 'prop-types';  // Import PropTypes

const ButtonPrimary = ({ href, target = "_self", label, icon, classes = "" }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-primary ${classes}`}
      >
        {label}
        {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary ${classes}`}>
        {label}
        {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
      </button>
    );
  }
};

// PropTypes definition
ButtonPrimary.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  classes: PropTypes.string,
};

const ButtonOutline = ({ href, target = "_self", label, icon, classes = "" }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-Outline ${classes}`}
      >
        {label}
        {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-Outline ${classes}`}>
        {label}
        {icon && <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>}
      </button>
    );
  }
};

// PropTypes definition
ButtonOutline.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };  // Export both components as named exports

