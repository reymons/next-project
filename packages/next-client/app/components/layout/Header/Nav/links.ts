import { HOME_ROUTE, MAKE_BURGER_ROUTE } from "@dictionaries/routes";

export const links: Array<{
  href: string;
  text: string;
}> = [
  {
    href: HOME_ROUTE,
    text: "Discover"
  },
  {
    href: MAKE_BURGER_ROUTE,
    text: "Make burger"
  }
];
