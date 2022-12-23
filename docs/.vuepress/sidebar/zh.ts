import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "电动篇",
      prefix: "1A/",
      children: ["01.md", "02.md", "03.md", "04.md"],
    },
    {
      text: "文档",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
