import "./index.css";
import fetchAllPages from "@/lib/fetchTopRatedMovies";

type Movie = {
  id: number;
  original_title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
};

async function Card() {
  const movies: Movie[] = await fetchAllPages();
  console.log(movies);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="flex flex-col border-4 border-teal p-4 rounded-3xl text-lightgrey bg-grey shadow-lg"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
            className="w-full h-auto rounded-xl mb-4"
          />
          <h2 className="text-xl font-bold mb-1">{movie.original_title}</h2>
          <p className="text-sm text-lightgrey mb-1">
            Rating: {movie.vote_average.toFixed(2)}
          </p>
          <p className="text-sm text-lightgrey text-center">
            Release Date: {movie.release_date}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;
