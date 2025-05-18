import "./index.css";
import { fetchMovies } from "@/lib/fetchMovies";

type Movie = {
  id: number;
  original_title: string;
};
async function Card() {
  const movies: Movie[] = await fetchMovies();
  console.log(movies);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} className="border-4 border-teal p-4 rounded-3xl">
          <h2 className="text-lightgrey text-xl font-bold">
            {movie.original_title}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Card;
