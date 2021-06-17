import React from 'react';
import './AddDevInfo.css';
import PropTypes from 'prop-types';
import AddDevModal from './AddDevModal';

class AddDevInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  render() {
    return (
      <>
        <div className="add-dev-msg">
          {this.props.devListCount > 0 ? 'Could not find what you were looking for?' : 'No developers added yet'}
        </div>
        <div className="add-dev-btn-wrapper">
          <input
            id="open-button"
            type="button"
            onClick={() => this.setState({ show: true })}
            value="Add developer info"
            className="add-dev-btn"
          />
        </div>
        <AddDevModal onClose={() => this.setState({ show: false })} show={this.state.show} />
      </>
    );
  }
}

AddDevInfo.propTypes = {
  devListCount: PropTypes.number.isRequired,
};

export default AddDevInfo;
