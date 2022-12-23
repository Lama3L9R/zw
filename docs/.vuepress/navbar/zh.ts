import { navbar } from "vuepress-theme-hope";
import { version } from "../version";

export const zhNavbar = navbar([
  "/",
  { text: "案例", icon: "discover", link: "/zh/demo/" },
  {
    text: "正文",
    icon: "creative",
    prefix: "/",
    children: [
      {
        text: "目录",
        prefix: "/",
        link: "README.md",
      },
      {
        text: "电动篇",
        icon: "creative",
        prefix: "1A/",
        children: ["01.md", "02.md", "03.md", "04.md"],
      },
      {
        text: "生活篇",
        icon: "more",
        prefix: "1B/",
        children: ["01.md", "02.md", "03.md", "04.md", "05.md", "06.md", "07.md", "08.md", "09.md"],
      },
    ],
  },
  {
    text: version,
    icon: "note",
    children: [
      {
        text: "V2 文档",
        link: "https://vuepress-theme-hope.github.io/v2/zh/",
      },
      {
        text: "V2 博客演示",
        link: "https://vuepress-theme-hope.github.io/blog-demo/zh/",
      },
      {
        text: "V1 文档",
        link: "https://vuepress-theme-hope.github.io/v1/zh/",
      },

      {
        text: "V1 演示",
        link: "https://vuepress-theme-hope.github.io/v1-demo/zh/",
      },
    ],
  },
]);
