import React from 'react';
import './DevelopersList.css';
import searchImage from '../resources/search-24px.svg';
import avatar from '../resources/account_circle-24px.svg';

class DevelopersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      developers: [],
      searchText: '',
    };
  }

  componentDidMount() {
    this.fetchAllDevelopers();
  }

  fetchAllDevelopers() {
    fetch(`/api/developers`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ developers: data });
      });
  }

  updateSearchText = (event) => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    console.log(this.state.developers);
    console.log(this.state.searchText);
    return (
      <div>
        <div className="main-heading">Explore developer profiles</div>
        <hr className="hrule" />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for username"
            className="search-input"
            value={this.state.searchText}
            onChange={this.updateSearchText}
          />
          <img src={searchImage} height="50px" width="50px" alt="magnifying glass logo" className="search-logo" />
        </div>
        <div className="developer-container">
          <div className="developer-entry">
            <img src={avatar} height="100px" width="100px" alt="user avatar" className="developer-avatar" />
            <span className="developer-avatar-name">gcnit</span>
            <span className="developer-avatar-arrow">&#8599;</span>
          </div>
        </div>
        <hr className="hrule" />
        <div className="add-dev-msg">Could not find what you were looking for?</div>
        <div className="add-dev-btn-wrapper">
          <input id="open-button" type="button" value="Add developer info" className="add-dev-btn" />
        </div>
      </div>
    );
  }
}

export default DevelopersList;
