import './ProfilePage.css';
import React from 'react';
import PropTypes from 'prop-types';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
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

  render() {
    return <pre>{JSON.stringify(this.state.data, null, '\t')}</pre>;
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
