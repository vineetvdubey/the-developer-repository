import './ProfileExtraInfo.css';
import PropTypes from 'prop-types';
import LocationIcon from '../icons/location-icon.svg';
import CompanyIcon from '../icons/company-icon.svg';
import BlogIcon from '../icons/blog-icon.svg';

function ProfileExtraInfo(props) {
  return (
    <div className="dev-info-loc">
      <div className="align-info-sec">
        {props.location && (
          <>
            <img src={LocationIcon} height="16px" width="16px" alt="location icon" className="loc-icon" />
            <span className="loc-info">{props.location}</span>
          </>
        )}
        {props.company && (
          <>
            <img src={CompanyIcon} height="16px" width="16px" alt="company icon" className="loc-icon" />
            <span className="loc-info">{props.company}</span>
          </>
        )}
      </div>
      <div className="align-info-sec blog-link">
        {props.blog && (
          <>
            <img src={BlogIcon} height="16px" width="16px" alt="blog icon" className="loc-icon" />
            <a href={props.blog} target="_blank" rel="noreferrer" className="loc-info">
              {props.blog}
            </a>
          </>
        )}
      </div>
    </div>
  );
}

ProfileExtraInfo.propTypes = {
  location: PropTypes.string,
  company: PropTypes.string,
  blog: PropTypes.string,
};

ProfileExtraInfo.defaultProps = {
  location: '',
  company: '',
  blog: '',
};

export default ProfileExtraInfo;
