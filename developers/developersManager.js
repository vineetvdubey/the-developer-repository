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
  sagarjain0907: {
    avatar_url: 'https://avatars.githubusercontent.com/u/20463272?v=4',
    github_id: 'sagarjain0907',
    linkedin_id: '',
    codechef_id: '',
    hackerrank_id: '',
    twitter_id: '',
    medium_id: '',
  },
  vineetvdubey: {
    avatar_url: 'https://avatars.githubusercontent.com/u/35378726?v=4',
    github_id: 'vineetvdubey',
    linkedin_id: 'vineetvdubey',
    codechef_id: 'vineetvdubey',
    hackerrank_id: 'vineetvdubey',
    twitter_id: 'vineetvdubey',
    medium_id: 'vineetvdubey',
  },
  PrafulAnand: {
    avatar_url: 'https://avatars.githubusercontent.com/u/18001096?v=4',
    github_id: 'PrafulAnand',
    linkedin_id: '',
    codechef_id: '',
    hackerrank_id: '',
    twitter_id: '',
    medium_id: '',
  },
  sumedha1308: {
    avatar_url: 'https://avatars.githubusercontent.com/u/25945916?v=4',
    github_id: 'sumedha1308',
    linkedin_id: '',
    codechef_id: '',
    hackerrank_id: '',
    twitter_id: '',
    medium_id: '',
  },
};

const updateAvatar = (id, avatarLink) => {
  developersStore[id].avatar_url = avatarLink;
};

const githubUserUrl = (id) => `https://api.github.com/users/${id}`;

const githubReposUrl = (id) => `${githubUserUrl(id)}/repos`;

const errorObject = (msg) => ({ error: msg });

const fetchGithubUserDetails = (githubLogin) => {
  const url = githubUserUrl(githubLogin);
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        return errorObject('GitHub username is invalid');
      }
      return errorObject('Unexpected server error. Please try again later.');
    });
};

const fetchGithubReposDetails = (githubLogin) => {
  const url = githubReposUrl(githubLogin);
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error(`Unexpected server exception: ${error}`);
      return errorObject('Unexpected server error. Please try again later.');
    });
};

const getAllDevelopers = () =>
  Object.keys(developersStore).map((key) => ({
    id: key,
    avatar_url: developersStore[key].avatar_url,
  }));

const addDeveloper = (developer) => {
  const githubLogin = developer.github_id;
  const userDetailsPromise = fetchGithubUserDetails(githubLogin);
  const resultObj = userDetailsPromise.then((userDetails) => {
    if (userDetails.error) {
      return userDetails;
    }
    const { avatar_url } = userDetails;
    const storeObj = { avatar_url: avatar_url || '', ...developer };
    developersStore[githubLogin] = storeObj;
    return { id: githubLogin };
  });
  return resultObj;
};

const getDeveloper = async (id) => {
  if (developersStore[id]) {
    const [userData, reposData] = await Promise.all([fetchGithubUserDetails(id), fetchGithubReposDetails(id)]);
    const devReposData = reposData.map((item) => {
      const { name, html_url, description, updated_at } = item;
      return { name, html_url, description, updated_at };
    });
    const { avatar_url, name, company, blog, location, email, bio } = userData;
    updateAvatar(id, avatar_url);
    const finalObject = {
      id,
      avatar_url,
      name: name == null ? '' : name,
      company: company == null ? '' : company,
      blog: blog == null ? '' : blog,
      location: location == null ? '' : location,
      email: email == null ? '' : email,
      bio: bio == null ? '' : bio,
      github_id: developersStore[id].github_id,
      linkedin_id: developersStore[id].linkedin_id,
      codechef_id: developersStore[id].codechef_id,
      hackerrank_id: developersStore[id].hackerrank_id,
      twitter_id: developersStore[id].twitter_id,
      medium_id: developersStore[id].medium_id,
      repos: devReposData,
    };
    return finalObject;
  }
  return errorObject('User does not exist');
};

const deleteDeveloper = (id) => {
  delete developersStore[id];
};

module.exports = {
  getAllDevelopers,
  addDeveloper,
  getDeveloper,
  deleteDeveloper,
};
