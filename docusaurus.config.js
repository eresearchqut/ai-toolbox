// @ts-check
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Toolbox',
  staticDirectories: ['static'],
  tagline: 'AI / ML on the HPC at QUT',
  favicon: 'img/favicon.ico',
  url: 'https://eresearchqut.github.io',
  baseUrl: '/',
  organizationName: 'eresearchqut',
  projectName: 'ai-toolbox',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: true,
          editUrl: 'https://github.com/eresearchqut/ai-toolbox/tree/main/ai-toolbox/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/eresearchqut/ai-toolbox/tree/main/ai-toolbox/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      announcementBar: {
        id: 'wip_announcement',
        content: "This site is a work in progress.",
        backgroundColor: '#ffff00',
        textColor: '#000000',
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AI Toolbox',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'toolboxSidebar',
            position: 'left',
            label: 'Toolbox',
          },
          {
            type: 'docSidebar',
            sidebarId: 'hpcSidebar',
            position: 'left',
            label: 'HPC',
          },
          {
            type: 'docSidebar',
            sidebarId: 'jupyterhubSidebar',
            position: 'left',
            label: 'JupyterHub',
          },
          {
            type: 'docSidebar',
            sidebarId: 'rvdiSidebar',
            position: 'left',
            label: 'rVDI',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Toolbox',
            items: [
              {
                label: 'Toolbox',
                to: 'docs/toolbox',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} eResearch QUT`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
