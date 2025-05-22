import "./index.css";
import { fetchMovies } from "@/lib/fetchMovies";

type Movie = {
  id: number;
  original_title: string;
  vote_average: number;
  release_date: string;
};
async function Card() {
  const movies: Movie[] = await fetchMovies();
  return (
    <div>
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="flex-col m-4 border-4 border-teal p-4 rounded-3xl text-lightgrey bg-grey"
        >
          <h2 className="text-xl font-bold">{movie.original_title}</h2>

          {movie.vote_average.toFixed(2)}
          <div className="image">
            {
              //TODO: Parse image from API
            }
          </div>
          <div className="">
            {
              //TODO: Unsure if keeping this or making own page for movie details
            }
          </div>
          <div className="text-center p-2">
            <p>{movie.release_date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
