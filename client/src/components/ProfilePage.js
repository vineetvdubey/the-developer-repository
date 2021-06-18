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
    // this.setState({
    //   data: {
    //     id: 'vineetvdubey',
    //     avatar_url: 'https://avatars.githubusercontent.com/u/35378726?v=4',
    //     name: 'Vineet Dubey',
    //     company: 'Kuliza Technologies',
    //     blog: 'https://vineetvdubey.github.io',
    //     location: 'India',
    //     email: '',
    //     bio: 'Software Engineer, workaholic, gamer !!',
    //     github_id: 'vineetvdubey',
    //     linkedin_id: 'vineetvdubey',
    //     codechef_id: '',
    //     hackerrank_id: '',
    //     twitter_id: 'vineetvdubey',
    //     medium_id: '',
    //     repos: [
    //       {
    //         name: 'chota-url',
    //         html_url: 'https://github.com/vineetvdubey/chota-url',
    //         description:
    //           'A URL shortening app with backend in NodeJS + express.js and frontend with vanilla html/css/js',
    //         updated_at: '2021-06-05T17:04:14Z',
    //       },
    //       {
    //         name: 'htmlcss-component-library',
    //         html_url: 'https://github.com/vineetvdubey/htmlcss-component-library',
    //         description: 'An HTML/CSS project covering basic concepts.',
    //         updated_at: '2021-05-22T11:02:17Z',
    //       },
    //       {
    //         name: 'htmlcss-personal-resume',
    //         html_url: 'https://github.com/vineetvdubey/htmlcss-personal-resume',
    //         description: 'Personal resume website built using vanilla HTML/CSS',
    //         updated_at: '2021-05-22T12:07:26Z',
    //       },
    //       {
    //         name: 'QuizAppJSCli',
    //         html_url: 'https://github.com/vineetvdubey/QuizAppJSCli',
    //         description: 'A command-line based quiz application written in JS.',
    //         updated_at: '2021-05-02T05:39:15Z',
    //       },
    //       {
    //         name: 'SimpleSearch',
    //         html_url: 'https://github.com/vineetvdubey/SimpleSearch',
    //         description: 'A simple indexing exercise.',
    //         updated_at: '2019-08-20T18:24:23Z',
    //       },
    //       {
    //         name: 'the-developer-repository',
    //         html_url: 'https://github.com/vineetvdubey/the-developer-repository',
    //         description:
    //           'A platform where anyone can create their developer profile. Created using NodeJS backend + ReactJS frontend.',
    //         updated_at: '2021-06-18T05:39:29Z',
    //       },
    //       {
    //         name: 'utility-apps-ui',
    //         html_url: 'https://github.com/vineetvdubey/utility-apps-ui',
    //         description:
    //           'A simple website using vanilla HTML/CSS/JS implementing various utility tools and converters.',
    //         updated_at: '2021-05-31T08:53:22Z',
    //       },
    //       {
    //         name: 'UtilityAppsJSCli',
    //         html_url: 'https://github.com/vineetvdubey/UtilityAppsJSCli',
    //         description: 'Multiple command-line based mini applications written in JS.',
    //         updated_at: '2021-05-02T05:40:07Z',
    //       },
    //       {
    //         name: 'vineetvdubey',
    //         html_url: 'https://github.com/vineetvdubey/vineetvdubey',
    //         description: 'Config files for my GitHub profile.',
    //         updated_at: '2021-05-02T05:35:20Z',
    //       },
    //       {
    //         name: 'vineetvdubey.github.io',
    //         html_url: 'https://github.com/vineetvdubey/vineetvdubey.github.io',
    //         description: 'Profile page',
    //         updated_at: '2021-05-02T08:03:57Z',
    //       },
    //     ],
    //   },
    // });
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
              <div>
                <IconLink href="" src={GithubLogo} field={data.github_id} />
                <IconLink href="" src={HackerrankLogo} field={data.hackerrank_id} />
                <IconLink href="" src={CodechefLogo} field={data.codechef_id} />
                <IconLink href="" src={LinkedinLogo} field={data.linkedin_id} />
                <IconLink href="" src={MediumLogo} field={data.medium_id} />
                <IconLink href="" src={TwitterLogo} field={data.twitter_id} />
                <IconLink href="" src={EmailLogo} field={data.email} />
              </div>
              <div>
                {data.location} {data.company} {data.blog}
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
