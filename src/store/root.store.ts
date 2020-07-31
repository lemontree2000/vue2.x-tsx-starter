import { ActionContext } from 'vuex'

interface RootState {
  collapsed: boolean
}

export enum actionTypes {
  SAVE_COLLAPSED = 'SAVE_COLLAPSED'
}

const state: RootState = {
  collapsed: false
}

const mutations = {
  [actionTypes.SAVE_COLLAPSED](state: RootState, data: boolean) {
    state.collapsed = data
  }
}

const actions = {
  setSollapsed(context: ActionContext<RootState, RootState>, data: boolean) {
    context.commit(actionTypes.SAVE_COLLAPSED, data)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
