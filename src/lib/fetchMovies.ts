export async function fetchMovies() {
  const apiKey = process.env.API_KEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/";
  const imageFileSize = "w500";

  if (!apiKey) {
    throw new Error("Missing apiKey");
  }

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODQ3MjE1ZDFkYWNjN2Y2ZWMzZDA5MmJiMDc0NjUwZCIsIm5iZiI6MTc0NzM4OTY4MC4yNTMsInN1YiI6IjY4MjcwY2YwNTgxN2UwMmYyZDZlZmMwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RAJCKbYV9tjgGd7Eow0xKj3I0Fy8pFz-naqnaL1M-lY`,
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
