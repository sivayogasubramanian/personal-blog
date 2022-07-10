import blog from "https://deno.land/x/blog@0.4.0/blog.tsx";

blog({
  title: "Siva's Blog.",
  author: "Siva",
  avatar: "./siva.jpg",
  avatarClass: "rounded-full",
  links: [
    { title: "Portfolio", url: "https://sivarn.com" },
    { title: "GitHub", url: "https://github.com/sivayogasubramanian" },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/sivayogasubramanian",
    },
    { title: "Email", url: "mailto:sivayogasubramanian@gmail.com" },
  ],
  background: "#f7fbff",
});
