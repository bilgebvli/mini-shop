import Vue from 'vue';
import VueI18n from 'vue-i18n';

const numberFormats = {
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
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'tr-TR',
  numberFormats,
});

export default i18n;
