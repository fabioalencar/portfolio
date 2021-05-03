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
      status: true,
    },
    {
      id: 2,
      title: "Find and book beauty services with Trinks",
      subtitle: "UX/UI for App and Website",
      path: "redesign-trinks",
      categories: ["design"],
      status: true,
    },

    {
      id: 3,
      title: "Easy Baby",
      subtitle: "Brand, UX, UI and Frontend for Easy Baby MVP.",
      path: "easy-baby",
      categories: ["design", "frontend"],
    },

    {
      id: 4,
      title: "A new way of taking care of health",
      subtitle: "UX, UI and Frontend for VidaClass web app",
      path: "vidaclass",
      categories: ["design", "frontend"],
      status: true,
    },
    {
      id: 5,
      title: "Awarded interactive experience",
      subtitle: "Game McCain - APAS 2019 - UI and Development",
      path: "game-mccain",
      categories: ["design", "frontend"],
      status: true,
    },
    {
      id: 6,
      title: "Liz Cocktails Website",
      subtitle:
        "Responsive Website built for Liz Cocktails & Co  with CMS Wordpress.",
      path: "liz-cocktails",
      categories: ["design", "frontend"],
      status: true,
    },
    {
      id: 7,
      title: "We make you go further",
      subtitle: "Website for gas station franchise",
      path: "saara",
      categories: ["design", "frontend"],
      status: false,
    },
    {
      id: 8,
      title: "Riobike courier",
      subtitle: "Brand/UI/Wordpress development",
      path: "riobike",
      categories: ["design", "frontend"],
      status: false,
    } /*,
    {
      id: 8,
      title: "Runplace: Achieve your best",
      subtitle: "Brand/UI/Wordpress development",
      path: "runplace",
      categories: ["design", "frontend"],
      status: false,
    } 
    {
      id: 9,
      title: "Changing the world",
      subtitle: "Volunteer work in a high social impact organization",
      path: "glocal",
      categories: ["design", "frontend"],
      status: false,
    } ,*/,
  ],
};
