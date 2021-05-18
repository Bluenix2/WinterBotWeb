import { createStore } from 'vuex'

export interface State {
  sidebarActive: boolean,
}

export default createStore<State>({
  state: {
    sidebarActive: true,
  },
  mutations: {
    toggleSidebar(state: State) {
      state.sidebarActive = !state.sidebarActive;
    },
  },
})
