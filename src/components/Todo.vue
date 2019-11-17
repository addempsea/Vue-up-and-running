<template>
  <div class="mt-3">
    <h3>Todos</h3>
    <div class="row">
      <div class="p-3 mb-2 bg-info text-white col-3 mx-1" v-for="todo in getTodos" :key="todo.id">
          {{todo.title}}
          <i class="fa fa-trash" aria-hidden="true" @click="deleteTodo(todo.id)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todo",

  computed: {
    ...mapGetters([
      'getTodos'
    ])
  },

  methods: {
    ...mapActions([
      'fetchData', 'deleteTodo'
    ])
  },

  
    created () {
      return this.fetchData()
    }
}
</script>

<style scoped>
  i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
    color: brown
  }
</style>