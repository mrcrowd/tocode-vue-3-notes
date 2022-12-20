import { createStore } from 'vuex'
import { lsSetItem, lsGetItem } from '/utils/localStorage'

export const store = createStore({
  state: {
    notes: lsGetItem('notes') ? lsGetItem('notes') : []
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes
    },
    removeNote(state, index) {
      state.notes.splice(index, 1)
    },
    addNote(state, note) {
      state.notes.push(note)
    },
    updateLocalStorage(state) {
      lsSetItem('notes', state.notes)
    }
  },
  actions: {
    removeNote({ commit, index }) {
      commit('removeNote', index)
      commit('updateLocalStorage')
    },
    addNote({ commit }, note) {
      commit('addNote', note)
      commit('updateLocalStorage')
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    }
  }
})
