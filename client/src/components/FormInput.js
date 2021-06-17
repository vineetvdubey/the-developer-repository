import React from 'react';
import './FormInput.css';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile-item">
        <div className="logo-label-outer">
          <img src={this.props.src} height="30px" width="30px" alt="logo" className="logo-img" />
          <span className="logo-label-inner">{this.props.label}</span>
        </div>
        <input className="profile-item-input" />
      </div>
    );
  }
}

FormInput.propTypes = {
  src: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormInput;
