import HttpRequests from "../plugins/httpRequests";

// key hardcoded for testing
const movieSearchRepository = async (name: string, page: string) => {
  const key = "7ff9c434c3msh0a00585276a714fp1cbeb2jsn1be6f5a28fb8";
  const host = "movie-database-imdb-alternative.p.rapidapi.com";
  const useQueryString = "true";
  const url = `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${name}&page=${page}&r=json`;
  const httpRequests = new HttpRequests();
  const httpRequestsResponse = await httpRequests.get(url, {
    "x-rapidapi-key": key,
    "x-rapidapi-host": host,
    useQueryString: useQueryString,
  });

  const movies = httpRequestsResponse.data;
  return movies;
};

export default movieSearchRepository;
