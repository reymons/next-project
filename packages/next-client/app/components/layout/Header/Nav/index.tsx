import Router from "next/router";
import { RefCallback, useLayoutEffect, useRef } from "react";
import { links } from "./links";
import { NavStyled, Item, List, MovingLine, Link } from "./index.styles";
import WindowResize from "@lib/window-resize";

const Nav = () => {
  const itemsRef = useRef<Record<string, HTMLLIElement>>({});
  const movingLineRef = useRef<HTMLDivElement>(null);

  const handleRef: RefCallback<HTMLLIElement> = node => {
    if (node) {
      itemsRef.current[node.dataset.route as string] = node;
    }
  };

  useLayoutEffect(() => {
    if (!movingLineRef.current) return;
    const movingLine = movingLineRef.current;
    const moveLine = (newRoute: string) => {
      const routes = Object.keys(itemsRef.current);
      for (const route of routes) {
        if (newRoute === route) {
          const { offsetLeft, clientWidth } = itemsRef.current[route];
          movingLine.style.left = offsetLeft + "px";
          movingLine.style.width = clientWidth + "px";
          break;
        }
      }
    };
    moveLine(Router.pathname);
    const handleRoute = (route: string) => moveLine(route);
    const handleResize = () => moveLine(Router.pathname);
    Router.events.on("routeChangeComplete", handleRoute);
    WindowResize.addListener(handleResize);
    return () => {
      Router.events.off("routeChangeComplete", handleRoute);
      WindowResize.removeListener(handleResize);
    };
  }, []);

  return (
    <NavStyled>
      <List>
        {links.map(link => (
          <Item key={link.href} data-route={link.href} ref={handleRef}>
            <Link href={link.href}>{link.text}</Link>
          </Item>
        ))}
      </List>
      <MovingLine ref={movingLineRef} />
    </NavStyled>
  );
};

export default Nav;
