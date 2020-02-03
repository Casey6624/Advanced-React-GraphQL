// Function components don't require import React, NextJS takes care of this
import Link from "next/link";

const Home = props => {
  return (
    <div>
      <p>Home</p>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
    </div>
  );
};

export default Home;
