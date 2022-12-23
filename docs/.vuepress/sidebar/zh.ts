import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "电动篇",
      icon: "more",
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
});
