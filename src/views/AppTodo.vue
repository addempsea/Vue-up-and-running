<template>
  <div class="container fluid">
    <h1>Mini Project</h1>
    <div class="">
      <add-todo class="mt-3"></add-todo>
      
      <Todo/>
    </div>
  </div>
</template>

<script>
import Todo from '../components/Todo.vue';
import AddTodo from '../components/AddTodo.vue'

export default {
  name: 'app',
  components: {
    Todo,
    AddTodo
  }
}
</script>