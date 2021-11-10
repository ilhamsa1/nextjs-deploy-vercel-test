module.exports = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en-gb', 'ja', 'zh-cn'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-gb',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: 'ascendaloyalty.com',
        defaultLocale: 'en-US',
      },
      {
        domain: 'ascendaloyalty.cn',
        defaultLocale: 'zh-cn',
      },
    ],
  },
  webpack5: true,
}
