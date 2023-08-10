"use client";
import React, {  useState } from "react";
import styles from "./Header.module.css";
import Link from "next/link";
// import { fetchData } from '@/components/utils/fetchData'

import Image from "next/image";
import { usePathname } from "next/navigation";
import Burger from "@/components/ui/Burger/Burger";
import BurgerMenu from "@/components/ui/BurgerMenu/BurgerMenu";
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
  // {
  //   id: 8,
  //   title: "Blog",
  //   url: "/blog",
  //   SubLink: [],
  // }
];

function Header() {
  const [isActive, setIsActive] = useState(null);

  const handleClick = (menuItem) => {
    setIsActive(isActive === menuItem ? null : menuItem);
  };

  

  const router = usePathname();
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={router === "/" ? styles.home_navbar : styles.navbar}>
          {router !== "/" && (
            <div className={styles.logo}>
              <Link href="/" className={styles.logo__link}>
                <Image
                  width={141}
                  height={186}
                  src="/images/logo.webp"
                  alt="logo"
                  priority
                />
              </Link>
            </div>
          )}

          <nav>
            <ul className={styles.nav}>
              {navItem.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={
                      item.SubLink.length > 0
                        ? `${styles.nav__item} ${styles.parent_item}`
                        : styles.nav__item
                    }
                  >
                    <Link
                      onClick={() => handleClick(item)}
                      className={
                        router === item.url ? styles.active : styles.nav__link
                      }
                      href={item.url}
                    >
                      {item.title}
                    </Link>
                    {item.SubLink.length > 0 && (
                      <Image
                        className={
                          router === "/"
                            ? styles.home_arrow_down
                            : styles.arrow_down
                        }
                        src="/images/arrow-down.svg"
                        width={6}
                        height={3}
                        alt="arrow"
                      />
                    )}

                    {item.SubLink.length > 0 && (
                      <ul className={styles.child_link}>
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
                  </li>
                );
              })}
            </ul>
          </nav>

          <Burger />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
}

export default Header;
