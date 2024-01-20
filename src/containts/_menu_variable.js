export const menu_function = [
  {
    name: "Home",
    link: "/",
    icon: "bx bx-home",
  },
  {
    name: "Recently played",
    link: "/recent",
    icon: "bx bx-time-five",
  },
  {
    name: "News",
    link: "/news",
    icon: "bx bx-star",
  },
  {
    name: "Trending now",
    link: "/trending",
    icon: "bx bxs-hot",
  },
  {
    name: "Updated",
    link: "/updated",
    icon: "bx bx-transfer",
  },
  {
    name: "Originals",
    link: "/original",
    icon: "bx bxs-florist",
  },
  {
    name: "Random",
    link: "/random",
    icon: "bx bx-shuffle",
  },
];
const data = [
  "2 Player",
  "Action",
  "Adventure",
  "Basketball",
  "Beauty",
  "Bike",
  "Car",
  "Card",
  "Casual",
  "Clicker",
  "Controller",
  "Dress Up",
  "Driving",
  "Escape",
  "Flash",
  "FPS",
  "Horror",
  ".io",
  "Mahjong",
  "Minecraft",
  "Multiplayer",
  "Pool",
  "Puzzle",
  "Shooting",
  "Soccer",
  "Sports",
  "Stickman",
  "Tower Defense",
];

export const menu_tag = data.map((item) => ({
  name: item,
  link: `/${item.toLowerCase().replace(/\s+/g, "-")}`,
  icon: `bx bxs-car`, // Tạo icon dựa vào index (đơn giản ví dụ)
}));
