import Link from "next/link";
import Router from "next/router";
import { RefCallback, useLayoutEffect, useRef } from "react";
import { links } from "./links";
import sl from "./index.module.scss";

const Nav = () => {
  const linksRef = useRef<Record<string, HTMLLIElement>>({});
  const movingLineRef = useRef<HTMLDivElement>(null);

  const handleRef: RefCallback<HTMLLIElement> = node => {
    if (node) {
      linksRef.current[node.dataset.route as string] = node;
    }
  };

  useLayoutEffect(() => {
    if (!movingLineRef.current) return;
    const movingLine = movingLineRef.current;
    const moveLine = (newRoute: string) => {
      const routes = Object.keys(linksRef.current);
      for (const route of routes) {
        if (newRoute === route) {
          const { offsetLeft, clientWidth } = linksRef.current[route];
          movingLine.style.left = offsetLeft + "px";
          movingLine.style.width = clientWidth + "px";
          break;
        }
      }
    };
    moveLine(Router.pathname);
    const handleRoute = (route: string) => moveLine(route);
    Router.events.on("routeChangeComplete", handleRoute);
    return () => {
      Router.events.off("routeChangeComplete", handleRoute);
    };
  }, []);

  return (
    <nav className={sl.nav}>
      <ul className={sl.list}>
        {links.map(link => (
          <li
            className={sl.linkItem}
            key={link.href}
            data-route={link.href}
            ref={handleRef}
          >
            <Link className={sl.link} href={link.href}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className={sl.movingLine} ref={movingLineRef} />
    </nav>
  );
};

export default Nav;
