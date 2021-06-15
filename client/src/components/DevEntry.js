import './DevEntry.css';
import PropTypes from 'prop-types';
import defaultAvatar from '../resources/account_circle-24px.svg';

function DevEntry(props) {
  return (
    <a href={`/profile/${props.id}`} target="_blank" rel="noreferrer" className="dev-entry-link">
      <div className="developer-entry">
        <img
          src={props.avatarUrl !== '' ? props.avatarUrl : defaultAvatar}
          height="100px"
          width="100px"
          alt="user avatar"
        />
        <span className="developer-avatar-name">{props.id}</span>
        <span className="developer-avatar-arrow">&#8599;</span>
      </div>
    </a>
  );
}

DevEntry.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default DevEntry;
