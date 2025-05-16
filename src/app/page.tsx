import "./index.css";
import Card from "./Components/Card";

export default function HomePage() {
  return (
    <main className="flex text-center justify-center m-4 p-4">
      <div className="">
        <Card />
        <h1 className="text-lightgrey">O R</h1>
        <Card />
      </div>
    </main>
  );
}
