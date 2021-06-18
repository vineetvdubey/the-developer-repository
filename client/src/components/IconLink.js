import './IconLink.css';
import PropTypes from 'prop-types';

function IconLink(props) {
  if (props.field === '') {
    return null;
  }
  return (
    <a href={props.href} className="icon-link">
      <img src={props.src} height="30px" width="30px" alt="user avatar" />
    </a>
  );
}

IconLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.node.isRequired,
  field: PropTypes.string,
};

IconLink.defaultProps = {
  field: '',
};

export default IconLink;
