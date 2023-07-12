import React from "react";
import "../Breadcrumbs/breadcrumbs.css";
import Link from "next/link";

function Breadcrumbs({ current, sub }) {
  return (
    <div className="container">
    <div className="breadcrumbs">
      <Link className="previous" href="/">
        Home
      </Link>
      
      {sub && (
        <Link href="/pickup-delivery" className="previous">
          » Pickup & Delivery
        </Link>
      )}

       <p className="current"> »   {sub ? sub: current}</p>
    </div>

    </div>
  );
}

export default Breadcrumbs;
