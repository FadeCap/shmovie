export async function fetchMovies() {
  const apiKey = process.env.API_KEY;
  const apiReadAccessToken = process.env.API_READ_ACCESS_TOKEN
  const imageBaseUrl = "https://image.tmdb.org/t/p/";
  const imageFileSize = "w500";

  if (!apiKey) {
    throw new Error("Missing apiKey");
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiReadAccessToken}`,
    },
  };

  const res = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await res.json();
  console.log(data.results);
  return data.results;
}
