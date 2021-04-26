import { createStore } from 'vuex'

export default createStore({
  state: {
    list: JSON.parse(localStorage.getItem('list')),
    sj: JSON.parse(localStorage.getItem('sj')),
    zn: JSON.parse(localStorage.getItem('xn')),
    ds: JSON.parse(localStorage.getItem('ds')),
    jd: JSON.parse(localStorage.getItem('jd')),
    bjb: JSON.parse(localStorage.getItem('bjb')),
  },
  mutations: {
    addList(state, parem) {
      state.list = parem
      localStorage.setItem('list', JSON.stringify(state.list))
    },
    addsj(state, parem) {
   
      state.sj = parem
      localStorage.setItem('sj', JSON.stringify(state.sj))
    },
    addzn(state, parem) {
      state.zn = parem
      localStorage.setItem('zn', JSON.stringify(state.zn))
    },
    addds(state, parem) {
      state.ds = parem
      localStorage.setItem('ds', JSON.stringify(state.ds))
    },
    addjd(state, parem) {
      state.jd = parem
      localStorage.setItem('jd', JSON.stringify(state.jd))
    },
    addbjb(state, parem) {
      state.bjb = parem
      localStorage.setItem('bjb', JSON.stringify(state.bjb))
    },
  },
  actions: {},
  modules: {},
})
