<template>
    <div>
        
        <h2>Add Todo</h2>
        <div>
            <form @submit.prevent="onSubmit">
                <input type="text" class="form-control col-4" id="inlineFormInputGroupUsername2" placeholder="add todo" v-model="title">
                <button type="submit" class="btn btn-primary my-2 bb">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'addTodo',

    data() {
        return {
            title: ''
        }
    },

    methods: {
        ...mapActions(['addTodo']),

        onSubmit() {
            this.addTodo(this.title)
        }
    }

    
}
</script>

<style scoped>
    .bb {
        display: flex;
        align-items: flex-start;
    }
</style>