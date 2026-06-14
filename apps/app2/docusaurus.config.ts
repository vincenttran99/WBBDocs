import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'App 2 Docs',
  tagline: 'Documentation for App 2',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://vincenttran99.github.io',
  baseUrl: '/WBBDocs/app2/',
  organizationName: 'vincenttran99',
  projectName: 'WBBDocs',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/vincenttran99/WBBDocs/edit/main/apps/app2/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        docsRouteBasePath: '/',
        hashed: true,
        language: 'en',
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'App 2 Docs',
      logo: {
        alt: 'App 2 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://vincenttran99.github.io/WBBDocs/',
          label: '← All Apps',
          position: 'right',
        },
        {
          href: 'https://github.com/vincenttran99/WBBDocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} WBB. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
