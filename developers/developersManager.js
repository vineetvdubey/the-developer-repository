const axios = require('axios');

const developersStore = {
  gcnit: {
    avatar_url: 'https://avatars.githubusercontent.com/u/4833751?v=4',
    github_id: 'gcnit',
    linkedin_id: 'gcnit',
    codechef_id: 'gc_nit',
    hackerrank_id: 'gcnit',
    twitter_id: 'gc_nit',
    medium_id: 'gc_nit',
  },
  vineetvdubey: {
    avatar_url: 'https://avatars.githubusercontent.com/u/35378726?v=4',
    github_id: 'vineetvdubey',
    linkedin_id: 'vineetvdubey',
    codechef_id: '',
    hackerrank_id: '',
    twitter_id: 'vineetvdubey',
    medium_id: '',
  },
};

const updateAvatar = (id, avatarLink) => {
  developersStore[id]['avatar_url'] = avatarLink;
};

const githubUserUrl = (id) => {
  return `https://api.github.com/users/${id}`;
};

const githubReposUrl = (id) => {
  return `${githubUserUrl(id)}/repos`;
};

const errorObject = (msg) => {
  return { error: msg };
};

const fetchGithubUserDetails = (githubLogin) => {
  const url = githubUserUrl(githubLogin);
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response.status === 404) {
        return errorObject('GitHub username is invalid');
      } else {
        return errorObject('Unexpected server error. Please try again later.');
      }
    });
};

const fetchGithubReposDetails = (githubLogin) => {
  const url = githubReposUrl(githubLogin);
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(`Unexpected server exception: ${error}`);
      return errorObject('Unexpected server error. Please try again later.');
    });
};

const getAllDevelopers = () => {
  return Object.keys(developersStore).map((key) => {
    return { id: key, avatar_url: developersStore[key]['avatar_url'] };
  });
};

const addDeveloper = (developer) => {
  const githubLogin = developer['github_id'];
  const userDetailsPromise = fetchGithubUserDetails(githubLogin);
  const resultObj = userDetailsPromise.then((userDetails) => {
    if (userDetails.error) {
      return userDetails;
    } else {
      const avatar_url = userDetails['avatar_url'];
      const storeObj = { avatar_url: avatar_url ? avatar_url : '', ...developer };
      developersStore[githubLogin] = storeObj;
      return { id: githubLogin };
    }
  });
  return resultObj;
};

const getDeveloper = async (id) => {
  if (developersStore[id]) {
    let [userData, reposData] = await Promise.all([fetchGithubUserDetails(id), fetchGithubReposDetails(id)]);
    const devReposData = reposData.map((item) => {
      const { name, html_url, description, updated_at } = item;
      return { name, html_url, description, updated_at };
    });
    const { avatar_url, name, company, blog, location, email, bio } = userData;
    updateAvatar(id, avatar_url);
    const finalObject = {
      id: id,
      avatar_url: avatar_url,
      name: name,
      company: company,
      blog: blog,
      location: location,
      email: email,
      bio: bio,
      github_id: developersStore[id]['github_id'],
      linkedin_id: developersStore[id]['linkedin_id'],
      codechef_id: developersStore[id]['codechef_id'],
      hackerrank_id: developersStore[id]['hackerrank_id'],
      twitter_id: developersStore[id]['twitter_id'],
      medium_id: developersStore[id]['medium_id'],
      repos: devReposData,
    };
    return finalObject;
  } else {
    return errorObject('User does not exist');
  }
};

const deleteDeveloper = (id) => {
  delete developersStore[id];
};

module.exports = { getAllDevelopers, addDeveloper, getDeveloper, deleteDeveloper };
