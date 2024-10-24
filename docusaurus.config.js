/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IPAYMENT',
  tagline: ' API Docs by IPAYMENT',
  url: 'https://docs.ipayments.in',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'anilkumar1995-star', // Usually your GitHub org/user name.
  projectName: 'ipayments', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      navbar: {
        title: '',
        logo: {
          alt: 'IPAYMENT API DOC',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          // Please keep GitHub link to the right for consistency.
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Smart Payout',
        //         to: '#',
        //       },
        //       {
        //         label: 'AEPS',
        //         to: '#',
        //       },
        //       {
        //         label: 'Smart Collect',
        //         to: '#',
        //       },
        //       {
        //         label: 'Validation Suite',
        //         to: '#',
        //       },
        //       {
        //         label: 'UPI TPV',
        //         to: '#',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Social',
        //     items: [
        //       {
        //         label: 'Facebook',
        //         href: '#',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: '#',
        //       },
        //       {
        //         label: 'Instagram',
        //         href: '#',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '#',
        //       },
        //       // {
        //       //   label: 'GitHub',
        //       //   href: 'https://github.com/facebook/docusaurus',
        //       // },
        //     ],
        //   },
        //   {
        //     title: 'Legal',
        //     // Please do not remove the privacy and terms, it's a legal requirement.
        //     items: [
        //       {
        //         label: 'Privacy',
        //         href: '#',
        //       },
        //       {
        //         label: 'Terms',
        //         href: '#',
        //       },
        //       {
        //         label: 'Data Policy',
        //         href: '#',
        //       },
        //       {
        //         label: 'Cookie Policy',
        //         href: '#',
        //       },
        //     ],
        //   },
        // ],
        // logo: {
        //   alt: 'IPAYMENT',
        //   src: 'img/logo.png',
        //   href: '#',
        // },
        copyright: `Copyright &copy; ${new Date().getFullYear()} IPAYMENT`,
      },
    }),
};

module.exports = config;
