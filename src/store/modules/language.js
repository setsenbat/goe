import $i18n from '../../lang/lang';

const state = {
  language: {
    text: 'mn',
    flag: 'flag-icon-mn'
  },
};

const getters = {
  getLanguage: (state) => state.language,
};

const actions = {
  changeLanguage ({commit}, data) {
    commit("switchLanguage", data);
  }
};

const mutations = {
  switchLanguage(state, data) {
    state.language = data;
    $i18n.locale = data.text;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
