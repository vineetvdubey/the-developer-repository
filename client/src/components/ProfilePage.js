import './ProfilePage.css';
import React from 'react';
import PropTypes from 'prop-types';
import RepoEntry from './RepoEntry';
import Footer from './Footer';
import defaultAvatar from '../resources/account_circle-24px.svg';
import IconLink from './IconLink';
import GithubLogo from '../icons/iconfinder_github_317712.png';
import LinkedinLogo from '../icons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import CodechefLogo from '../icons/codechef-1324440139527402917_32.png';
import HackerrankLogo from '../icons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import TwitterLogo from '../icons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import MediumLogo from '../icons/iconfinder_Circled_Medium_svg5_5279113.png';
import EmailLogo from '../icons/email-24px.svg';
import LocationIcon from '../icons/location-icon.svg';
import CompanyIcon from '../icons/company-icon.svg';
import BlogIcon from '../icons/blog-icon.svg';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: { repos: [] } };
  }

  fetchDeveloperDetails(id) {
    fetch(`/api/developers/${id}`)
      .then((response) => response.json())
      .then((devData) => {
        this.setState({ data: devData });
      });
  }

  componentDidMount() {
    this.fetchDeveloperDetails(this.props.match.params.id);
  }

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  formatDate = (dateString) => {
    const date = new Date(dateString);
    return `Updated on ${date.getDate()} ${this.months[date.getMonth()]} ${date.getFullYear()}`;
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <section className="profile-header">
          <span className="profile-header-item">The Developer Profile</span>
          <span className="profile-header-item">
            <a href="/" className="header-home-link">
              All Developers
            </a>
          </span>
        </section>
        <section className="dev-info-container">
          <span className="dev-info-avatar">
            <img
              src={data.avatar_url !== '' ? data.avatar_url : defaultAvatar}
              height="400px"
              width="400px"
              alt="user avatar"
            />
          </span>
          <span>
            <div className="dev-info">
              <div className="dev-info-name">{data.name}</div>
              <div className="dev-info-bio">{data.bio}</div>
              <div className="dev-info-logo-links">
                <IconLink href="" src={GithubLogo} field={data.github_id} />
                <IconLink href="" src={HackerrankLogo} field={data.hackerrank_id} />
                <IconLink href="" src={CodechefLogo} field={data.codechef_id} />
                <IconLink href="" src={LinkedinLogo} field={data.linkedin_id} />
                <IconLink href="" src={MediumLogo} field={data.medium_id} />
                <IconLink href="" src={TwitterLogo} field={data.twitter_id} />
                <IconLink href="" src={EmailLogo} field={data.email} />
              </div>
              <div className="dev-info-loc">
                <div className="align-info-sec">
                  <img src={LocationIcon} height="16px" width="16px" alt="location icon" className="loc-icon" />
                  <span className="loc-info">{data.location}</span>
                  <img src={CompanyIcon} height="16px" width="16px" alt="company icon" className="loc-icon" />
                  <span className="loc-info">{data.company}</span>
                </div>
                <div className="align-info-sec blog-link">
                  <img src={BlogIcon} height="16px" width="16px" alt="blog icon" className="loc-icon" />
                  <a href={data.blog} target="_blank" rel="noreferrer" className="loc-info">
                    {data.blog}
                  </a>
                </div>
              </div>
            </div>
          </span>
        </section>
        <section className="repo-info">
          <div className="repo-info-title">Github repositories</div>
          {data.repos
            .sort((r1, r2) => new Date(r2.updated_at) - new Date(r1.updated_at))
            .slice(0, 20)
            .map((repo) => (
              <div key={repo.name}>
                <hr className="hrule-r" />
                <RepoEntry
                  name={repo.name}
                  htmlUrl={repo.html_url}
                  updatedAt={this.formatDate(repo.updated_at)}
                  description={repo.description}
                />
              </div>
            ))}
        </section>
        <Footer />
      </>
    );
  }
}

ProfilePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProfilePage;
