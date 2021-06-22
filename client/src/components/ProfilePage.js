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
    this.setState({
      data: {
        id: 'vineetvdubey',
        avatar_url: 'https://avatars.githubusercontent.com/u/35378726?v=4',
        name: 'Vineet Dubey',
        company: 'Kuliza Technologies',
        blog: 'https://vineetvdubey.netlify.app/',
        location: 'India',
        email: '',
        bio: 'Software Engineer, workaholic, gamer !!',
        github_id: 'vineetvdubey',
        linkedin_id: 'vineetvdubey',
        codechef_id: 'vineetvdubey',
        hackerrank_id: 'vineetvdubey',
        twitter_id: 'vineetvdubey',
        medium_id: 'vineetvdubey',
        repos: [
          {
            name: 'chota-url',
            html_url: 'https://github.com/vineetvdubey/chota-url',
            description:
              'A URL shortening app with backend in NodeJS + express.js and frontend with vanilla html/css/js',
            updated_at: '2021-06-05T17:04:14Z',
          },
          {
            name: 'htmlcss-component-library',
            html_url: 'https://github.com/vineetvdubey/htmlcss-component-library',
            description: 'An HTML/CSS project covering basic concepts.',
            updated_at: '2021-05-22T11:02:17Z',
          },
          {
            name: 'htmlcss-personal-resume',
            html_url: 'https://github.com/vineetvdubey/htmlcss-personal-resume',
            description: 'Personal resume website built using vanilla HTML/CSS',
            updated_at: '2021-05-22T12:07:26Z',
          },
          {
            name: 'QuizAppJSCli',
            html_url: 'https://github.com/vineetvdubey/QuizAppJSCli',
            description: 'A command-line based quiz application written in JS.',
            updated_at: '2021-05-02T05:39:15Z',
          },
          {
            name: 'SimpleSearch',
            html_url: 'https://github.com/vineetvdubey/SimpleSearch',
            description: 'A simple indexing exercise.',
            updated_at: '2019-08-20T18:24:23Z',
          },
          {
            name: 'the-developer-repository',
            html_url: 'https://github.com/vineetvdubey/the-developer-repository',
            description:
              'A platform where anyone can create their developer profile. Created using NodeJS backend + ReactJS frontend.',
            updated_at: '2021-06-21T14:44:53Z',
          },
          {
            name: 'utility-apps-ui',
            html_url: 'https://github.com/vineetvdubey/utility-apps-ui',
            description:
              'A simple website using vanilla HTML/CSS/JS implementing various utility tools and converters.',
            updated_at: '2021-05-31T08:53:22Z',
          },
          {
            name: 'UtilityAppsJSCli',
            html_url: 'https://github.com/vineetvdubey/UtilityAppsJSCli',
            description: 'Multiple command-line based mini applications written in JS.',
            updated_at: '2021-05-02T05:40:07Z',
          },
          {
            name: 'vineetvdubey',
            html_url: 'https://github.com/vineetvdubey/vineetvdubey',
            description: 'Config files for my GitHub profile.',
            updated_at: '2021-05-02T05:35:20Z',
          },
          {
            name: 'vineetvdubey.github.io',
            html_url: 'https://github.com/vineetvdubey/vineetvdubey.github.io',
            description: 'Profile page',
            updated_at: '2021-05-02T08:03:57Z',
          },
        ],
      },
    });
    // this.fetchDeveloperDetails(this.props.match.params.id);
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
