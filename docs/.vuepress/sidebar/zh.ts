import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "目录",
      link: "/content.md",
      icon: "note",
    },
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
      children: ["01.md", "02.md", "03.md", "04.md", "05.md", "06.md", "07.md", "08.md", "09.md", "10.md"],
    },
    {
      text: "人生哲理篇",
      icon: "more",
      prefix: "1C/",
      children: ["01.md"],
    },
    {
      text: "祝福篇",
      icon: "more",
      prefix: "1D/",
      children: ["01.md"],
    },
  ],
});
