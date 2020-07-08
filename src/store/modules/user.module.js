const USER_TYPES = {
    SAVE_USER_INFO: 'SAVE_USER_INFO'
}

// export enum actionTypes {
//     INIT = 'INIT',
//     GET_ALARM_NUM = 'GET_ALARM_NUM',
//     CHANGE_ALARM_NUM = 'CHANGE_ALARM_NUM'
//   }
// initial state
const state = () => ({
  userName: "",
});

const getters = {};

const mutations = {
    [USER_TYPES.SAVE_USER_INFO](state, data) {
        state.userName = data
    }
};

export const actions = {
    login(content, data) {
        content.commit(USER_TYPES.SAVE_USER_INFO, data)
    }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
