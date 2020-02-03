// Function components don't require import React, NextJS takes care of this
import Link from "next/link";

const Sell = props => {
  return (
    <div>
      <p>Sell</p>
      <Link>
        <a href="/index">Home</a>
      </Link>
    </div>
  );
};

export default Sell;
