import React, { Fragment } from 'react'
import Link from 'next/link';
export const navItem = [
  {
    id: 1,
    title: "Home",
    url: "/",
    SubLink: [],
  },
  {
    id: 2,
    title: "About Us",
    url: "/about-us",
    SubLink: [],
  },
  {
    id: 3,
    title: "Self Service",
    url: "/self-service",
    SubLink: [],
  },
  {
    id: 4,
    title: "Wash & Fold",
    url: "/wash-fold",
    SubLink: [],
  },
  {
    id: 5,
    title: "Pickup & Delivery",
    url: "/pickup-delivery",
    SubLink: [
      {
        id: 1,
        title: "Commercial Laundry Services",
        url: "/commercial-laundry",
      },
    ],
  },

  {
    id: 6,
    title: "Pricing",
    url: "/pricing",
    SubLink: [],
  },
  {
    id: 7,
    title: "Contact us",
    url: "/contact-us",
    SubLink: [],
  },
  {
    id: 8,
    title: "Blog",
    url: "/blog",
    SubLink: [],
  }
];


function BurgerMenu() {
  function removeStopScrolling() {
    document.querySelector("body").classList.remove("stopScrolling");
    const burger = document.querySelector(".burger");
    burger.classList.remove("activ");
  }
  return (
    
    <ul className="nav_mobile" >
            {navItem.map((item) => {
              return (
                <Fragment  key={item.id}>
                <li className="nav__item">
                  <Link
                    onClick={removeStopScrolling}
                    className="nav__link nav__link_mobile"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
                {item.SubLink.length > 0 && (
                  <ul className="child__list">
                    {item.SubLink.map((sub_item) => {
                      return (
                        <li key = {sub_item.id} className="nav__item">
                          <Link
                           onClick={removeStopScrolling}
                            className="nav__link nav__link_mobile"
                            href={item.url + sub_item.url}
                          >
                            {sub_item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
                </Fragment>
              );
            })}
          </ul>
  )
}

export default BurgerMenu
