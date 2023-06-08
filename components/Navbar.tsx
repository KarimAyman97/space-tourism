import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/components/navbar.module.scss";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";

const links = [
  { href: "/", name: "HOME" },
  { href: "/destination", name: "DESTINATION" },
  { href: "/crew", name: "CREW" },
  { href: "/technology", name: "TECHNOLOGY" },
  // Add more links as needed
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeUrl = useRouter().pathname;

  return (
    <nav className={styles.navbar}>
      <figure className={styles.logo}>
        <img src="/svgs/logo.svg" />
      </figure>
      <hr className={styles.line} />
      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 600 }}
        classNames={{
          enter: styles.menuAnimEnter,
          enterDone: styles.menuAnimEnterDone,
          exit: styles.menuAnimExit,
          exitActive: styles.menuAnimExitActive,
        }}
      >
        <ul className={styles.menu}>
          {links.map((item, i) => (
            <li className={styles.menuItem} key={i}>
              <Link
                href={item.href}
                className={`${styles.menuItemLink} ${
                  activeUrl === item.href ? styles.menuItemActive : ""
                }`}
              >
                <span className="number">{i.toString().padStart(2, "0")}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </CSSTransition>
      <CSSTransition
        in={isOpen}
        timeout={0}
        classNames={{
          enter: styles.hamburgerAnimEnter,
          enterDone: styles.hamburgerAnimEnterDone,
          exit: styles.hamburgerAnimExit,
          exitDone: styles.hamburgerAnimExitDone,
        }}
      >
        <button
          type="button"
          className={styles.hamburger}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className={styles.hamburgerLine}></div>
          ))}
        </button>
      </CSSTransition>
    </nav>
  );
};

export default Navbar;
