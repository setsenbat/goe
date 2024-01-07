import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

const DEFAULT_LANG = 'mn';

const locales = {
  ru: require("./i18n/ru.json"),
  en: require("./i18n/en.json"),
  cn: require("./i18n/cn.json"),
  mn: require("./i18n/mn.json")
};
const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales
});

export default i18n;
