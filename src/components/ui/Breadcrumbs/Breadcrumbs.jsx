import React from "react";
import Link from "next/link";

function Breadcrumbs({ current, sub, prev, prev_url }) {
  return (
    <div className="container">
    <div className="breadcrumbs">
      <Link className="previous" href="/">
        Home
      </Link>
      
      {sub && (
        <Link href={prev_url} className="previous">
          » {prev}
        </Link>
      )}

       <p className="current"> »   {sub ? sub: current}</p>
    </div>

    </div>
  );
}

export default Breadcrumbs;
