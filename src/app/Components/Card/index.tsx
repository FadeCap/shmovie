import "./index.css";

function Card() {
  return (
    <div className="flex-col text-center p-6 m-4 bg-grey text-lightgrey border-2 border-teal max-w-80 rounded-2xl">
      <div className="flex gap-4">
        <h2>Movie title</h2>
        <h3>7.8/10</h3>
      </div>
      <div className="w-20 h-20 m-4">
        <h2>Image goes here</h2>
      </div>
      <div>
        <p>Description here today</p>
      </div>
    </div>
  );
}

export default Card;
