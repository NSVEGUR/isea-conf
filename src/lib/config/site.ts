export const siteConfig = {
  title: "ISEA-ISAP 2025",
  description:
    "Fourth ISEA International Conference on Security and Privacy 2025",
  copyright: 2025,
  url: "https://isea-conf.vercel.app",
  links: {
    twitter: "",
    company: "",
  },
  navigation: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Committee",
      href: "/committee",
    },
    {
      title: "Program",
      children: [
        {
          title: "Tutorial Schedule",
          href: "/program/tutorials",
        },
        {
          title: "Conference Schedule",
          href: "/program/conference",
        },
      ],
    },
    {
      title: "Registration",
      children: [
        {
          title: "Registration",
          href: "/registration",
        },
        {
          title: "Accommodation",
          href: "/registration/accommodation",
        },
        {
          title: "Travel and Visa",
          href: "/registration/travel",
        },
        {
          title: "Places to Visit in Chennai",
          href: "/registration/places",
        },
      ],
    },
    {
      title: "Submission",
      children: [
        {
          title: "Camera Ready Submission",
          href: "/submission/camera-ready",
        },
        {
          title: "Call for Papers",
          href: "/submission/call-for-papers",
        },
        {
          title: "Call for Tutorials",
          href: "/submission/call-for-tutorials",
        },
        {
          title: "Call for Sponsors/Exhibits",
          href: "/submission/call-for-sponsors",
        },
        {
          title: "Call for Fellowships",
          href: "/submission/call-for-fellowships",
        },
        {
          title: "Call for Design Contest",
          href: "/submission/call-for-design-contest",
        },
        {
          title: "PhD Research Forum",
          href: "/submission/phd-research-forum",
        },
        {
          title: "Important Dates",
          href: "/submission/important-dates",
        },
      ],
    },
    {
      title: "Sponsors",
      href: "/sponsors",
    },
    {
      title: "Speakers",
      href: "/speakers",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ] as {
    title: string;
    href?: string;
    children?: { title: string; href: string }[];
  }[],
} as const;

export type SiteConfig = typeof siteConfig;
