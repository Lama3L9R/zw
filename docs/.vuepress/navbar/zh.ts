import { navbar } from "vuepress-theme-hope";
import { version } from "../version";

export const zhNavbar = navbar([
  "/",
  {
    text: "正文",
    icon: "creative",
    prefix: "/",
    children: [
      {
        text: "目录",
        prefix: "/",
        link: "content.md",
      },
      {
        text: "电动篇",
        prefix: "1A/",
        children: ["01.md", "02.md", "03.md", "04.md"],
      },
      {
        text: "生活篇",
        prefix: "1B/",
        children: ["01.md", "02.md", "03.md", "04.md", "05.md", "06.md", "07.md", "08.md", "09.md", "10.md", "11.md", "12.md", "13.md"],
      },
      {
        text: "人生哲理篇",
        prefix: "1C/",
        children: ["01.md"],
      },
      {
        text: "祝福篇",
        prefix: "1D/",
        children: ["01.md"],
      },
    ],
  },
]);
