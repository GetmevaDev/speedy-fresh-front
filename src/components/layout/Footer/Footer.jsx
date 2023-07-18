import React, { Fragment, useState } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
];

function Footer() {
  const [isActive, setIsActive] = useState(null);

  const handleClick = (menuItem) => {
    setIsActive(isActive === menuItem ? null : menuItem);
  };
  const route = usePathname();
  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__nav}>
        {navItem.map((item) => {
          return (
            <Fragment key={item.id}>
              <li className={styles.nav__item}>
                <Link
                  onClick={() => handleClick(item)}
                  className={
                    route === item.url ? styles.active : styles.nav__link
                  }
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
              {item.SubLink.length > 0 && (
                <ul className={styles.child__list}>
                  {item.SubLink.map((sub_item) => {
                    return (
                      <li key={sub_item.id} className={styles.nav__item}>
                        <Link
                          className={styles.nav__link}
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

      <div className={styles.footer__rights}>
        <div className="container">
          <div className={styles.footer__rights_wrapper}>
            <p>
              © 2023 <span>Speedy Fresh Laundromat</span> All rights reserved
            </p>
            <div className={styles.footer__logo}>
              <div className={styles.footer__logo_wrapper}>
                <img loading="lazy" src="/images/RGM.svg" alt="rgm" />
                <p>
                  Web Design & Digital Marketing by
                  <a href="https://robertgerov.com/" className={styles.rgm}>
                    Robert Gerov Media
                  </a>
                </p>
              </div>

              <Link
                className={styles.accessibility_policy}
                href="/accessibility-policy-and-commitment-statement"
              >
                Accessibility Policy and Commitment Statement
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fixed_btn}>
        <a href="https://speedyfreshlaundromat.curbsidelaundries.com/" className={styles.btn_pickup}>
          Schedule a Pickup
        </a>
        <a href="tel:(718)4900334" className={styles.btn_call}>Click to call</a>
      </div>
    </footer>
  );
}

export default Footer;
