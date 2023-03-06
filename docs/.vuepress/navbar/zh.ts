import { navbar } from "vuepress-theme-hope";
import categories from "../categories";
import { resolvePages } from "../utils";

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
      ...(function*() {
        for (const i of categories) {
          yield { text: i.displayName, icon: "more", ...resolvePages(i.directory, i.filter) }  
        }
      })()
    ],
  },
]);
