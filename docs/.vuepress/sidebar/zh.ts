import { sidebar } from "vuepress-theme-hope";
import { resolvePages } from "../utils";
import categories from "../categories";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "目录",
      link: "/content.md",
      icon: "note",
    },
    ...(function*() {
      for (const i of categories) {
        yield { text: i.displayName, icon: "more", ...resolvePages(i.directory, i.filter) }  
      }
    })()
  ],
});
