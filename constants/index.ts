export const navLinks = [
  { name: "home", href: "hero" },
  { name: "about us", href: "about" },
  { name: "popular", href: "popular" },
  { name: "recently", href: "recent" },
];

interface footerProps {
  title: string;
  subChild: string[];
}

export const footerLinks: footerProps[] = [
  {
    title: "Main Menu",
    subChild: ["About", "Menus", "Offer", "Events"],
  },
  {
    title: "Information",
    subChild: ["Contact", "Order & Returns", "Videos", "Reservation"],
  },
  {
    title: "Address",
    subChild: [
      "Av. Hacienda 1234 Lima 4321, Perú",
      "9AM - 11PM Monday to Friday",
    ],
  },
];
