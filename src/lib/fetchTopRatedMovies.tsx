const fetchAllPages = async () => {
  const totalPages = 5;
  const apiToken = process.env.API_READ_ACCESS_TOKEN;

  if (!apiToken) {
    throw new Error(
      "API_READ_ACCESS_TOKEN is not defined in environment variables.",
    );
  }

  const topRatedUrl =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  };

  const fetchPage = async (page: number) => {
    const response = await fetch(`${topRatedUrl}&page=${page}`, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch page ${page}: ${response.status}`);
    }

    return response.json();
  };

  const pageRequests = [];

  for (let page = 1; page <= totalPages; page++) {
    pageRequests.push(
      fetchPage(page).catch((error) => {
        console.error(error.message);
        return null;
      }),
    );
  }

  const results = await Promise.all(pageRequests);

  const successfulData = results.filter((data) => data !== null);

  // TMDB returns data in `results`, not `items`
  return successfulData.flatMap((data) => data.results || []);
};

// ✅ Export the function, not the result
export default fetchAllPages;
