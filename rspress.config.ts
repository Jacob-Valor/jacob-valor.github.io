import * as path from "node:path";
import { defineConfig } from "@rspress/core";
import { pluginLlms } from "@rspress/plugin-llms";
import { pluginAlgolia } from "@rspress/plugin-algolia";
import { pluginBlogList } from "rspress-plugin-blog-list";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  globalStyles: path.join(__dirname, "tailwind.css"),
  plugins: [pluginLlms(), pluginAlgolia(), pluginBlogList()],

  title: "Jacob-Valor",
  icon: "/rspress-icon.png",
  logo: {
    light: "/rspress-light-logo.png",
    dark: "/rspress-dark-logo.png",
  },
  themeConfig: {
    llmsUI: true,
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/web-infra-dev/rspress",
      },
      {
        icon: "x",
        mode: "link",
        content: "https://twitter.com/",
      },
      {
        icon: "linkedin",
        mode: "link",
        content: "https://linkedin.com/",
      },
      {
        icon: "instagram",
        mode: "link",
        content: "https://instagram.com/",
      },
      {
        icon: "youtube",
        mode: "link",
        content: "https://facebook.com/",
      },
    ],
  },
});
