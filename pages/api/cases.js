const cases = {
  cases: [
    {
      id: 1,
      title: "Product Design Leadership at Trinks ",
      subtitle: "The biggest marketplace of beauty services in Brazil",
      path: "trinks",
      categories: ["design"],
    },
    {
      id: 2,
      title: "Find and book beauty services with Trinks",
      subtitle: "UX/UI for App and Website",
      path: "redesign-trinks",
      categories: ["design"],
    },
    {
      id: 3,
      title: "A new way of taking care of health",
      subtitle: "UX, UI and Frontend for VidaClass web app",
      path: "vidaclass",
      categories: ["design", "frontend"],
    },
    {
      id: 4,
      title: "Awarded interactive experience",
      subtitle: "Game McCain - APAS 2019 - UI and Development",
      path: "game-mccain",
      categories: ["design", "frontend"],
    },
    {
      id: 5,
      title: "Liz Cocktails Website",
      subtitle:
        "Responsive Website built for Liz Cocktails & Co  with CMS Wordpress.",
      path: "liz-cocktails",
      categories: ["design", "frontend"],
    } /*
    {
      id: 6,
      title: "Riobike courier Branding",
      subtitle: "Design, Brand Identity & Website",
      path: "riobike",
      categories: ["design", "frontend"],
    },
    {
      id: 7,
      title: "Musicalismo (concept)",
      subtitle: "Product Design, personas and MVP ideation",
      path: "musicalismo",
      categories: ["design", "frontend"],
    },
    {
      id: 8,
      title: "Rede Saara website",
      subtitle: "Design, Frontend and Wordpress development",
      path: "saara",
      categories: ["design", "frontend"],
    },
    {
      id: 9,
      title: "Volunteer work at Glocal",
      subtitle: "Design, Frontend and Wordpress development",
      path: "glocal",
      categories: ["design", "frontend"],
    },*/,
  ],
};
export default function handler(req, res) {
  res.status(200).json(cases);
}
