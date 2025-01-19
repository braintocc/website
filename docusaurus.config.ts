import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: './.env.prod' })  
}
else //if environment is undefined - using swizzle
    require('dotenv').config({ path: './.env.local' }) 

function getSiteTagline() {
  switch(process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "es": return 'conecta tu segundo cerebro al mundo';
    default: return 'connect your second brain to the world';
  }
}

const config: Config = {
  title: 'Brainto',
  tagline: getSiteTagline(),
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://brainto.cc',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'braintocc', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Brainto',
      logo: {
        alt: 'Brainto Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
           type: 'docSidebar',
           sidebarId: 'tutorialSidebar',
           position: 'left',
           label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/braintocc',
          label: 'GitHub',
          position: 'right',
        },
        {
          to: '#tally-open=mOPVGp&tally-layout=modal&tally-width=300&tally-hide-title=1&tally-overlay=1&tally-emoji-text=👋&tally-emoji-animation=wave&tally-auto-close=0&level=free',
          label: 'Join Waiting List',
          position: 'right',
        },
        {
          href: process.env.APP_REDIRECT_URI,
          label: 'Login',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [

        {
           title: 'Navigation',
           items: [
             {
               label: 'Blog',
               to: '/blog',
             },
           ],
        },
        {
          title: 'Legal',
          items:[
            {
              label: 'Privacy Policy',
              to: 'privacy-policy'
            }
          ]
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
               label: 'GitHub',
               href: 'https://github.com/braintocc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brainto`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    
    {
      src: '/js/tawk.js',
      async: false,
    },
  ],
};

export default config;
