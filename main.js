import blog from "https://deno.land/x/blog@0.4.1/blog.tsx";
import {
  IconEmail,
  IconGithub,
  IconLinkedin,
  IconPortfolio,
} from "./components.tsx";

blog({
  title: "Siva's Blog.",
  description: "Sharing what I learn with everyone!",
  author: "Siva",
  avatar: "./siva.jpg",
  avatarClass: "rounded-full",
  cover: "./cover.jpg",
  coverTextColor: "#f7fbff",
  links: [
    {
      title: "Portfolio",
      url: "https://sivarn.com",
      icon: IconPortfolio(),
    },
    {
      title: "GitHub",
      url: "https://github.com/sivayogasubramanian",
      icon: IconGithub(),
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/sivayogasubramanian",
      icon: IconLinkedin(),
    },
    {
      title: "Email",
      url: "mailto:sivayogasubramanian@gmail.com",
      icon: IconEmail(),
    },
  ],
  favicon: "./favicon.ico",
  ogImage: "./og.jpg",
  dateStyle: "long",
});
