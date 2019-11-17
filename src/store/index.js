import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    todos: []
  },

  getters: {
    getTodos: state => state.todos
  },

  mutations: {
    setTodos (state, todos) {
      state.todos = todos;
    },

    newTodo(state, todo) {
      state.todos.unshift(todo)
    },

    removeTodo(state, id) {
      state.todos = state.todos.filter(function(todo) {
        return todo.id != id;
      })
    }
  },
  actions: {
    fetchData ({commit}){
      axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(r => r.data)
        .then(todos => {
        commit('setTodos', todos)
        });
    },

    addTodo({commit}, title) {
      axios
        .post('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
        .then(r => r.data)
        .then(todos => {
        commit('newTodo', todos)
        });
    },

    deleteTodo({commit}, id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);   
      commit('removeTodo', id);
    },


  },
  modules: {
  }
})
