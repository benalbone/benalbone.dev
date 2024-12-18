import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "ben albone",
  EMAIL: "alpha@benalbone.dev",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "home",
  DESCRIPTION: "a collection of thoughts and ideas",
};

export const BLOG: Metadata = {
  TITLE: "blog",
  DESCRIPTION: "this is where i'll occasionally write something that has caught my interest",
};

// export const WORK: Metadata = {
//   TITLE: "Work",
//   DESCRIPTION: "Where I have worked and what I have done.",
// };

// export const PROJECTS: Metadata = {
//   TITLE: "Projects",
//   DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
// };

export const SOCIALS: Socials = [
  { 
    NAME: "twitter (X)",
    HREF: "https://twitter.com/benalbone",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/benalbone"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/benalbone",
  }
];
