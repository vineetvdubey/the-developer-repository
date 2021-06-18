import './RepoEntry.css';
import PropTypes from 'prop-types';

function RepoEntry(props) {
  return (
    <div className="repo-entry">
      <span className="repo-name">
        <a href={props.htmlUrl} target="_blank" rel="noreferrer">
          {props.name}&nbsp;&#8599;
        </a>
      </span>
      <span className="repo-update-at">{props.updatedAt}</span>
      <div className="repo-description">{props.description}</div>
    </div>
  );
}

RepoEntry.propTypes = {
  name: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  description: PropTypes.string,
};

RepoEntry.defaultProps = {
  description: '',
};

export default RepoEntry;
