import './ProfilePage.css';
import React from 'react';
import PropTypes from 'prop-types';
import RepoEntry from './RepoEntry';
import Footer from './Footer';
import defaultAvatar from '../resources/account_circle-24px.svg';
import ProfileExtraInfo from './ProfileExtraInfo';
import PortfolioSites from './PortfolioSites';

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
              <div className="dev-info-name">{data.name ? data.name : data.id}</div>
              <div className="dev-info-bio">{data.bio}</div>
              <PortfolioSites
                github={data.github_id}
                linkedin={data.linkedin_id}
                codechef={data.codechef_id}
                twitter={data.twitter_id}
                medium={data.medium_id}
                hackerrank={data.hackerrank_id}
                email={data.email}
              />
              <ProfileExtraInfo location={data.location} company={data.company} blog={data.blog} />
            </div>
          </span>
        </section>
        <section className="repo-info">
          {data.repos.length > 0 && (
            <>
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
            </>
          )}
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
