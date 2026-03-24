/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`, // folder z tłumaczeniami
        languages: [`pl`, `en`],
        defaultLanguage: `pl`,
        siteUrl: `http://localhost:8000`,
        i18nextOptions: {
          interpolation: { escapeValue: false },
          nsSeparator: false,
        },
        generateDefaultLanguagePage: false,
        redirect: true,
      },
    },
  ],
};
