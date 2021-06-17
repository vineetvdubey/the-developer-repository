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
    this.state = {
      githubId: '',
      linkedinId: '',
      codechefId: '',
      hackerrankId: '',
      twitterId: '',
      mediumId: '',
      errorMessage: null,
    };
  }

  postAddDeveloper = () => {
    fetch(`/api/developers`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        github_id: this.state.githubId,
        linkedin_id: this.state.linkedinId,
        codechef_id: this.state.codechefId,
        hackerrank_id: this.state.hackerrankId,
        twitter_id: this.state.twitterId,
        medium_id: this.state.mediumId,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          this.props.fetchAllDevelopers();
          this.closeModal();
        } else if (res.status === 400) {
          throw new Error('Invalid GitHub user ID. Try again.');
        } else {
          throw new Error('Unexpected Error - Please try again later.');
        }
      })
      .catch((e) => {
        this.setState({ errorMessage: e.message });
      });
  };

  updateInputText = (event) => {
    this.setState({ [event.target.name]: event.target.value, errorMessage: null });
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.githubId.trim() === '') {
      this.setState({ errorMessage: 'GitHub user ID is mandatory.' });
    } else {
      this.postAddDeveloper();
    }
  };

  closeModal = () => {
    this.setState({
      githubId: '',
      linkedinId: '',
      codechefId: '',
      hackerrankId: '',
      twitterId: '',
      mediumId: '',
      errorMessage: null,
    });
    this.props.onClose();
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <>
        <div className="modal" aria-hidden="true">
          <div className="modal-title-container">
            <span className="modal-title">Add developer profile</span>
            <span className="modal-cross" onClick={this.closeModal} aria-hidden="true">
              &times;
            </span>
          </div>
          <hr className="hrule-modal" />
          <form onSubmit={this.submitHandler}>
            <div className="profile-container">
              <FormInput src={GithubLogo} label="Github*" name="githubId" onChange={this.updateInputText} />
              <FormInput src={LinkedinLogo} label="Linkedin" name="linkedinId" onChange={this.updateInputText} />
              <FormInput src={CodechefLogo} label="Codechef" name="codechefId" onChange={this.updateInputText} />
              <FormInput src={HackerrankLogo} label="Hackerrank" name="hackerrankId" onChange={this.updateInputText} />
              <FormInput src={TwitterLogo} label="Twitter" name="twitterId" onChange={this.updateInputText} />
              <FormInput src={MediumLogo} label="Medium" name="mediumId" onChange={this.updateInputText} />
            </div>
            <div className="error-div">{this.state.errorMessage}</div>
            <hr className="hrule-modal" />
            <div className="modal-footer-container">
              <input type="button" value="Cancel" className="modal-cancel-btn" onClick={this.closeModal} />
              <input type="submit" value="Submit" className="modal-submit-btn" />
            </div>
          </form>
        </div>
        <div className="modal-overlay" />
      </>
    );
  }
}

AddDevModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchAllDevelopers: PropTypes.func.isRequired,
};

export default AddDevModal;
