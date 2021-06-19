import './PortfolioSites.css';
import PropTypes from 'prop-types';
import IconLink from './IconLink';
import GithubLogo from '../icons/iconfinder_github_317712.png';
import LinkedinLogo from '../icons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import CodechefLogo from '../icons/codechef-1324440139527402917_32.png';
import HackerrankLogo from '../icons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import TwitterLogo from '../icons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import MediumLogo from '../icons/iconfinder_Circled_Medium_svg5_5279113.png';
import EmailLogo from '../icons/email-24px.svg';

function PortfolioSites(props) {
  return (
    <div className="dev-info-logo-links">
      <IconLink href={`https://github.com/${props.github}`} src={GithubLogo} field={props.github} />
      <IconLink href={`https://www.hackerrank.com/${props.hackerrank}`} src={HackerrankLogo} field={props.hackerrank} />
      <IconLink href={`https://www.codechef.com/users/${props.codechef}`} src={CodechefLogo} field={props.codechef} />
      <IconLink href={`https://www.linkedin.com/in/${props.linkedin}`} src={LinkedinLogo} field={props.linkedin} />
      <IconLink href={`https://medium.com/@${props.medium}`} src={MediumLogo} field={props.medium} />
      <IconLink href={`https://twitter.com/${props.twitter}`} src={TwitterLogo} field={props.twitter} />
      <IconLink href={`mailto:${props.email}`} src={EmailLogo} field={props.email} />
    </div>
  );
}

PortfolioSites.propTypes = {
  github: PropTypes.string.isRequired,
  hackerrank: PropTypes.string.isRequired,
  codechef: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  medium: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PortfolioSites;
