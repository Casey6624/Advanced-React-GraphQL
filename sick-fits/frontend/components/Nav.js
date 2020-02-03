import Link from "next/link";

const Nav = props => {
  return (
    <div>
      <Link>
        <a href="/index">Home</a>
      </Link>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <p>ss</p>
    </div>
  );
};

export default Nav;
