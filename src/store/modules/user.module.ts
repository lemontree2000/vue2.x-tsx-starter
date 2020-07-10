import { ActionContext } from "vuex";

export enum actionTypes {
  SAVE_USER_INFO = "SAVE_USER_INFO",
}

export interface UserState {
  userName: string;
}

// initial state
const state = (): UserState => ({
  userName: "",
});

const getters = {};

const mutations = {
  [actionTypes.SAVE_USER_INFO](state: UserState, data: any) {
    state.userName = data;
  },
};

export const actions = {
  login(content: ActionContext<any, any>, data: any) {
    content.commit(actionTypes.SAVE_USER_INFO, data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
