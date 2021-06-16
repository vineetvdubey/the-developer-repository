import React from 'react';
import './DevelopersList.css';
import searchImage from '../resources/search-24px.svg';
import DevEntry from './DevEntry';
import AddDevInfo from './AddDevInfo';

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

  updateSearchText(event) {
    this.setState({ searchText: event.target.value.trim() });
  }

  render() {
    let developersListAndSearch = '';
    if (this.state.developers.length > 0) {
      developersListAndSearch = (
        <div>
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
            {this.state.developers
              .filter((developer) => developer.id.toLowerCase().includes(this.state.searchText.toLowerCase()))
              .map((developer) => (
                <DevEntry key={developer.id} id={developer.id} avatarUrl={developer.avatar_url} />
              ))}
          </div>
          <hr className="hrule" />
        </div>
      );
    }

    return (
      <>
        <div className="main-heading">Explore developer profiles</div>
        <hr className="hrule" />
        {developersListAndSearch}
        <AddDevInfo devListCount={this.state.developers.length} />
      </>
    );
  }
}

export default DevelopersList;
