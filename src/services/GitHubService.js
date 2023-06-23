import axios from 'axios';

const GitHubService = {
  searchRepositories: async (query) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}`        
      );
      return response.data.items;
    } catch (error) {
      console.error('Error fetching repositories:', error);
      return [];
    }
  },
};

export default GitHubService;
