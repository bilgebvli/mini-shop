import Vue from 'vue';
import VueI18n from 'vue-i18n';

import tr from './messages/tr.json';
import en from './messages/en.json';

Vue.use(VueI18n);

const numberFormats = {
  'en-GB': {
    currency: {
      style: 'currency',
      currency: 'GBP',
      currencyDisplay: 'symbol',
      minimumIntegerDigits: 1,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    },
  },
  'tr-TR': {
    currency: {
      style: 'currency',
      currency: 'TRY',
      currencyDisplay: 'symbol',
      minimumIntegerDigits: 1,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      useGrouping: false,
    },
  },
};

const i18n = new VueI18n({
  locale: process.env.VUE_APP_SITE_LOCALE,
  fallbackLocale: process.env.VUE_APP_FALLBACK_LOCALE,
  messages: { 'en-GB': en, 'tr-TR': tr },
  numberFormats,
});

export default i18n;
