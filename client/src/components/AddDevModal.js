import React from 'react';
import './AddDevModal.css';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import GithubLogo from '../icons/iconfinder_github_317712.png';
import LinkedinLogo from '../icons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import CodechefLogo from '../icons/codechef-1324440139527402917_32.png';
import HackerrankLogo from '../icons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import TwitterLogo from '../icons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import MediumLogo from '../icons/iconfinder_Circled_Medium_svg5_5279113.png';

class AddDevModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <>
        <div className="modal" id="modal" aria-hidden="true">
          <div className="modal-title-container">
            <span className="modal-title">Add developer profile</span>
            <span id="close-button" className="modal-cross" onClick={this.props.onClose} aria-hidden="true">
              &times;
            </span>
          </div>
          <hr className="hrule-modal" />
          <form>
            <div className="profile-container">
              <FormInput src={GithubLogo} label="Github*" />
              <FormInput src={LinkedinLogo} label="Linkedin" />
              <FormInput src={CodechefLogo} label="Codechef" />
              <FormInput src={HackerrankLogo} label="Hackerrank" />
              <FormInput src={TwitterLogo} label="Twitter" />
              <FormInput src={MediumLogo} label="Medium" />
            </div>
            <hr className="hrule-modal" />
            <div className="modal-footer-container">
              <input
                id="modal-cancel"
                type="button"
                value="Cancel"
                className="modal-cancel-btn"
                onClick={this.props.onClose}
              />
              <input id="modal-submit" type="button" value="Submit" className="modal-submit-btn" />
            </div>
          </form>
        </div>
        <div className="modal-overlay" id="modal-overlay" />
      </>
    );
  }
}

AddDevModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddDevModal;
