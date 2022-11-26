import Link from "next/link";
import cn from "classnames";
import sl from "./Nav.module.scss";
import { useRouter } from "next/router";

const links = [
  {
    href: "/",
    text: "Discover"
  },
  {
    href: "/make-burger",
    text: "Make burger"
  }
];

const Nav = () => {
  const router = useRouter();

  return (
    <nav className={sl.nav}>
      <ul className={sl.list}>
        {links.map(link => (
          <li className={sl.linkItem} key={link.href}>
            <Link
              className={cn(sl.link, {
                [sl.isActive]: router.pathname === link.href
              })}
              href={link.href}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
