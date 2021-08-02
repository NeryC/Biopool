const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en','fr','pt'],
  },
  localePath: path.resolve('./public/locales')
}