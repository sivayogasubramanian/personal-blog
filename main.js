import blog, { ga } from "https://deno.land/x/blog@0.4.2/blog.tsx";
import {
  IconEmail,
  IconGithub,
  IconLinkedin,
  IconPortfolio,
} from "./components.tsx";
import "./prismjs-extensions.ts";

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
      target: "_blank",
    },
    {
      title: "GitHub",
      url: "https://github.com/sivayogasubramanian",
      icon: IconGithub(),
      target: "_blank",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/sivayogasubramanian",
      icon: IconLinkedin(),
      target: "_blank",
    },
    {
      title: "Email",
      url: "mailto:sivayogasubramanian@gmail.com",
      icon: IconEmail(),
      target: "_blank",
    },
  ],
  favicon: "./favicon.ico",
  ogImage: "./og.jpg",
  dateStyle: "long",
  middlewares: [ga("UA-229977013-1")],
});
