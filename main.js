import blog from "https://deno.land/x/blog@0.4.0/blog.tsx";
import { IconPortfolio } from "./components.tsx";

blog({
  title: "Siva's Blog.",
  description: "Sharing what I learn with everyone!",
  author: "Siva",
  avatar: "./siva.jpg",
  avatarClass: "rounded-full",
  cover: "./cover.jpg",
  links: [
    {
      title: "Portfolio",
      url: "https://sivarn.com",
      icon: IconPortfolio(),
    },
    {
      title: "GitHub",
      url: "https://github.com/sivayogasubramanian",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/sivayogasubramanian",
    },
    {
      title: "Email",
      url: "mailto:sivayogasubramanian@gmail.com",
    },
  ],
  theme: "dark",
  favicon: "./favicon.ico",
  ogImage: "./og.jpg",
  dateStyle: "long",
});
