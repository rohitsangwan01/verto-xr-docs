import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "VertoXR Documentation",
  tagline: "Expand Your Vision, Enhance Your Workflow",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },
  url: "https://rohitsangwan01.github.io",
  baseUrl: "/",
  organizationName: "rohitsangwan01",
  projectName: "verto-xr-docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/rohitsangwan01/verto-xr-docs/tree/main/",
        },
        blog: {
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: "img/verto-xr-social-card.jpg",
    navbar: {
      title: "VertoXR",
      items: [
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/rohitsangwan01/Verto_XR",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Getting Started",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/pmAErJmGk5",
            },
            {
              label: "GitHub",
              href: "https://github.com/rohitsangwan01/Verto_XR",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Website",
              href: "https://vertoxr.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/rohitsangwan01/Verto_XR",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VertoXR.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
