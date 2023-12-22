import React from "react";
import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

export default function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <img src={beersImg} alt="BeerImage" className="px-10 pt-10"/>
        <h2 className="px-10 pt-2 text-2xl font-semibold">All Beers</h2>
      </Link>

      <Link to="/randomBeer">
        <img src={randomBeerImg} alt="RandomBeer" className="px-10 pt-10" />
        <h2 className="px-10 pt-2 text-2xl font-semibold">Random Beer</h2>
      </Link>

      <Link to="/newBeer">
        <img src={newBeerImg} alt="NewBeer" className="px-10 pt-10" />
        <h2 className="px-10 pt-2 text-2xl font-semibold">Create a Beer</h2>
      </Link>
    </div>
  );
}
