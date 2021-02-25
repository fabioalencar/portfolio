const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "http://localhost:3000"
  : "https://fabioalencar.com";

export const cases = {
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
    },
  ],
};
