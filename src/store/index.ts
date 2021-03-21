import { createStore } from 'vuex'

export interface State {
  sidebarActive: boolean,
}

export default createStore<State>({
  state: {
    sidebarActive: false,
  },
  mutations: {
    toggleSidebar(state: State) {
      state.sidebarActive = !state.sidebarActive;
    },
  },
})
