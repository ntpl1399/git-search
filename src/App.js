import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RepositoryList from './components/RepositoryList';
import GitHubService from './services/GitHubService';

const App = () => {
  const [repositories, setRepositories] = useState([]);

  const searchRepositories = async (query) => {
    const repos = await GitHubService.searchRepositories(query);
    setRepositories(repos);
  };

  return (
    <div className="App text-center">
      <h1>Github Repository Search</h1>
      <SearchBar onSearch={searchRepositories} />
      <RepositoryList repositories={repositories} />
    </div>
  );
};

export default App;
