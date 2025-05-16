import "./index.css";

function Card() {
  return (
    <div className="border-4">
      <div>
        <h2>Movie title</h2>
        <h3>7.8/10</h3>
      </div>
      <div>
        <h2>Image goes here</h2>
      </div>
      <div>
        <p>Description here today</p>
      </div>
    </div>
  );
}

export default Card;
